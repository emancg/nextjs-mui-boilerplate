import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyleVariantProvider } from '@/lib/contexts/StyleVariantContext';
import { AppBar } from '@/lib/components';
import {
  Playfair_Display,
  Lora,
  Montserrat,
  Inter,
  Roboto,
  Merriweather,
  Orbitron,
  Rajdhani,
  Poppins,
  Cormorant_Garamond,
  Quicksand,
  Special_Elite,
  Source_Sans_3,
  Open_Sans,
  Nunito,
  Lato,
} from 'next/font/google';

// Import content configurations
import { themeConfig } from '../../content/theme.config';
import { navigationConfig } from '../../content/navigation.config';
import { siteConfig } from '../../content/site.config';

// Load Google Fonts for all variants
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
  display: 'optional', // Less critical font
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
  display: 'optional', // Less critical font
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'optional', // Less critical font
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'optional', // Less critical font
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'optional', // Less critical font
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
  display: 'optional', // Less critical font
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'optional', // Less critical font
});

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-special-elite',
  display: 'optional', // Less critical font
});

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-sans-pro',
  display: 'optional', // Less critical font
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'optional', // Less critical font
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
  display: 'optional', // Less critical font
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'optional', // Less critical font
});

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body
        className={`
          ${playfairDisplay.variable}
          ${lora.variable}
          ${montserrat.variable}
          ${inter.variable}
          ${roboto.variable}
          ${merriweather.variable}
          ${orbitron.variable}
          ${rajdhani.variable}
          ${poppins.variable}
          ${cormorantGaramond.variable}
          ${quicksand.variable}
          ${specialElite.variable}
          ${sourceSansPro.variable}
          ${openSans.variable}
          ${nunito.variable}
          ${lato.variable}
        `}
      >
        <AppRouterCacheProvider>
          <StyleVariantProvider defaultVariant="y2k" enablePersistence={true}>
            <AppBar
              brand={themeConfig.brand}
              menuItems={navigationConfig.mainMenu}
            />
            {children}
          </StyleVariantProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
