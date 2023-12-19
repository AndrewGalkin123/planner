import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const metadata: Metadata = {
  title: "Planner",
  description: "planner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
