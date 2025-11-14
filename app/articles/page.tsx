import Link from "next/link";
// import { articles } from "./data";
import { getAllArticles } from "@/lib/articles";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default async function ArticlesPage() {
  let articles = await getAllArticles()
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));

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

        <section className="divide-y-2 divide-black/10 border-y-2 border-black/10">
          {sorted.map((article) => (
            <article
              key={article.slug}
              className="grid gap-4 py-6 sm:grid-cols-[minmax(120px,160px)_1fr] sm:gap-8"
            >
              <time
                className="text-xs font-semibold uppercase tracking-[0.2em] text-black/70"
                dateTime={article.date}
              >
                {formatDate(article.date)}
              </time>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-black">
                  {article.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-black/80">
                  {article.description}
                </p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-3 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-black underline underline-offset-4"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </section>

        <div>
          <Link
            href="/"
            className="inline-block rounded-full border-[3px] border-black bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:translate-x-0.5 transition-transform"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
