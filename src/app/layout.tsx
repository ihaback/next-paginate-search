import type { Metadata } from "next";
import "../sass/main.scss";

export const metadata: Metadata = {
  title: "User search and pagination",
  description: "Search and paginatation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
