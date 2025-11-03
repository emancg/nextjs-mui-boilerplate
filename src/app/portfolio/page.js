'use client';

import Box from '@mui/material/Box';
import AnimatedBox from '@/lib/animations/AnimatedBox';
import HeroSection from '@/lib/components/hero/HeroSection';
import ImageGallery from '@/lib/components/media/ImageGallery';
import GridSection from '@/lib/components/content/GridSection';
import CallToActionSection from '@/lib/components/content/CallToActionSection';
import FooterSection from '@/lib/components/navigation/FooterSection';

export default function PortfolioPage() {
  const heroConfig = {
    title: "Our Portfolio",
    subtitle: "A showcase of our finest work and successful client partnerships",
    cta: [
      { text: "Start Your Project", href: "/contact", variant: "contained" }
    ],
    height: "60vh",
    alignment: "center"
  };

  const galleryConfig = {
    title: "Featured Projects",
    subtitle: "Excellence in every detail",
    images: [
      { src: "/images/portfolio/project1.jpg", alt: "Brand Identity Project", title: "Luxury Brand Identity", description: "Complete brand overhaul for premium fashion house" },
      { src: "/images/portfolio/project2.jpg", alt: "Digital Experience", title: "E-Commerce Platform", description: "Elegant e-commerce solution with seamless UX" },
      { src: "/images/portfolio/project3.jpg", alt: "Marketing Campaign", title: "Marketing Campaign", description: "Award-winning integrated marketing campaign" },
      { src: "/images/portfolio/project4.jpg", alt: "Website Design", title: "Corporate Website", description: "Sophisticated website for financial services" },
      { src: "/images/portfolio/project5.jpg", alt: "Packaging Design", title: "Product Packaging", description: "Premium packaging design for luxury goods" },
      { src: "/images/portfolio/project6.jpg", alt: "Brand Guidelines", title: "Brand Guidelines", description: "Comprehensive brand system and guidelines" },
      { src: "/images/portfolio/project7.jpg", alt: "App Design", title: "Mobile App", description: "Intuitive mobile experience for lifestyle brand" },
      { src: "/images/portfolio/project8.jpg", alt: "Print Campaign", title: "Print Campaign", description: "Elegant print collateral for boutique hotel" }
    ],
    columns: { xs: 1, sm: 2, md: 3 }
  };

  const categoriesConfig = {
    title: "Our Expertise",
    subtitle: "Specialized services across multiple disciplines",
    variant: "card",
    columns: 3,
    items: [
      {
        image: "/images/categories/branding.jpg",
        title: "Branding & Identity",
        description: "15+ award-winning brand identities",
        subtitle: "View Projects"
      },
      {
        image: "/images/categories/digital.jpg",
        title: "Digital Design",
        description: "30+ websites and applications",
        subtitle: "View Projects"
      },
      {
        image: "/images/categories/print.jpg",
        title: "Print & Packaging",
        description: "25+ print campaigns",
        subtitle: "View Projects"
      }
    ]
  };

  const ctaConfig = {
    title: "Let's Create Your Success Story",
    subtitle: "Ready to join our portfolio of satisfied clients?",
    cta: [
      { text: "Discuss Your Project", href: "/contact", variant: "contained" },
      { text: "View Pricing", href: "/pricing", variant: "outlined" }
    ],
    variant: "default"
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
          <ImageGallery config={galleryConfig} />
        </Box>
      </AnimatedBox>

      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
          <GridSection config={categoriesConfig} />
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
