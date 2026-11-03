import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cynbit Interactive Hub | Project Blueprint & BitElevate Accelerator',
  description: 'Interactive architectural scoping engine and BitElevate skill diagnostic for Cynbit Technologies Private Limited.',
  keywords: ['Cynbit', 'AI Automation', 'BitElevate', 'Software Architecture', 'Next.js', 'System Scoper'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
