import Image from "next/image";
import Link from "next/link";
import { projects } from "./data";

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="max-w-3xl mx-auto flex min-h-screen items-start justify-center bg-[#B9F8FE] px-4 py-12 font-sans">
      <div className="flex w-full max-w-5xl flex-col gap-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
            Things I've Built & Led
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-black/80">
            I build products, tools, and experiments to learn new things and share what I discover.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          {sorted.map((project) => (
            <article
              key={project.slug}
              className={`rounded-2xl border-[3px] border-black ${project.colorClass} p-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex flex-col gap-3`}
            >
              <div className="overflow-hidden rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={360}
                  className="h-40 w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-base font-bold text-black">{project.title}</h2>
                <p className="mt-1 text-xs text-black/80">{project.description}</p>
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

