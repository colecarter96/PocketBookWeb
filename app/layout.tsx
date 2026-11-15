import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import "./globals.css";

const geist = localFont({
  src: "../fonts/Geist-Regular.ttf",
  weight: "400",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

const themeScript = `(function(){try{var theme=localStorage.getItem("pocketbook-theme");if(theme==="light"||theme==="dark"){document.documentElement.setAttribute("data-theme",theme);}else{theme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}var meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute("content",theme==="dark"?"#000000":"#ffffff");}catch(e){}})();`;

export const metadata: Metadata = {
  title: {
    default: "PocketBook",
    template: "%s — PocketBook",
  },
  description: "PocketBook is a notebook for notes, photos, and voice memos on iPhone.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <div className="wrap">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
