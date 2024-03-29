import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import CustomHeader from '@/components/CustomHeader';
import CustomFooter from '@/components/CustomFooter';
import CustomContent from '@/components/CustomContent';
import Layout from 'antd/es/layout/layout';

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
      <body>
        <Layout>
          <CustomHeader />
          <CustomContent children={children} />
          <CustomFooter />
        </Layout>
      </body>
    </html>
  );
}
