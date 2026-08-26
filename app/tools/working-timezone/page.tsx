"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Zone = { label: string; value: string | number };

const aliases: Zone[] = [
  { label: "UTC / GMT", value: "UTC" },
  { label: "WIB (GMT+7) · Jakarta", value: "Asia/Jakarta" },
  { label: "WITA (GMT+8) · Makassar", value: "Asia/Makassar" },
  { label: "WIT (GMT+9) · Jayapura", value: "Asia/Jayapura" },
  { label: "PST / PDT · Pacific Time", value: "America/Los_Angeles" },
  { label: "MST / MDT · Mountain Time", value: "America/Denver" },
  { label: "CST / CDT · Central Time", value: "America/Chicago" },
  { label: "EST / EDT · Eastern Time", value: "America/New_York" },
  { label: "BST · British Time", value: "Europe/London" },
  { label: "CET / CEST · Central Europe", value: "Europe/Paris" },
  { label: "EET / EEST · Eastern Europe", value: "Europe/Helsinki" },
  { label: "IST (GMT+5:30) · India", value: "Asia/Kolkata" },
  { label: "JST (GMT+9) · Japan", value: "Asia/Tokyo" },
  { label: "KST (GMT+9) · Korea", value: "Asia/Seoul" },
  { label: "AEST / AEDT · Sydney", value: "Australia/Sydney" },
  { label: "NZST / NZDT · Auckland", value: "Pacific/Auckland" },
];

const fixedZones: Zone[] = Array.from({ length: 27 }, (_, index) => index - 12).map((offset) => ({
  label: `GMT${offset >= 0 ? "+" : ""}${offset}`,
  value: offset * 60,
}));

const zones = [...aliases, ...fixedZones];

function offsetAt(date: Date, timeZone: string) {
  const part = new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "longOffset" })
    .formatToParts(date)
    .find((item) => item.type === "timeZoneName")?.value;
  const match = part?.match(/GMT([+-])(\d{2}):?(\d{2})?/);
  if (!match) return 0;
  return (match[1] === "-" ? -1 : 1) * (Number(match[2]) * 60 + Number(match[3] || 0));
}

function toInstant(date: string, time: string, zone: Zone) {
  const wallTime = Date.parse(`${date}T${time}:00Z`);
  if (typeof zone.value === "number") return new Date(wallTime - zone.value * 60000);

  let instant = new Date(wallTime - offsetAt(new Date(wallTime), zone.value) * 60000);
  instant = new Date(wallTime - offsetAt(instant, zone.value) * 60000);
  return instant;
}

function formatTime(instant: Date, zone: Zone) {
  if (typeof zone.value === "number") {
    return `${new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(instant.getTime() + zone.value * 60000))} (${zone.label})`;
  }

  return new Intl.DateTimeFormat("en-US", {
    timeZone: zone.value,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short",
  }).format(instant);
}

function addDay(date: string) {
  const next = new Date(`${date}T00:00:00Z`);
  next.setUTCDate(next.getUTCDate() + 1);
  return next.toISOString().slice(0, 10);
}

function durationLabel(milliseconds: number) {
  const minutes = Math.round(milliseconds / 60000);
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

const inputClasses =
  "mt-2 w-full rounded-lg border-2 border-black bg-white px-3 py-2 text-sm text-black outline-none focus:ring-2 focus:ring-[#A8B4F6]";

export default function WorkingTimezonePage() {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("17:00");
  const [from, setFrom] = useState("Asia/Jakarta");
  const [to, setTo] = useState("America/Los_Angeles");

  useEffect(() => setDate(new Date().toISOString().slice(0, 10)), []);

  const source = zones.find((zone) => zone.value.toString() === from) || aliases[1];
  const target = zones.find((zone) => zone.value.toString() === to) || aliases[4];
  const endDate = date && end <= start ? addDay(date) : date;
  const startInstant = date ? toInstant(date, start, source) : null;
  const endInstant = date ? toInstant(endDate, end, source) : null;
  const duration = startInstant && endInstant ? endInstant.getTime() - startInstant.getTime() : 0;

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#B9F8FE] px-4 py-12 font-sans">
      <div className="flex w-full max-w-3xl flex-col gap-8">
        <Link href="/tools" className="w-fit font-semibold text-black/60 hover:text-black">
          ← Back to Tools
        </Link>
        <header>
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">Working Timezone</h1>
          <p className="mt-3 text-sm text-black/80 sm:text-base">
            Convert a working window between timezones, including DST-aware aliases.
          </p>
        </header>

        <section className="rounded-2xl border-[3px] border-black bg-white p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-3">
            <label className="text-sm font-bold text-black">Date<input className={inputClasses} type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label>
            <label className="text-sm font-bold text-black">Start<input className={inputClasses} type="time" value={start} onChange={(event) => setStart(event.target.value)} /></label>
            <label className="text-sm font-bold text-black">End<input className={inputClasses} type="time" value={end} onChange={(event) => setEnd(event.target.value)} /></label>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold text-black">From<select className={inputClasses} value={from} onChange={(event) => setFrom(event.target.value)}>{zones.map((zone) => <option key={zone.label} value={zone.value}>{zone.label}</option>)}</select></label>
            <label className="text-sm font-bold text-black">To<select className={inputClasses} value={to} onChange={(event) => setTo(event.target.value)}>{zones.map((zone) => <option key={zone.label} value={zone.value}>{zone.label}</option>)}</select></label>
          </div>
        </section>

        {startInstant && endInstant && duration > 0 && (
          <section className="rounded-2xl border-[3px] border-black bg-[#FFE5B4] p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/60">Converted working window</p>
            <p className="mt-3 text-2xl font-extrabold text-black sm:text-3xl">{formatTime(startInstant, target)}</p>
            <p className="mt-2 text-lg font-bold text-black/70">to</p>
            <p className="mt-2 text-2xl font-extrabold text-black sm:text-3xl">{formatTime(endInstant, target)}</p>
            <p className="mt-5 border-t-2 border-black/20 pt-4 text-sm font-bold text-black">
              Duration: {durationLabel(duration)} · {source.label} → {target.label}
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
