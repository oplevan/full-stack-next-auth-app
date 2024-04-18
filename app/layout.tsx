import type { Metadata } from "next";
import "@/styles/index.css";
import SessionProvider from "@/providers/session-provider";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Full-Stack Next Auth App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
