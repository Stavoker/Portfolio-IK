import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const projects2024 = [
  {
    id: "yudaevs-course",
    number: "01/",
    title: "Yudaev's course",
    numberX: 50.18,
    titleX: 170.18,
    numberY: 3237,
    titleY: 3222,
    arrowX: 1275.603515625,
    arrowY: 3302,
    hitY: 3212,
  },
  {
    id: "behance",
    number: "02/",
    title: "Behance",
    numberX: 50.18,
    titleX: 170,
    numberY: 3537,
    titleY: 3522,
    arrowX: 1275.603515625,
    arrowY: 3602,
    hitY: 3509,
  },
  {
    id: "coworking",
    number: "03/",
    title: "Coworking",
    numberX: 50.18,
    titleX: 170.18,
    numberY: 3837,
    titleY: 3822,
    arrowX: 1275.603515625,
    arrowY: 3902,
    hitY: 3812,
  },
];

const projects2025 = [
  {
    id: "alara-dashboard",
    number: "04/",
    title: "Alara dashboard",
    numberY: 5165,
    titleY: 5150,
    arrowX: 1252.421875,
    arrowY: 5230,
    hitY: 5130,
  },
  {
    id: "future-tech",
    number: "05/",
    title: "Future Tech",
    numberY: 5465,
    titleY: 5450,
    arrowX: 1256.140625,
    arrowY: 5530,
    hitY: 5437,
  },
  {
    id: "stream-vibe",
    number: "06/",
    title: "Stream Vibe",
    numberY: 5765,
    titleY: 5750,
    arrowX: 1252.421875,
    arrowY: 5830,
    hitY: 5730,
  },
  {
    id: "modern-wallet",
    number: "07/",
    title: "Modern wallet app",
    numberY: 6065,
    titleY: 6050,
    arrowX: 1252.421875,
    arrowY: 6130,
    hitY: 6047,
  },
];

function Text({
  x,
  y,
  size,
  weight = 400,
  color = "#fff",
  width,
  align,
  tracking,
  blend,
  leading,
  nowrap,
  z,
  children,
}) {
  return (
    <p
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        margin: 0,
        color,
        fontSize: size,
        fontWeight: weight,
        lineHeight: leading ?? 1.5,
        letterSpacing: tracking,
        textAlign: align,
        mixBlendMode: blend,
        whiteSpace: nowrap || !width ? "nowrap" : "normal",
        zIndex: z,
      }}
    >
      {children}
    </p>
  );
}

