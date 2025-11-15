import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects/data";
import { getAllArticles } from "@/lib/articles";

export default async function Home() {
  const latestProjects = projects.slice(0, 2);

  const articles = await getAllArticles();
  const latestArticles = articles.slice(0, 5);

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#B9F8FE] px-4 py-12 font-sans">
      <div className="flex flex-col items-center justify-start gap-8 mb-11">
        <div className="relative w-full max-w-3xl bg-[#A8B4F6] border-[3px] border-black rounded-3xl p-8 sm:p-10 shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
          <div className="absolute -top-4 -left-4 h-6 w-24 bg-black text-xs font-bold uppercase tracking-widest text-[#ffeb3b] flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            Profile
          </div>
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="shrink-0">
                <div className="relative h-40 w-40 overflow-hidden rounded-3xl border-[3px] border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                  <Image
                    src="/profile.jpeg"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black leading-tight">
                  Norma Dani Risdiandita
                </h1>
                <p className="mt-2 inline-block bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffeb3b] shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  Software Engineer (AI, Web, Mobile)
                </p>
              </div>
            </div>

            <div className="rounded-2xl border-[3px] border-black bg-white p-4 text-sm sm:text-base leading-relaxed shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              <p>
                I write about software engineering, web development, artificial intelligence, and other topics I find valuable. I build products and document my experiences along the way.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-widest">
            <span className="text-[10px] text-black/70">Find me on</span>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://x.com/normadanir"
                className="rounded-full border-2 border-black bg-white px-3 py-1 shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:translate-x-0.5 transition-transform"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path></svg>
              </Link>
              <Link
                href="https://github.com/danirisdiandita"
                className="rounded-full border-2 border-black bg-white px-3 py-1 shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:translate-x-0.5 transition-transform"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>

              </Link>
              <Link
                href="https://www.linkedin.com/in/risdiandita"
                className="rounded-full border-2 border-black bg-white px-3 py-1 shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:translate-x-0.5 transition-transform"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
              </Link>
            </div>
          </div>
        </div>

        <section className="w-full max-w-3xl">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.25em] text-black">
              Things I've Built & Led
            </h2>
            <Link
              href="/projects"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-black underline underline-offset-4"
            >
              See more
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {latestProjects.map((project) => (
              <Link
                key={project.slug}
                href="/projects"
                className={`rounded-2xl border-[3px] border-black ${project.colorClass} p-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex flex-col gap-3 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-black leading-tight">{project.title}</h3>
                  <span
                    className={`shrink-0 rounded-full border-2 border-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      project.status === 'Running'
                        ? 'bg-[#C9F0DD] text-black'
                        : 'bg-white text-black/60'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-black/80 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-md border border-black/20 bg-white/60 px-2 py-0.5 text-[10px] font-medium text-black"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="inline-block rounded-md border border-black/20 bg-white/60 px-2 py-0.5 text-[10px] font-medium text-black/60">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="w-full max-w-3xl">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.25em] text-black">
              Articles
            </h2>
            <Link
              href="/articles"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-black underline underline-offset-4"
            >
              See more
            </Link>
          </div>

          <div className="divide-y-2 divide-black/10 border-y-2 border-black/10 bg-white/40 rounded-3xl p-4 sm:p-6 border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
            {latestArticles.map((article) => (
              <article
                key={article.slug}
                className="grid gap-4 py-4 sm:grid-cols-[minmax(120px,160px)_1fr] sm:gap-8"
              >
                <time className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/70">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-black">
                    {article.title}
                  </h3>
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
          </div>
        </section>
      </div>
    </div>
  );
}
