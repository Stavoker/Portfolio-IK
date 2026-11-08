import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CircleArrow from "@/components/CircleArrow";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.subtitle,
  };
}

function Blocks({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === "image") {
      return (
        <figure key={`${block.value}-${index}`} className="paper-surface px-3 py-10 md:px-10 md:py-16">
          <Image
            src={block.value}
            alt={block.alt || ""}
            width={block.width || 1600}
            height={block.height || 900}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="mx-auto h-auto w-full max-w-5xl"
          />
        </figure>
      );
    }

    const paragraphs = String(block.value)
      .split(/\n\n+/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);

    return (
      <section key={`text-${index}`} className="bg-ink px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-[15px] leading-7 text-white/90 md:text-base md:leading-8">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>
    );
  });
}

export default function ProjectPage({ params }) {
  return (
    <Suspense fallback={<div className="min-h-[70svh] bg-ink" />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) notFound();

  const year = project.yearLabel || project.year;

  return (
    <article>
      <header className="bg-ink">
        <div className="mx-auto w-full max-w-page px-5 pt-6 pb-14 md:px-14 md:pt-8 md:pb-20">
          {project.tags?.length ? (
            <p className="mb-12 text-right text-xs text-fog md:-mt-16 md:mb-20">
              {project.tags.join(", ")}
            </p>
          ) : null}
          <p className="max-w-xl text-sm text-fog md:text-[15px]">{project.subtitle}</p>
          <div className="mt-6 flex items-end justify-between gap-6 md:mt-8">
            <h1 className="font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.95] font-medium tracking-tight">
              {project.title}
            </h1>
            <p className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-none font-medium">
              {project.number}
            </p>
          </div>
        </div>
      </header>

      <Blocks blocks={project.contentBlocks} />

      <section className="bg-ink px-5 pt-6 pb-4 md:px-14">
        <div className="mx-auto w-full max-w-3xl border-t border-white/35 text-sm">
          <div className="flex items-baseline justify-between gap-6 border-b border-white/35 py-5">
            <span className="text-mute">Client</span>
            <span className="text-right">{project.client}</span>
          </div>
          <div className="flex items-baseline justify-between gap-6 py-5">
            <span className="text-mute">Year</span>
            <span>{year}</span>
          </div>
        </div>

        {project.nextProject ? (
          <Link
            href={`/projects/${project.nextProject.id}`}
            className="group mx-auto flex w-full max-w-3xl items-center justify-center gap-4 py-16 md:py-24"
          >
            <span className="text-center font-display text-[clamp(2rem,5vw,4rem)] leading-none font-medium">
              {project.nextProject.title}
            </span>
            <CircleArrow className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1" />
          </Link>
        ) : null}
      </section>
    </article>
  );
}
