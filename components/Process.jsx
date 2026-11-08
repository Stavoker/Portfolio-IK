/* Tape numerals and torn strips are transparent PNG collages. */
/* eslint-disable @next/next/no-img-element */

const steps = [
  {
    image: "/images/tape7.png",
    title: "Briefing",
    text: "I work with the client to define the goals and objectives of the future website. We draw up detailed technical specifications. You provide all the content that is available.",
  },
  {
    image: "/images/tape8.png",
    title: "Competitor Analysis",
    text: "I gather all information about the business and conduct UX research. I work through objections. I look for references and decide on the style of the future website.",
  },
  {
    image: "/images/tape9.png",
    title: "Prototype Development",
    text: "I create a site map, think through the interaction, work out the sections, the sequence of blocks, and the texts. I draw a prototype of the main page of the site.",
  },
  {
    image: "/images/tape10.png",
    title: "Design",
    text: "I present the finished design of the main page of the site, present my vision, and justify my decisions. After approval, I finish the rest of the pages.",
  },
];

export default function Process() {
  return (
    <section className="relative mx-auto w-full max-w-page overflow-hidden px-5 py-14 text-white md:px-12 md:py-20">
      <div className="relative mx-auto h-36 w-full max-w-6xl overflow-hidden md:h-44">
        <img
          src="/images/tape5.png"
          alt=""
          className="pointer-events-none absolute top-1/2 left-[2%] h-[520px] w-auto -translate-y-[42%] md:left-[8%] md:h-[680px]"
        />
        <img
          src="/images/tape6.png"
          alt=""
          className="pointer-events-none absolute top-1/2 right-[0%] h-[480px] w-auto -translate-y-[48%] scale-x-[-1] md:right-[6%] md:h-[620px]"
        />
        <h2 className="relative z-10 flex h-full items-center justify-center text-center font-display text-[clamp(1.7rem,3.6vw,3.1rem)] leading-[0.85] font-black tracking-tight">
          Development Process
        </h2>
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 font-light text-white/75 md:mt-10 md:text-[15px] md:leading-7">
        The most important thing I focus on is your idea that you would like to show or
        convey to the viewer. I turn this idea into reality. If you do not know exactly
        what you want to see in the end result, then I will be able to complete your idea
        so that you can say «Yes, this is what you need!»
      </p>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-2 md:mt-14 md:gap-4">
        {steps.map((step, index) => {
          const reversed = index % 2 === 1;
          return (
            <article
              key={step.title}
              className={`flex items-center gap-2 py-1 md:gap-4 md:py-2 ${
                reversed
                  ? "flex-row-reverse pl-[4%] text-right md:pl-[12%]"
                  : "pr-[4%] text-left md:pr-[12%]"
              }`}
            >
              <img src={step.image} alt="" className="h-32 w-auto shrink-0 md:h-52 lg:h-[270px]" />
              <div className="max-w-md">
                <h3 className="font-display text-[clamp(1.25rem,2vw,1.85rem)] leading-tight font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 font-light text-white/70">{step.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
