"use client"

import { useContext } from "react"
import { useRouter } from "next/navigation"

import { AppContext } from "@/app/providers"
import { Prose } from "@/components/Prose"
import { type ArticleWithSlug } from "@/lib/articles"
import { formatDate } from "@/lib/formatDate"

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <div className="w-full">
      <div className="relative mx-auto w-full max-w-3xl rounded-3xl border-[3px] border-black bg-white p-6 sm:p-8 shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
        {previousPathname && (
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back to articles"
            className="group mb-6 inline-flex h-9 items-center gap-2 rounded-full border-2 border-black bg-white px-4 text-xs font-semibold uppercase tracking-[0.16em] text-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-black" />
            <span>Back</span>
          </button>
        )}
        <article>
          <header className="flex flex-col">
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-black">
              {article.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
              <span>{article.author}</span>
              <span className="mx-3 h-4 w-0.5 rounded-full bg-black/40" />
              <time dateTime={article.date} className="flex items-center">
                <span>{formatDate(article.date)}</span>
              </time>
            </div>
          </header>
          <Prose className="mt-6" data-mdx-content>
            {children}
          </Prose>
        </article>
      </div>
    </div>
  )
}
