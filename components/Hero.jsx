import { socials } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden text-white">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute top-[8%] left-1/2 z-0 -translate-x-1/2 font-display text-[30vh] leading-[0.8] font-black tracking-[-0.065em] whitespace-nowrap text-white/20 select-none"
      >
        PORTFOLIO
      </p>

      <div className="relative z-10 mx-auto flex w-full max-w-page flex-1 flex-col justify-end px-5 pb-8 md:px-12 md:pb-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <h1 className="font-display text-[clamp(4.1rem,8.4vw,8.1rem)] leading-[0.8] font-black tracking-[-0.05em]">
            ui/ux
            <br />
            designer
          </h1>
          <p className="max-w-[280px] text-sm leading-relaxed font-light text-white/80 md:mb-2 md:text-[15px]">
            I’m a UX/UI designer passionate about crafting engaging and purposeful
            user experiences through clear, intuitive interfaces and thoughtful
            interaction design
          </p>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/20">
        <div className="mx-auto grid w-full max-w-page grid-cols-1 gap-8 px-5 py-5 sm:grid-cols-12 md:px-12 md:py-6">
          <p className="max-w-[160px] text-xs leading-5 font-light text-white/75 sm:col-span-4">
            Designer
            <br />
            specializing in
            <br />
            <span className="text-white/90">UI/UX design</span>
          </p>
          <div className="text-xs leading-5 font-light text-white/75 sm:col-span-3 sm:col-start-6">
            <p className="mb-1 text-white">Social media</p>
            <ul>
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-300 hover:text-white hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
