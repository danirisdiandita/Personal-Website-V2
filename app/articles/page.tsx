import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

export default async function ArticlesPage() {
  let articles = await getAllArticles()
  let sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#B9F8FE] px-4 py-12 font-sans">
      <div className="flex w-full max-w-5xl flex-col gap-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
            Articles
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-black/80">
            I write about software engineering, web development, and building things in public.
          </p>
        </header>

        <section className="divide-y-2 divide-black/10 border-y-2 border-black/10 bg-white/40 rounded-3xl p-4 sm:p-6 border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          {sorted.map((article) => (
            <article
              key={article.slug}
              className="grid gap-4 py-4 sm:grid-cols-[minmax(120px,160px)_1fr] sm:gap-8"
            >
              <time
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/70"
                dateTime={article.date}
              >
                {formatDate(article.date)}
              </time>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-black">
                  {article.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-black/80">
                  {article.description}
                </p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-2 inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] text-black underline underline-offset-4"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
