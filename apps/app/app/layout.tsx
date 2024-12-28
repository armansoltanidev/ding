import '@repo/design-system/styles/globals.css';
import { DesignSystemProvider } from '@repo/design-system';
import type { ReactNode } from 'react';


import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './(fonts)/IRANSansXV.woff2',
  display: 'swap',
  variable: '--font-sansx'
})
 

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="fa" dir='rtl' className={myFont.className} suppressHydrationWarning>
    <body>
      <DesignSystemProvider>{children}</DesignSystemProvider>
    </body>
  </html>
);

export default RootLayout;
