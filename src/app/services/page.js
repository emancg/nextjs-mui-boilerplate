'use client';

import Box from '@mui/material/Box';
import AnimatedBox from '@/lib/animations/AnimatedBox';
import HeroSection from '@/lib/components/hero/HeroSection';
import ServicesSection from '@/lib/components/content/ServicesSection';
import GridSection from '@/lib/components/content/GridSection';
import CallToActionSection from '@/lib/components/content/CallToActionSection';
import FooterSection from '@/lib/components/navigation/FooterSection';

export default function ServicesPage() {
  const heroConfig = {
    title: "Our Services",
    subtitle: "Comprehensive solutions designed to elevate your brand and drive success",
    cta: [
      { text: "Get Started", href: "/contact", variant: "contained" },
      { text: "View Pricing", href: "/pricing", variant: "outlined" }
    ],
    height: "60vh",
    alignment: "center"
  };

  const mainServicesConfig = {
    title: "What We Offer",
    subtitle: "Expert services tailored to your unique needs",
    services: [
      {
        title: "Brand Strategy & Identity",
        description: "Develop a powerful brand identity that resonates with your audience. We craft strategic positioning, visual identity systems, and brand guidelines that stand the test of time.",
        icon: "Psychology"
      },
      {
        title: "Visual Design & Creative",
        description: "Create stunning visual experiences across all touchpoints. From digital design to print materials, we ensure your brand looks exceptional everywhere.",
        icon: "Palette"
      },
      {
        title: "Strategic Consulting",
        description: "Navigate complex business challenges with confidence. Our expert consultants provide strategic guidance to help you achieve sustainable growth.",
        icon: "TrendingUp"
      },
      {
        title: "Digital Experience",
        description: "Design and develop engaging digital experiences that convert. We create websites and applications that users love.",
        icon: "Devices"
      },
      {
        title: "Content Strategy",
        description: "Tell your story effectively across all channels. We develop content strategies that engage, inform, and inspire action.",
        icon: "Create"
      },
      {
        title: "Marketing & Growth",
        description: "Drive sustainable growth with data-driven marketing strategies. We help you reach the right audience with the right message.",
        icon: "ShowChart"
      }
    ]
  };

  const processConfig = {
    title: "Our Process",
    subtitle: "A proven methodology for delivering exceptional results",
    variant: "icon",
    columns: 4,
    items: [
      {
        icon: "Search",
        title: "Discovery",
        description: "We start by understanding your goals, challenges, and opportunities through in-depth research and consultation."
      },
      {
        icon: "Draw",
        title: "Strategy",
        description: "We develop a comprehensive strategy tailored to your unique needs and business objectives."
      },
      {
        icon: "Build",
        title: "Execution",
        description: "Our team brings the strategy to life with meticulous attention to detail and craftsmanship."
      },
      {
        icon: "RocketLaunch",
        title: "Launch & Support",
        description: "We launch your project and provide ongoing support to ensure continued success."
      }
    ]
  };

  const ctaConfig = {
    title: "Ready to Get Started?",
    subtitle: "Let's discuss how we can help elevate your brand",
    cta: [
      { text: "Contact Us", href: "/contact", variant: "contained" },
      { text: "View Case Studies", href: "/portfolio", variant: "outlined" }
    ],
    variant: "gradient"
  };

  const footerConfig = {
    companyName: "Luxe Studio",
    description: "Premium design and consulting services for discerning clients.",
    sections: [
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Our Team", href: "/team" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" }
        ]
      },
      {
        title: "Services",
        links: [
          { label: "Design Services", href: "/services" },
          { label: "Consulting", href: "/services" },
          { label: "Branding", href: "/services" },
          { label: "Strategy", href: "/services" }
        ]
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Case Studies", href: "/portfolio" },
          { label: "Pricing", href: "/pricing" }
        ]
      }
    ],
    social: {
      twitter: "https://twitter.com/luxestudio",
      linkedin: "https://linkedin.com/company/luxestudio",
      instagram: "https://instagram.com/luxestudio",
      facebook: "https://facebook.com/luxestudio"
    },
    bottomLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ]
  };

  return (
    <main>
      <AnimatedBox variant="fadeIn">
        <Box sx={{ mt: 8 }}>
          <HeroSection config={heroConfig} />
        </Box>
      </AnimatedBox>

      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10 }}>
          <ServicesSection config={mainServicesConfig} />
        </Box>
      </AnimatedBox>

      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
          <GridSection config={processConfig} />
        </Box>
      </AnimatedBox>

      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10 }}>
          <CallToActionSection config={ctaConfig} />
        </Box>
      </AnimatedBox>

      <FooterSection config={footerConfig} />
    </main>
  );
}
