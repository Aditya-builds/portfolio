import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { publicProfiles, site } from "@/content/site";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const viewport: Viewport = {
  themeColor: "#0a0b10",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  keywords: [
    "Aditya Kumar",
    "AI engineer",
    "Java",
    "LLM",
    "generative AI",
    "Google Summer of Code",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.siteUrl,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.siteUrl,
    email: site.email,
    sameAs: publicProfiles(),
    description: site.description,
    knowsAbout: [
      "Artificial intelligence",
      "Java",
      "Large language models",
      "Generative AI",
    ],
    alumniOf: {
      "@type": "EducationalOccupationalProgram",
      name: "Bachelor's in Artificial Intelligence and Data Science",
    },
  };

  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
