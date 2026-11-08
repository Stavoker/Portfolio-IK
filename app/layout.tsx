import { Suspense } from "react";
import { Poppins, Unbounded } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/*
  Accent font for large titles, “Year 20XX” banners, and case headlines.
  It is wired as the CSS variable --font-display-family, which Tailwind
  exposes as the `font-display` utility.

  To use your own files, drop them here:
    app/fonts/Display-Regular.woff2
    app/fonts/Display-Bold.woff2

  Then replace `display` below with:

  import localFont from "next/font/local";

  const display = localFont({
    src: [
      { path: "./fonts/Display-Regular.woff2", weight: "400", style: "normal" },
      { path: "./fonts/Display-Bold.woff2", weight: "700", style: "normal" },
    ],
    variable: "--font-display-family",
    display: "swap",
  });
*/
const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-display-family",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Lisovenko Ivan — UI/UX designer",
    template: "%s — Lisovenko Ivan",
  },
  description:
    "Portfolio of Ivan Lisovenko, a UI/UX designer. Selected work from 2024 and 2025.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${display.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col font-sans">
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
