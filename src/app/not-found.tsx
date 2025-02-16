import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[60vh]">
      <div className="grid place-items-center h-full">
        <div className="flex flex-col items-center gap-10">
          <h2>Page is in development</h2>
          <p>We are on process of creating this page.</p>
          <Link className="text-persimmon" href="/">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
