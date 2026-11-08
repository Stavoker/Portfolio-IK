/* Torn paper ribbons are transparent PNGs, so a plain img keeps the alpha. */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import CircleArrow from "@/components/CircleArrow";

export default function ProjectList({ projects, paper, year }) {
  return (
    <div className={`full-width-ribbon full-width-ribbon-${year}`}>
      <img src={paper} alt="" className="ribbon-sheet" />
      <ul className="relative z-10 flex h-full flex-col justify-center px-[7vw] sm:px-[9vw]">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={`/projects/${project.id}`}
              className="group flex items-center gap-3 py-[0.4rem] text-[#141414] md:gap-5 md:py-[0.45rem]"
            >
              <span className="w-11 shrink-0 font-mono text-[13px] font-medium text-black/70 md:w-14 md:text-base">
                {project.number}
              </span>
              <span className="font-display text-[clamp(1.2rem,2.15vw,2.15rem)] leading-none font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5">
                {project.title}
              </span>
              <CircleArrow className="ml-auto ring-1 ring-black/75 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
