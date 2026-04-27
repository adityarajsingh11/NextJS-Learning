import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/ClientProvider";



export const metadata: Metadata = {
  title: "Backend Project",
  description: "This is a backend project built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body >
        <ClientProvider>
            {children}
        </ClientProvider>
        
      </body>
    </html>
  );
}
