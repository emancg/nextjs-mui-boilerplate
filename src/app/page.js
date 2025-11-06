// Server Component - No 'use client' needed!
// Benefits: Smaller bundle, better SEO, server-side rendering

import MuiContainer from '@mui/material/Container';
import dynamic from 'next/dynamic';
import AnimatedBox from '@/lib/animations/AnimatedBox';

// Static import for above-the-fold content (critical for FCP)
import HeroSection from '@/lib/components/hero/HeroSection/HeroSection';
import Container from '@/lib/components/utility/Container/Container';

// Dynamic imports for below-the-fold sections (lazy load for performance)
const ServicesSection = dynamic(() => import('@/lib/components/content/ServicesSection/ServicesSection'), {
  ssr: true,
  loading: () => <div style={{ minHeight: '400px' }} />
});

const GridSection = dynamic(() => import('@/lib/components/content/GridSection/GridSection'), {
  ssr: true,
  loading: () => <div style={{ minHeight: '400px' }} />
});

const StatsCounter = dynamic(() => import('@/lib/components/content/StatsCounter/StatsCounter'), {
  ssr: true,
  loading: () => <div style={{ minHeight: '300px' }} />
});

const TestimonialsCarousel = dynamic(() => import('@/lib/components/social-proof/TestimonialsCarousel/TestimonialsCarousel'), {
  ssr: true,
  loading: () => <div style={{ minHeight: '400px' }} />
});

const CallToActionSection = dynamic(() => import('@/lib/components/content/CallToActionSection/CallToActionSection'), {
  ssr: true,
  loading: () => <div style={{ minHeight: '300px' }} />
});

const LogoGrid = dynamic(() => import('@/lib/components/content/LogoGrid/LogoGrid'), {
  ssr: true,
  loading: () => <div style={{ minHeight: '200px' }} />
});

const FooterSection = dynamic(() => import('@/lib/components/navigation/FooterSection/FooterSection'), {
  ssr: true,
  loading: () => <div style={{ minHeight: '400px' }} />
});

// Import page configuration
import { homePageConfig } from '../../content/pages/home.config';

export default function Home() {
  // Map section types to components (now with dynamic imports for better performance)
  const sectionComponents = {
    hero: HeroSection,
    services: ServicesSection,
    features: GridSection,
    stats: StatsCounter,
    // testimonials: TestimonialsCarousel,
    // cta: CallToActionSection,
    // logoGrid: LogoGrid,
    footer: FooterSection,
  };

  return (
    <main>
      <MuiContainer
        maxWidth="xl"
        sx={{
          padding: 0,
          width: '100%',
          justifyContent: 'center',
          backgroundImage: homePageConfig.background?.image
            ? `url('${homePageConfig.background.image}')`
            : 'none',
          backgroundSize: 'cover',
        }}
      >
        {homePageConfig.sections.map((section, index) => {
          const SectionComponent = sectionComponents[section.type];

          if (!SectionComponent) {
            console.warn(`Unknown section type: ${section.type}`);
            return null;
          }

          return (
            <AnimatedBox
              key={index}
              variant={section.animation || 'fadeInUp'}
              delay={0.1}
            >
              <Container
                id={section.id}
                disableGutters
                maxWidth={false}
                sx={section.containerProps?.sx || {}}
              >
                <SectionComponent config={section.config} />
              </Container>
            </AnimatedBox>
          );
        })}
      </MuiContainer>
    </main>
  );
}

