import { Inter, Plus_Jakarta_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://zabsoltechnologies.com"),
  title: "Zabsol Technologies | IT Services, Software & AI",
  description:
    "Zabsol Technologies builds custom software, AI solutions, cloud systems and data platforms for modern businesses.",
  icons: {
    icon: "/zabsol-mark.png",
    apple: "/zabsol-mark.png",
  },
  openGraph: {
    title: "Zabsol Technologies | IT Services, Software & AI",
    description:
      "Zabsol Technologies builds custom software, AI solutions, cloud systems and data platforms for modern businesses.",
    images: ["/zabsol-mark.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} ${tajawal.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
