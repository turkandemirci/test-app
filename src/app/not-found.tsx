import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
