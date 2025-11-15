import Link from "next/link";
import { projects } from "./data";

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => (a.year < b.year ? 1 : -1));

  return (
    <div className="max-w-3xl mx-auto flex min-h-screen items-start justify-center bg-[#B9F8FE] px-4 py-12 font-sans">
      <div className="flex w-full max-w-5xl flex-col gap-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
            Things I've Built & Led
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-black/80">
            Products I've built or led as a developer, product manager, and entrepreneur. Some are running, others discontinued—all part of learning and experimenting.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className={`rounded-2xl border-[3px] border-black ${project.colorClass} p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex flex-col gap-4`}
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-base font-bold text-black leading-tight">{project.title}</h2>
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

              {project.domain && (
                <a
                  href={`https://${project.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-black underline underline-offset-2 hover:text-black/70 transition-colors"
                >
                  {project.domain}
                </a>
              )}

              <p className="text-xs text-black/80 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block rounded-md border border-black/20 bg-white/60 px-2 py-0.5 text-[10px] font-medium text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-2 pt-2 border-t-2 border-black/10">
                <div className="flex flex-col gap-0.5">
                  {project.userCount && (
                    <span className="text-[10px] font-semibold text-black/70">
                      👥 {project.userCount}
                    </span>
                  )}
                  {project.role && (
                    <span className="text-[10px] font-medium text-black/60">
                      {project.role}
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold text-black/50">{project.year}</span>
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

