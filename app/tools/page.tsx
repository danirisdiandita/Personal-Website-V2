import Link from "next/link";

export default function ToolsPage() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-[#B9F8FE] px-4 py-12 font-sans">
      <div className="flex w-full max-w-3xl flex-col gap-8">
        <header>
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Tools
          </h1>
          <p className="mt-3 text-sm text-black/80 sm:text-base">
            Small tools I build for everyday work.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/tools/working-timezone"
            className="rounded-2xl border-[3px] border-black bg-[#FFE5B4] p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
          >
            <h2 className="text-xl font-bold text-black">Working Timezone</h2>
            <p className="mt-2 text-sm text-black/80">
              Check working hours across timezones.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
