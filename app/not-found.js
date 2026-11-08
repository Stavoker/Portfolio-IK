import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] w-full max-w-page flex-col items-start justify-center px-5 md:px-14">
      <p className="text-sm text-mute">404</p>
      <h1 className="mt-3 font-display text-5xl font-medium">Page not found</h1>
      <Link href="/" className="mt-8 text-sm underline underline-offset-4">
        Back to portfolio
      </Link>
    </div>
  );
}
