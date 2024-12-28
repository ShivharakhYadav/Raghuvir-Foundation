// import type { Metadata } from 'next';
// // import { Inter } from 'next/font/google';
// import './globals.css';
// import CustomHeader from '@/components/CustomHeader';
// import CustomFooter from '@/components/CustomFooter';
// import CustomContent from '@/components/CustomContent';
// import Layout from 'antd/es/layout/layout';

// export const metadata: Metadata = {
//   title: 'Shree Raghuvir Foundation',
//   description:
//     'Empowering communities through social initiatives. Discover more about our programs, success stories, and how you can get involved.',
//   keywords:
//     'NGO, social work, community service, charity, foundation, nonprofit organization, volunteer, Shree Raghuvir Foundation',
//   authors: {
//     name: 'Shree Raghuvir Foundation',
//     url: 'https://raghuvir-foundation.vercel.app/',
//   },
//   viewport: 'width=device-width, initial-scale=1',
//   openGraph: {
//     title: 'Shree Raghuvir Foundation - Empowering Communities',
//     description:
//       'Learn about our mission to create impactful change in communities through social initiatives and charitable work.',
//     url: 'https://raghuvir-foundation.vercel.app/',
//     type: 'website',
//     images: [
//       {
//         url: 'https://www.raghuvirfoundation.org/og-image.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Shree Raghuvir Foundation Banner',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@RaghuvirFoundation',
//     creator: '@RaghuvirFoundation',
//     title: 'Shree Raghuvir Foundation',
//     description:
//       'Join hands with us to make a difference in society through our various initiatives and programs.',
//     images: 'https://www.raghuvirfoundation.org/og-image.jpg',
//   },
//   additionalMetaTags: [
//     { name: 'robots', content: 'index, follow' },
//     { name: 'language', content: 'English' },
//     { name: 'theme-color', content: '#ffffff' },
//     { name: 'copyright', content: 'Shree Raghuvir Foundation © 2024' },
//   ],
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang='en'>
//       <head>
//         <link rel='icon' href='/favicon.ico' />
//         <link rel='canonical' href='https://www.raghuvirfoundation.org' />
//         <script type='application/ld+json'>
//           {JSON.stringify({
//             '@context': 'https://schema.org',
//             '@type': 'Organization',
//             name: 'Shree Raghuvir Foundation',
//             url: 'https://www.raghuvirfoundation.org',
//             logo: 'https://www.raghuvirfoundation.org/logo.png',
//             sameAs: [
//               'https://www.facebook.com/RaghuvirFoundation',
//               'https://www.twitter.com/RaghuvirFoundation',
//               'https://www.linkedin.com/company/raghuvir-foundation',
//               'https://www.instagram.com/RaghuvirFoundation',
//             ],
//             contactPoint: [
//               {
//                 '@type': 'ContactPoint',
//                 telephone: '+1-800-555-5555',
//                 contactType: 'Customer Service',
//                 areaServed: 'Global',
//                 availableLanguage: 'English',
//               },
//             ],
//           })}
//         </script>
//       </head>
//       <body>
//         <Layout>
//           <CustomHeader />
//           <CustomContent children={children} />
//           <CustomFooter />
//         </Layout>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import CustomHeader from '@/components/CustomHeader';
import CustomFooter from '@/components/CustomFooter';
import CustomContent from '@/components/CustomContent';
import Layout from 'antd/es/layout/layout';

export const metadata: Metadata = {
  title: 'Shree Raghuvir Foundation',
  description:
    'Empowering communities through social initiatives. Discover more about our programs, success stories, and how you can get involved.',
  keywords:
    'NGO, social work, community service, charity, foundation, nonprofit organization, volunteer, Shree Raghuvir Foundation',
  authors: {
    name: 'Shree Raghuvir Foundation',
    url: 'https://raghuvir-foundation.vercel.app/',
  },
  openGraph: {
    title: 'Shree Raghuvir Foundation - Empowering Communities',
    description:
      'Learn about our mission to create impactful change in communities through social initiatives and charitable work.',
    url: 'https://raghuvir-foundation.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://raghuvir-foundation.vercel.app/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Shree Raghuvir Foundation Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RaghuvirFoundation',
    creator: '@RaghuvirFoundation',
    title: 'Shree Raghuvir Foundation',
    description:
      'Join hands with us to make a difference in society through our various initiatives and programs.',
    images: 'https://raghuvir-foundation.vercel.app/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* <meta name='viewport' content='width=device-width, initial-scale=1' /> */}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='copyright' content='Shree Raghuvir Foundation © 2024' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href='https://raghuvir-foundation.vercel.app/' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Shree Raghuvir Foundation',
            url: 'https://raghuvir-foundation.vercel.app/',
            logo: 'https://raghuvir-foundation.vercel.app/favicon.ico',
            sameAs: [
              'https://www.facebook.com/RaghuvirFoundation',
              'https://www.twitter.com/RaghuvirFoundation',
              'https://www.linkedin.com/company/raghuvir-foundation',
              'https://www.instagram.com/RaghuvirFoundation',
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+91 9033276538',
                contactType: 'Customer Service',
                areaServed: 'Global',
                availableLanguage: 'English',
              },
            ],
          })}
        </script>
      </head>
      <body>
        <Layout>
          <CustomHeader />
          <CustomContent>{children}</CustomContent>
          <CustomFooter />
        </Layout>
      </body>
    </html>
  );
}
