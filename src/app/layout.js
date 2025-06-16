import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import Head from 'next/head';

export const metadata = {
  title: 'Lush',
  description:
    'Yemi Osinubi is a qualified Regulatory Risk and Compliance expert, Corporate training facilitator and a certified member of CISI with over a decade of experience. Her expertise spans Corporate governance, Regulatory Compliance and Professional developmen',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        {children}
        <Footer />
      </body>
    </html>
  );
}
