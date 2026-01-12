import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingVideoPlayer from "@/components/ui/FloatingVideoPlayer";

export const metadata: Metadata = {
  title: "Marco Polo Hotel | Modern Accommodation in Sydney",
  description: "Experience comfortable, modern accommodation in the heart of Sydney. Free parking, WiFi, and exceptional service. Book your stay today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <div className="stm-site">
          <Header />
          <main id="content" style={{ flex: '1 0 auto' }}>{children}</main>
          <Footer />
          <FloatingVideoPlayer />
        </div>
      </body>
    </html>
  );
}
