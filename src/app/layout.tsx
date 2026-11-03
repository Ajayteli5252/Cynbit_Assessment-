import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cynbit Technologies | AI Automation & Software Solutions',
  description: 'Engineering human-centric software solutions, autonomous AI agents, and distributed cloud architecture. Founded by digital architects in Jaipur, Rajasthan.',
  keywords: ['Cynbit', 'AI Automation', 'BitElevate', 'Software Architecture', 'Next.js', 'System Scoper'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <head>
        {/* Critical Inline CSS: Prevents any white flash or unstyled FOUC before CSS chunks hydrate */}
        <style dangerouslySetInnerHTML={{ __html: `
          html, body {
            background-color: #070a13 !important;
            color: #f1f5f9 !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
          }
          button {
            border: none;
            background: transparent;
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
      <body className="antialiased bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
