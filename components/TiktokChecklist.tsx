"use client"

import { useState, useEffect } from "react"

interface ChecklistItem {
  id: string
  text: string
}

interface ChecklistPhase {
  title: string
  items: ChecklistItem[]
}

const phases: ChecklistPhase[] = [
  {
    title: "Phase 1 - Device Preparation",
    items: [
      { id: "p1-1", text: "Buy an iPhone or Android. Any model above iPhone 5 or running Android v5.0 works. Unused devices works best." },
      { id: "p1-2", text: "Perform a full hard reset (factory reset) of the device." },
      { id: "p1-3", text: "Do NOT insert any SIM card." },
      { id: "p1-4", text: "Turn Airplane Mode ON." },
      { id: "p1-5", text: "Connect to Wi-Fi only." },
    ],
  },
  {
    title: "Phase 2 - Apple/Google Account Setup",
    items: [
      { id: "p2-1", text: "Create a brand new Apple ID (gmail account) (or gmail/outlook etc)" },
      { id: "p2-2", text: "Log into the freshly reset iPhone using this new Apple ID." },
      { id: "p2-3", text: "Set your App Store region to the United States (or Play Store). Tip: You can use PayPal to switch the region if needed." },
    ],
  },
  {
    title: "Phase 3 - VektaVPN Setup",
    items: [
      { id: "p3-1", text: "Download the VektaVPN iOS app or on Android, WireGuard app." },
      { id: "p3-2", text: "Log in using your VektaVPN account (same email used on web)." },
      { id: "p3-3", text: "Start the VPN connection. Allow up to 10 minutes to sync your unique unshared Residential IP address." },
      { id: "p3-4", text: "Keep VektaVPN ON at all times (do not turn it off!)." },
    ],
  },
  {
    title: "Phase 4 - Device Localization",
    items: [
      { id: "p4-1", text: "Set your iPhone time zone to a U.S. city." },
      { id: "p4-2", text: "Set your device language/region to United States." },
    ],
  },
  {
    title: "Phase 5 - TikTok Account Creation",
    items: [
      { id: "p5-1", text: "Download TikTok ONLY after VPN is active." },
      { id: "p5-2", text: "Create a TikTok account using: The Apple ID signup method (or preferred mail)." },
      { id: "p5-3", text: "Ensure the VPN is ON during the entire signup process." },
    ],
  },
  {
    title: "Phase 6 - Account Warm-Up (Critical)",
    items: [
      { id: "p6-1", text: "Spend 2-3 days warming up the account." },
      { id: "p6-2", text: "DO NOT add a website link in your app yet. Wait until after the warm-up period." },
      { id: "p6-3", text: "DO NOT follow, like, or spam interactions for 2 days. You can save posts." },
      { id: "p6-4", text: "Scroll the For You Page (FYP)." },
      { id: "p6-5", text: "Watch some full videos from start to finish. Must fall here." },
      { id: "p6-6", text: "Interact naturally. Search for niche topics you want to target." },
    ],
  },
  {
    title: "Phase 7 - Posting Strategy",
    items: [
      { id: "p7-1", text: "After warm-up, begin posting content." },
      { id: "p7-2", text: "Focus on: Strong hooks, high retention videos." },
      { id: "p7-3", text: "Post consistently (daily recommended)." },
      { id: "p7-4", text: "Continue browsing and engaging in your niche." },
    ],
  },
]

export function TiktokChecklist() {
  const [completedItems, setCompletedItems] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("tiktok-checklist")
    if (saved) {
      setCompletedItems(JSON.parse(saved))
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("tiktok-checklist", JSON.stringify(completedItems))
    }
  }, [completedItems, isLoaded])

  const toggleItem = (id: string) => {
    setCompletedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const totalItems = phases.reduce((acc, phase) => acc + phase.items.length, 0)
  const completedCount = completedItems.length
  const progressPercent = Math.round((completedCount / totalItems) * 100)

  return (
    <div className="my-10 space-y-12 font-sans border-y-2 border-black/5 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-black uppercase tracking-widest text-[10px] text-black/40 px-2">
        <span>Step-by-Step Checklist</span>
        <span className="bg-black text-white px-3 py-1 rounded-full">
          {completedCount} / {totalItems} COMPLETED ({progressPercent}%)
        </span>
      </div>


      <div className="space-y-10">
        {phases.map((phase, phaseIdx) => (
          <div
            key={phaseIdx}
            className="group relative rounded-3xl border-[3px] border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:-translate-y-1"
          >
            <div className="absolute -top-4 left-6 bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              {phase.title.split(' - ')[0]}
            </div>
            <h3 className="mb-6 text-xl font-black uppercase tracking-tight text-black">
              {phase.title.split(' - ')[1] || phase.title}
            </h3>
            <ul className="space-y-4">
              {phase.items.map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-[3px] border-black transition-all ${completedItems.includes(item.id)
                      ? "bg-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                      : "bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
                      }`}
                  >
                    {completedItems.includes(item.id) && (
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className="h-4 w-4 stroke-white stroke-[3.5] animate-in fade-in zoom-in duration-300"
                      >
                        <path d="M3.75 8.25l2.25 2.25 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  <span
                    className={`text-sm sm:text-base font-bold leading-snug transition-all ${completedItems.includes(item.id) ? "text-black/30 line-through decoration-[3px]" : "text-black/80"
                      }`}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

  )
}
