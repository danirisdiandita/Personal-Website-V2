import Link from 'next/link'

export default function Experiences() {
    return (
        <div className="flex min-h-screen items-start justify-center bg-[#B9F8FE] px-4 py-12 font-sans">
            <div className="flex w-full max-w-3xl flex-col gap-8">
                <header>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                        Professional Experience
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm sm:text-base text-black/80">
                        My journey through various roles in software engineering, product development, and technical leadership.
                    </p>
                </header>

                <div className="relative bg-[#FFE5B4] border-[3px] border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-center">
                    <div className="absolute -top-4 -right-4 h-12 w-12 bg-black rounded-full flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <span className="text-2xl">🚧</span>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-3">
                            Coming Soon
                        </h2>
                        <p className="text-sm sm:text-base text-black/80 max-w-md mx-auto">
                            I'm currently crafting a detailed overview of my professional experience. Check back soon!
                        </p>
                    </div>

                    <div className="inline-block bg-black px-4 py-2 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]">
                        <p className="text-xs sm:text-sm font-semibold text-[#ffeb3b] uppercase tracking-wider">
                            Under Construction
                        </p>
                    </div>
                </div>

                <div className="bg-white/40 border-[3px] border-black rounded-2xl p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-3">
                        In the meantime
                    </h3>
                    <div className="flex flex-col gap-3">
                        <Link
                            href="/"
                            className="flex items-center justify-between p-3 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
                        >
                            <span className="text-sm font-semibold text-black">View my profile</span>
                            <span className="text-lg">👤</span>
                        </Link>
                        <Link
                            href="/projects"
                            className="flex items-center justify-between p-3 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
                        >
                            <span className="text-sm font-semibold text-black">Check out my projects</span>
                            <span className="text-lg">🚀</span>
                        </Link>
                        <Link
                            href="/articles"
                            className="flex items-center justify-between p-3 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
                        >
                            <span className="text-sm font-semibold text-black">Read my articles</span>
                            <span className="text-lg">📝</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}