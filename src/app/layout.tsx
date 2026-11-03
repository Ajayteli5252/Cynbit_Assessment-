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
        <style dangerouslySetInnerHTML={{ __html: `
          html, body {
            background: linear-gradient(135deg, #fbfdfd 0%, #f0f7f6 50%, #e6f3f2 100%) !important;
            color: #111827 !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif;
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
      <body className="antialiased min-h-screen text-slate-900">
        {children}
      </body>
    </html>
  );
}
