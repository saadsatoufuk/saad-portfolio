import "./globals.css";
import StarBackground from "@/app/components/StarBackground";
import CustomCursor from "@/app/components/CustomCursor";
import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "saad Portfolio | Senior Developer",
  description: "A high-end, futuristic space-themed portfolio of a Senior Frontend Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-neon-blue selection:text-white">
        <StarBackground />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
