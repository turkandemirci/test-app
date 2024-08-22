import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Homepage",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> {children}</body>
    </html>
  );
}
