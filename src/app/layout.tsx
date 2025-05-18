import type { Metadata } from "next";
import "./styles/global.css";
import { Swiper } from "swiper/react";
import { DarkModeProvider } from './context/darkmodecontext';
import 'swiper/css';
import { Header } from "./components/header";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: process.env.NEXT_APP_NAME,
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <DarkModeProvider>

        <body className="relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light"
        >
          <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
            <Header />
            {children}
            <SpeedInsights />
          </div>
        </body>
      </DarkModeProvider>
    </html>
  );
}
