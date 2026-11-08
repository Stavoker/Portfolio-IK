"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <header className="relative z-30 bg-ink">
      <div className="mx-auto flex w-full max-w-page items-center px-5 py-7 md:px-14">
        <Link href="/" className="text-sm text-white transition hover:opacity-60">
          Back to portfolio
        </Link>
      </div>
    </header>
  );
}
