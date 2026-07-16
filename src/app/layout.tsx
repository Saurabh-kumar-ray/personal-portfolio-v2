import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saurabh-portfolio-v2.vercel.app"),
  title: "Saurabh Kumar Ray | Software Engineer & Student Portfolio",
  description: "Professional portfolio of Saurabh Kumar Ray, an Entry-Level Software Engineer & B.Tech Computer Science student specializing in Full-Stack Web Development and AI/ML.",
  keywords: "Saurabh Kumar Ray, Software Engineer, B.Tech Computer Science, Student Portfolio, Full-Stack Developer, AI/ML, React, Next.js, Python, JavaScript",
  openGraph: {
    title: "Saurabh Kumar Ray | Software Engineer & Student Portfolio",
    description: "Professional portfolio of Saurabh Kumar Ray, an Entry-Level Software Engineer & B.Tech Computer Science student.",
    url: "https://saurabh-portfolio-v2.vercel.app",
    siteName: "Saurabh Kumar Ray Portfolio",
    images: [
      {
        url: "/assets/images/profile-avatar.svg",
        width: 800,
        height: 600,
        alt: "Saurabh Kumar Ray Avatar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Saurabh Kumar Ray | Software Engineer & Student Portfolio",
    description: "Professional portfolio of Saurabh Kumar Ray, an Entry-Level Software Engineer & B.Tech Computer Science student.",
    images: ["/assets/images/profile-avatar.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        {/* Blocking script to set theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("portfolio-theme")||"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
        {/* Bootstrap 5 CSS Grid & Layout Utilities */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          precedence="default"
        />
        {/* Font Awesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          precedence="default"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
