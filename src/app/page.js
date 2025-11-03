'use client';

import { styled } from '@mui/material/styles';
import MuiContainer from '@mui/material/Container';
import AnimatedBox from '@/lib/animations/AnimatedBox';

// Import components from lib
import HeroSection from '@/lib/components/hero/HeroSection';
import ServicesSection from '@/lib/components/content/ServicesSection';
import GridSection from '@/lib/components/content/GridSection';
import StatsCounter from '@/lib/components/content/StatsCounter';
import TestimonialsCarousel from '@/lib/components/social-proof/TestimonialsCarousel';
import CallToActionSection from '@/lib/components/content/CallToActionSection';
import LogoGrid from '@/lib/components/content/LogoGrid';
import FooterSection from '@/lib/components/navigation/FooterSection';
import Container from '@/lib/components/utility/Container';

// Import page configuration
import { homePageConfig } from '../../content/pages/home.config';

// Styled page container with background
const PageContainer = styled(MuiContainer)(({ theme, config }) => ({
  padding: 0,
  width: '100%',
  justifyContent: 'center',
  backgroundImage: config?.background?.image
    ? `url('${config.background.image}')`
    : 'none',
  backgroundSize: 'cover',
}));

export default function Home() {
  // Map section types to components
  const sectionComponents = {
    hero: HeroSection,
    services: ServicesSection,
    features: GridSection,
    stats: StatsCounter,
    testimonials: TestimonialsCarousel,
    cta: CallToActionSection,
    logoGrid: LogoGrid,
    footer: FooterSection,
  };

  return (
    <main>
      <PageContainer maxWidth="xl" config={homePageConfig}>
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
      </PageContainer>
    </main>
  );
}

