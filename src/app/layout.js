import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyleVariantProvider } from '@/lib/contexts/StyleVariantContext';
import AppBar from '@/lib/components/navigation/AppBar/AppBar';

// Import content configurations
import { themeConfig } from '../../content/theme.config';
import { navigationConfig } from '../../content/navigation.config';
import { siteConfig } from '../../content/site.config';

// Note: Google Fonts removed for performance optimization
// Memphis variant uses system fonts (Comic Sans MS, Marker Felt)
// If you switch to a variant that requires Google Fonts,
// import only the specific fonts needed for that variant

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <StyleVariantProvider defaultVariant="memphis" enablePersistence={true}>
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
