import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/ClientProvider";
import UserContext from "@/context/UserContext";



export const metadata: Metadata = {
  title: "CreditInsight",
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
          <UserContext>
            {children}
          </UserContext>
        </ClientProvider>
        
      </body>
    </html>
  );
}
