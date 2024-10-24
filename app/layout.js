import { Inter } from "next/font/google";
import "./globals.css";

// Create a theme instance.
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
import "@fontsource/poppins";
// import Theme from "@/components/Theme";
const Theme = dynamic(() => import("@/components/Theme"));
export const metadata = {
  title: "Brysontech",
  description: "IT consulting compayny for small and meduim bussinesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </head>

      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
        rel="stylesheet"
      ></link> */}
      <body className={inter.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
