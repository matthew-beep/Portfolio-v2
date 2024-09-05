import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matthew Herradura",
  description: "Matthew Herradura's UX Design and Front End Developer portfolio.",
  metadataBase: new URL('https://mherradura.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <title>Matthew Herradura</title>
        <meta name="description" content="Matthew Herradura's UX Design and Front End Developer portfolio."></meta>
        <meta name="robots" content="index"></meta>
        <meta name="keywords" content="Herradura, UX Design, Front End"></meta>
        <link rel="canonical" href="https://mherradura.com"/>
        
        <meta property="og:title" content="Matthew Herradura" />      
        <meta property="og:description" content="Matthew Herradura's UX Design and Front End Developer portfolio."/>
        <meta property="og:image" content="/img/website.png" />
        <meta property="og:url" content="https://mherradura.com"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Matthew Herradura"/>
        <meta name="twitter:description" content="Matthew Herradura's UX Design and Front End Developer portfolio."/>
        <meta name="twitter:image" content="/img/website.png"/>
        <meta name="twitter:url" content="https://mherradura.com"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
