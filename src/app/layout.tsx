import type { Metadata, Viewport } from "next";
import { Cousine, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./site.css";
import { pageDescription, pageTitle } from "@/content/site";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cousine",
  display: "swap",
});

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  applicationName: "Nouhaila Elkharfachi",
  authors: [{ name: "Nouhaila Elkharfachi" }],
  creator: "Nouhaila Elkharfachi",
  keywords: ["Nouhaila Elkharfachi", "Salé", "SUPMTI", "full-stack", "QA", "PFE", "DocMind"],
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    locale: "fr_MA",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5ff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${syne.variable} ${jakarta.variable} ${cousine.variable}`}>
      <body>{children}</body>
    </html>
  );
}
