import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Contact Us | Cynbit Technologies - AI Automation & Software Solutions',
  description: 'Whether you are building a product, automating operations, or scaling digitally, our architects are ready to design the solution that scales with your ambition.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          html, body {
            background-color: #F7FAFA !important;
            color: #111827 !important;
            font-family: 'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            margin: 0;
            padding: 0;
            min-height: 100vh;
          }
          button {
            border: none;
            cursor: pointer;
            font-family: inherit;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          * {
            box-sizing: border-box;
          }
        `}} />
      </head>
      <body className="antialiased min-h-screen text-slate-900 bg-[#F7FAFA]">
        {children}
      </body>
    </html>
  );
}
