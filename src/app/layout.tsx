import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { StyleProvider } from '@ant-design/cssinjs';
// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tailwind Practice',
  description: 'Social NGO Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
      // className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
