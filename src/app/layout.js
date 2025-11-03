import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyleVariantProvider } from '@/lib/contexts/StyleVariantContext';
import { AppBar } from '@/lib/components';
import { Playfair_Display, Lora, Montserrat } from 'next/font/google';

// Import content configurations
import { themeConfig } from '../../content/theme.config';
import { navigationConfig } from '../../content/navigation.config';
import { siteConfig } from '../../content/site.config';

// Load Google Fonts for Elegant variant
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${lora.variable} ${montserrat.variable}`}>
        <AppRouterCacheProvider>
          <StyleVariantProvider defaultVariant="elegant" enablePersistence={true}>
            <AppBar
              brand={themeConfig.brand}
              menuItems={navigationConfig.mainMenu}
              themeColors={themeConfig.colors}
            />
            {children}
          </StyleVariantProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
