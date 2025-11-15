export default function ArticleGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-start justify-center bg-[#B9F8FE] px-4 py-12 font-sans">
      <div className="flex w-full max-w-5xl flex-col gap-8">
        {/* <div className="relative mx-auto w-full max-w-3xl rounded-3xl border-[3px] border-black bg-white p-6 sm:p-8 shadow-[10px_10px_0_0_rgba(0,0,0,1)] prose-code:bg-black prose-code:text-[#ffeb3b] prose-code:text-sm prose-code:font-mono prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-headings:text-black dark:prose-headings:text-white prose"> */}
          {children}
        {/* </div> */}
      </div>
    </div>
  )
}

