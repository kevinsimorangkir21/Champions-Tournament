import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata = {
  title: "Champions Tournament 2026",
  description: "The ultimate FIFA tournament for all players.",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-[#0b0f15] dark:text-gray-100 transition-colors duration-500">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