function Spin({ x, y, w, h, rotate = 0, iw, ih, src, blend, crop, scale = 1, shade = 0 }) {
  const imgStyle = crop
    ? {
        position: "absolute",
        left: crop.left,
        top: crop.top,
        width: crop.width,
        height: crop.height,
        maxWidth: "none",
      }
    : {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        maxWidth: "none",
        objectFit: "cover",
      };

  const frame = (filter) => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: iw,
          height: ih,
          flex: "none",
          transform: `rotate(${rotate}deg)`,
          overflow: "hidden",
        }}
      >
        <img src={src} alt="" style={filter ? { ...imgStyle, filter } : imgStyle} />
      </div>
    </div>
  );

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        pointerEvents: "none",
        transform: scale === 1 ? undefined : `scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, mixBlendMode: blend }}>{frame()}</div>
      {shade > 0 ? (
        <div style={{ position: "absolute", inset: 0, mixBlendMode: "multiply", opacity: shade }}>
          {frame("brightness(0)")}
        </div>
      ) : null}
    </div>
  );
}

function CircleMark({ x, y, box = 70.4416, glyph = 50, src = "/images/figma/arrow.svg", inline = false }) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: inline ? "relative" : "absolute",
        left: inline ? undefined : x,
        top: inline ? undefined : y,
        width: box,
        height: box,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
        pointerEvents: "none",
      }}
    >
      <img src={src} alt="" width={glyph} height={glyph} style={{ display: "block", transform: "rotate(-130deg)" }} />
    </span>
  );
}

const ARROW_BOX = 70.4416;

function ProjectCopy({ project, numberX = 50, titleX = 277 }) {
  const nx = project.numberX ?? numberX;
  const tx = project.titleX ?? titleX;
  return (
    <div
      className="flex items-center"
      style={{
        position: "absolute",
        left: nx,
        top: project.titleY,
        width: project.arrowX + ARROW_BOX - nx,
        height: 90,
      }}
    >
      <span
        style={{
          flex: "none",
          width: tx - nx,
          fontSize: 40,
          fontWeight: 500,
          lineHeight: 1.5,
        }}
      >
        {project.number}
      </span>
      <span
        style={{
          flex: "1 1 auto",
          fontSize: 60,
          fontWeight: 600,
          lineHeight: 1.5,
          whiteSpace: "nowrap",
        }}
      >
        {project.title}
      </span>
      <CircleMark inline />
    </div>
  );
}

export default function HomeArtboard() {
  return (
    <div className="home-scale">
      <div className="home-sizer">
        <div className="home-hero-rule" aria-hidden="true" />
        <div className="home-artboard">
          {projects2025.map((project) => (
            <ProjectCopy key={project.id} project={project} />
          ))}

          <Text x={50} y={381} size={120} weight={600} z={2}>
            UI/UX
          </Text>
          <Text x={50} y={518} size={120} weight={600} z={2}>
            designer
          </Text>
          <SiteNav />

          <Text x={50} y={923} size={16} width={130} leading={1.2059}>
            Designer specializing in UI/UX design
          </Text>
          <Text x={960} y={923} size={20} weight={600} color="#b5b5b5">
            Social media
          </Text>
          <a href="https://t.me/IKnyx" target="_blank" rel="noreferrer" style={socialLink(958)}>
            Telegram
          </a>
          <a href="https://www.behance.net/a99bc876" target="_blank" rel="noreferrer" style={socialLink(986)}>
            Behance
          </a>
          <a
            href="https://linkedin.com/in/ivan-lisovenko-036564339"
            target="_blank"
            rel="noreferrer"
            style={socialLink(1014)}
          >
            Linkedin
          </a>
          <Text x={1299} y={563} size={20} width={571} align="justify">
            I&apos;m a UX/UI designer passionate about crafting engaging and purposeful user
            experiences through clear, intuitive interfaces and thoughtful interaction design
          </Text>

          <div id="about" style={{ position: "absolute", left: 0, top: 1140, width: 1, height: 1 }} />
          <Text x={75} y={2018} size={20} weight={600}>
            My experience includes:
          </Text>
          <Text x={75} y={2082} size={18} width={538}>
            I started my career by creating advertising banners and my first graphic designs.
          </Text>
          <Text x={727} y={2083} size={18} width={528}>
            I then developed my skills by helping startups with the design and improvement of their
            products.
          </Text>
          <Text x={1370} y={2083} size={18} width={475}>
            I am currently working on larger-scale projects and complex interfaces.
          </Text>

          <Text x={1333} y={1360} size={20} weight={600}>
            Experiences
          </Text>
          <Text x={1333} y={1407} size={14} width={184}>
            Prototyping
          </Text>
          <Text x={1333} y={1445} size={14} width={184}>
            Brand book development
          </Text>
          <Text x={1333} y={1483} size={14} width={184}>
            UI/UX design for websites
          </Text>
          <Text x={1333} y={1521} size={14} width={184}>
            Advertising banner design
          </Text>
          <Text x={1742} y={1360} size={20} weight={600}>
            Hard Skills
          </Text>
          <Text x={1742} y={1408} size={14} width={106}>
            Figma
          </Text>
          <Text x={1742} y={1447} size={14} width={106}>
            UI/UX
          </Text>
          <Text x={1742} y={1486} size={14} width={106}>
            Prototyping
          </Text>
          <Text x={1333} y={1652} size={20} weight={600}>
            Languages
          </Text>
          <Text x={1333} y={1700} size={14} width={126}>
            Ukrainian (native)
          </Text>
          <Text x={1333} y={1739} size={14} width={126}>
            Russian (C2)
          </Text>
          <Text x={1333} y={1778} size={14} width={126}>
            English (B1)
          </Text>
          <Text x={1684} y={1652} size={20} weight={600}>
            SKILL
          </Text>
          <img
            src="/images/figma/skill-mark.svg"
            alt=""
            width={20}
            height={31}
            style={{ position: "absolute", left: 1684, top: 1706, width: 20, height: 31, display: "block" }}
          />
          <img
            src="/images/figma/skill-line.svg"
            alt=""
            width={156}
            height={6}
            style={{ position: "absolute", left: 1681, top: 1754, width: 156, height: 6, display: "block" }}
          />

          <Text x={50} y={1140} size={80} width={997} tracking="85.6px" nowrap>
            About me
          </Text>

          <Spin
            x={-82.38}
            y={2628.25}
            w={1148.979}
            h={442.523}
            rotate={84.82}
            iw={342.546}
            ih={1122.633}
            src="/images/figma/tape-10.png"
            blend="color-dodge"
          />
          <Text x={50} y={2882} size={28} width={926} align="justify">
            In 2024, I had only just begun to develop, so I didn&apos;t have time to do any
            large-scale projects, but the foundation had been laid
          </Text>
          <Spin
            x={890}
            y={4410}
            w={1131.078}
            h={589.528}
            rotate={78.66}
            iw={385.503}
            ih={1076.302}
            src="/images/figma/tape-14.png"
            blend="color-dodge"
          />
          <Text x={1041} y={4694} size={28} width={829} align="right">
            By 2025, progress had already been made, and that year I developed my skills and began
            to take on large projects
          </Text>
          <Text x={1543.9} y={4550} size={65} weight={600} width={326} align="right">
            Year 2025
          </Text>
          <Text x={50} y={2738} size={65} weight={600}>
            Year 2024
          </Text>

          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 50,
              top: 1993,
              width: 1820,
              height: 168,
              mixBlendMode: "color-dodge",
              pointerEvents: "none",
              maskImage: "url(/images/figma/tape-mask.svg)",
              WebkitMaskImage: "url(/images/figma/tape-mask.svg)",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: -57,
                top: -151,
                width: 1926.543,
                height: 611.154,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "relative", width: 596, height: 1921.898, flex: "none", transform: "rotate(89.55deg)", overflow: "hidden" }}>
                <img
                  src="/images/figma/tape-14.png"
                  alt=""
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", maxWidth: "none", objectFit: "cover", filter: "brightness(0.72)" }}
                />
              </div>
            </div>
          </div>

          <div id="portfolio" style={{ position: "absolute", left: 0, top: 2620, width: 1, height: 1 }} />
          {projects2024.map((project) => (
            <ProjectCopy key={project.id} project={project} />
          ))}

          <Spin
            x={-413.72}
            y={2366.6}
            w={2608.493}
            h={2572.855}
            rotate={32.06}
            iw={1935.877}
            ih={1823.325}
            src="/images/figma/paper-80.png"
            blend="difference"
            shade={0.45}
            crop={{ left: "-40.4%", top: "-43.13%", width: "199.56%", height: "215.88%" }}
          />
          <Spin
            x={-808}
            y={4382}
            w={3184.926}
            h={2359.71}
            rotate={-117.06}
            iw={1113.577}
            ih={3007.538}
            src="/images/figma/paper-16.png"
            blend="difference"
            shade={0.45}
            crop={{ left: "-12.17%", top: "-13.5%", width: "112.17%", height: "113.5%" }}
          />

          <div id="contact" style={{ position: "absolute", left: 0, top: 9700, width: 1, height: 1 }} />
          <Text x={336} y={10074} size={60} weight={600} width={1559}>
            Write to me and you will see
            <br />
            that your ideas can be turned into reality
          </Text>
          <Text x={50} y={10894} size={20} weight={700}>
            © 2025 Lisovenko Ivan
          </Text>

          <Spin
            x={1168}
            y={10255}
            w={928.235}
            h={840.345}
            rotate={-61.27}
            iw={540.452}
            ih={762.29}
            src="/images/figma/tape-04.png"
            scale={0.62}
          />

          <a
            href="https://t.me/IKnyx"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between"
            style={{
              position: "absolute",
              left: 807,
              top: 10479,
              width: 591,
              height: 94,
              boxSizing: "border-box",
              padding: "0 22px 0 40px",
              border: "3px solid #fff",
              borderRadius: 50,
              zIndex: 4,
              color: "#fff",
            }}
          >
            <span
              style={{
                fontSize: 36,
                fontWeight: 400,
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              Write to me on Telegram
            </span>
            <CircleMark inline box={49.309} glyph={35} src="/images/figma/arrow-light.svg" />
          </a>

          <Spin x={-273} y={6830} w={841.682} h={825.525} rotate={12.04} iw={713} ih={692} src="/images/figma/tape-13.png" />
          <Spin x={1252} y={6903} w={859.904} h={603.883} rotate={21.61} iw={791.889} ih={335.806} src="/images/figma/tape-14b.png" />
          <Text x={219} y={7444} size={28} width={1420} align="justify">
            The most important thing I focus on is your idea that you would like to show or convey to
            the viewer. I turn this idea into reality. If you do not know exactly what you want to
            see in the end result, then I will be able to complete your idea so that you can say
            «Yes, this is what you need!»
          </Text>
          <div id="process" style={{ position: "absolute", left: 0, top: 6780, width: 1, height: 1 }} />
          <Text x={593} y={7042} size={60} weight={600}>
            Development Process
          </Text>
          <Text x={314} y={7777} size={40} weight={600}>
            Briefing
          </Text>
          <Text x={314} y={7893} size={28} width={669} align="justify">
            I work with the client to define the goals and objectives of the future website. We draw
            up detailed technical specifications. You provide all the content that is available.
          </Text>

          <Spin x={44} y={7755.05} w={334.533} h={326.82} rotate={49} iw={195.33} ih={273.461} src="/images/figma/scrap-27.png" />
          <Spin x={152.67} y={7749.66} w={139.158} h={143.206} rotate={143.43} iw={91.154} ih={110.687} src="/images/figma/scrap-45.png" />
          <Spin x={748.96} y={8191.03} w={234.113} h={207.95} rotate={115.45} iw={138.212} ih={193.496} src="/images/figma/scrap-27.png" />
          <Spin x={821.95} y={8351.03} w={234.113} h={207.95} rotate={115.45} iw={138.212} ih={193.496} src="/images/figma/scrap-27.png" />
          <Spin x={821.89} y={8265.09} w={161.133} h={233.888} rotate={-161.09} iw={97} ih={214} src="/images/figma/scrap-64.png" />
          <Spin x={906.45} y={8263.11} w={80.011} h={64.848} rotate={-2.92} iw={77} ih={61} src="/images/figma/scrap-90.png" />

          <Text x={1423} y={8252} size={40} weight={600}>
            Competitor Analysis
          </Text>
          <Text x={1170} y={8342} size={28} width={669} align="right">
            I gather all information about the business and conduct UX research. I work through
            objections. I look for references and decide on the style of the future website.
          </Text>

          <Spin x={171.06} y={8774.77} w={128.075} h={108.298} rotate={-85.85} iw={99.783} ih={121.165} src="/images/figma/scrap-45.png" />
          <Spin x={162} y={8886.79} w={128.075} h={108.298} rotate={-85.85} iw={99.783} ih={121.165} src="/images/figma/scrap-45.png" />
          <Spin x={174.74} y={8693.23} w={156.109} h={142.738} rotate={23.9} iw={126.383} ih={100.122} src="/images/figma/scrap-90.png" />
          <Spin x={159.35} y={8817.71} w={156.109} h={142.738} rotate={23.9} iw={126.383} ih={100.122} src="/images/figma/scrap-90.png" />

          <Text x={432} y={8710} size={40} weight={600}>
            Prototype Development
          </Text>
          <Text x={432} y={8794} size={28} width={669} align="justify">
            I create a site map, think through the interaction, work out the sections, the sequence
            of blocks, and the texts. I draw a prototype of the main page of the site.
          </Text>

          <Spin x={795} y={9154.13} w={299.796} h={288.873} rotate={128.65} iw={174.51} ih={244.314} src="/images/figma/scrap-27.png" />
          <Spin x={795} y={9092} w={266.008} h={206.476} rotate={82.09} iw={174.51} ih={244.314} src="/images/figma/scrap-27.png" />
          <img
            src="/images/figma/scrap-89.png"
            alt=""
            style={{
              position: "absolute",
              left: 915.85,
              top: 9192.42,
              width: 178.72,
              height: 211.06,
              objectFit: "cover",
              pointerEvents: "none",
            }}
          />
          <Spin x={958.4} y={9103.06} w={73.436} h={127.323} rotate={89.94} iw={127.243} ih={73.297} src="/images/figma/scrap-10.png" />

          <Text x={1699} y={9117} size={40} weight={600}>
            Design
          </Text>
          <Text x={1170} y={9207} size={28} width={669} align="right">
            I present the finished design of the main page of the site, present my vision, and
            justify my decisions. After approval, I finish the rest of the pages.
          </Text>

          <div style={{ position: "absolute", left: 50, top: 1360, width: 400, height: 533, overflow: "hidden" }}>
            <img
              src="/images/figma/portrait.png"
              alt="Ivan Lisovenko standing by a pond"
              style={{ position: "absolute", left: -219, top: -412, width: 1000, height: 1333, objectFit: "cover", maxWidth: "none" }}
            />
          </div>
          <p
            aria-hidden="true"
            className="mix-blend-color-dodge"
            style={{
              position: "absolute",
              left: 507,
              top: 110,
              zIndex: 1,
              width: 1363,
              margin: 0,
              color: "rgba(255,255,255,0.3)",
              fontSize: 250,
              fontWeight: 600,
              lineHeight: 1.5,
              textAlign: "justify",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            PORTFOLIO
          </p>

          <div style={{ position: "absolute", left: -22, top: 9886.99, width: 518.919, height: 835.477, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <img
              src="/images/figma/footer-photo.png"
              alt="Ivan Lisovenko sitting at a table"
              width={518}
              height={835}
              style={{ width: 518.062, height: 834.946, transform: "rotate(-0.06deg)", display: "block", maxWidth: "none" }}
            />
          </div>
          <a
            href="mailto:ivanlisovenko@gmail.com"
            style={{
              position: "absolute",
              left: 426,
              top: 10894,
              color: "#b5b5b5",
              fontSize: 20,
              fontWeight: 700,
              lineHeight: 1.5,
              whiteSpace: "nowrap",
            }}
          >
            ivanlisovenko@gmail.com
          </a>

          <Text x={490} y={1360} size={20} weight={600}>
            UI/UX Designer — Web Design
          </Text>
          <div
            style={{
              position: "absolute",
              left: 490,
              top: 1414,
              width: 537,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            <p>
              I am a beginner, but I am quickly developing as a UI/UX designer specializing in web
              design and the creation of creative advertising banners. Recently, I have been actively
              working in the field of digital design, combining learning with practice — from
              performing specific tasks to participating in large-scale projects.
            </p>
            <p style={{ marginTop: 24 }}>
              I always strive to make my solutions not only visually appealing but also intuitive for
              users. I believe that good design is the result of careful analysis, constant dialogue
              with the user, and a commitment to simplicity.
            </p>
          </div>

          {[...projects2024, ...projects2025].map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              aria-label={project.title}
              className="home-hit"
              style={{ left: 50, top: project.hitY, width: 1264, height: 110 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function socialLink(top) {
  return {
    position: "absolute",
    left: 960,
    top,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
    whiteSpace: "nowrap",
  };
}
