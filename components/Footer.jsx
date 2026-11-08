"use client";

import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer id="contact" className="relative mt-6 overflow-hidden text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/fon2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative grid min-h-[88vh] grid-cols-1 md:grid-cols-[minmax(300px,44vw)_1fr]">
        <div className="relative min-h-[560px] md:min-h-full">
          {/* Torn edge is the transparent right side of the photo itself. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photo2.png"
            alt="Ivan Lisovenko sitting at a table"
            className="absolute inset-0 h-full w-full object-cover object-left"
          />
        </div>

        <div className="relative flex items-center justify-center px-6 py-24 md:px-12 lg:px-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/paper%20clip.png"
            alt=""
            className="pointer-events-none absolute top-0 right-[14%] z-20 h-32 w-auto md:h-48"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/tape11.png"
            alt=""
            className="pointer-events-none absolute right-0 bottom-6 z-20 w-36 md:bottom-10 md:w-60"
          />

          <div className="relative z-10 w-full max-w-xl">
            <h2 className="font-display text-[clamp(1.85rem,3.2vw,3.15rem)] leading-[1.08] font-black">
              Write to me and you will see
              <span className="mt-1 block font-medium text-white/90">
                that your ideas can be turned into reality
              </span>
            </h2>
            <a
              href={site.telegram}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full border border-white/80 px-7 py-3 text-sm tracking-wide transition duration-300 hover:scale-105 hover:bg-white hover:text-ink"
            >
              Write to me on Telegram
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-30 flex flex-col gap-3 px-5 py-6 text-xs font-light text-white/70 sm:flex-row sm:items-end sm:justify-between md:px-12">
        <p>© 2025 {site.name}</p>
        <a
          href={`mailto:${site.email}`}
          className="tracking-wide text-white/60 transition-colors duration-300 hover:text-white"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}
