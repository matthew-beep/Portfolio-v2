import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matthew Herradura",
  description: "Matthew Herradura's UX Design and Front End Developer portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo.svg" type="image/svg+xml"/>
        <meta property="og:image" content="/img/website.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
