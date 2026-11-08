/* Collage photo is a local file, clipped with CSS. */
/* eslint-disable @next/next/no-img-element */

const experiences = [
  "Prototyping",
  "Brand book development",
  "UI/UX design for websites",
  "Advertising banner design",
];

const skills = ["Figma", "UI/UX", "Prototyping"];

const languages = ["Ukrainian (native)", "Russian (C2)", "English (B1)"];

const strips = [
  {
    title: "My experience includes:",
    body: "I started my career by creating advertising banners and my first graphic designs.",
  },
  {
    title: "",
    body: "I then developed my skills by helping startups with the design and improvement of their products.",
  },
  {
    title: "",
    body: "I am currently working on larger-scale projects and complex interfaces.",
  },
];

function Column({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm leading-6 font-light text-white/80">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-6 mx-auto w-full max-w-page px-5 py-16 text-white md:px-12 md:py-20 lg:px-16">
      <h2 className="font-display text-[clamp(2.6rem,5.6vw,4.8rem)] leading-none font-medium tracking-[0.16em] md:tracking-[0.28em]">
        About me
      </h2>

      <div className="mt-10 grid items-start gap-10 md:mt-12 lg:grid-cols-[minmax(240px,300px)_minmax(0,1.25fr)_minmax(420px,1fr)] lg:gap-x-14 xl:gap-x-20">
        <img
          src="/images/foto1.png"
          alt="Ivan Lisovenko standing by a pond"
          className="aspect-[3/4] w-full max-w-[280px] object-cover [clip-path:polygon(0_0,84%_0,100%_14%,100%_100%,0_100%)]"
        />

        <div className="max-w-[640px]">
          <h3 className="text-base font-semibold md:text-lg">UI/UX Designer — Web Design</h3>
          <div className="mt-4 space-y-4 text-sm leading-7 font-light text-white/75 md:text-[15px]">
            <p>
              I am a beginner, but I am quickly developing as a UI/UX designer specializing
              in web design and the creation of creative advertising banners. Recently I
              have been actively working in the field of digital design, combining learning
              with practice — from performing specific tasks to participating in large-scale
              projects.
            </p>
            <p>
              I always strive to make my solutions not only visually appealing but also
              intuitive for users. I believe that good design is the result of careful
              analysis, constant dialogue with the user, and a commitment to simplicity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-10">
          <Column title="Experiences" items={experiences} />
          <Column title="Hard Skills" items={skills} />
          <Column title="Languages" items={languages} />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold tracking-wide text-white">SKILL</h3>
              <span className="grid grid-cols-2 gap-0.5" aria-hidden="true">
                <span className="h-2 w-2 bg-white" />
                <span className="h-2 w-2 bg-white" />
                <span className="h-2 w-2 bg-white" />
                <span className="h-2 w-2 bg-white" />
              </span>
            </div>
            <span className="mt-4 block h-px w-28 bg-white" />
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 md:mt-16 md:gap-4">
        {strips.map((strip) => (
          <article key={strip.body} className="experience-strip px-6 py-5 md:px-10 md:py-6">
            {strip.title ? <p className="text-sm font-semibold md:text-[15px]">{strip.title}</p> : null}
            <p className={`max-w-5xl text-sm leading-relaxed md:text-[15px] ${strip.title ? "mt-2" : ""}`}>
              {strip.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
