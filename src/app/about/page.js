"use client";

import Box from "@mui/material/Box";
import AnimatedBox from "@/lib/animations/AnimatedBox";
import HeroSection from "@/lib/components/hero/HeroSection";
import AboutSection from "@/lib/components/content/AboutSection";
import Timeline from "@/lib/components/content/Timeline";
import StatsCounter from "@/lib/components/content/StatsCounter";
import GridSection from "@/lib/components/content/GridSection";
import CallToActionSection from "@/lib/components/content/CallToActionSection";
import FooterSection from "@/lib/components/navigation/FooterSection";

export default function AboutPage() {
  // Hero config for About page
  const heroConfig = {
    title: "About Luxe Studio",
    subtitle:
      "Founded on the principles of excellence, integrity, and timeless design",
    cta: [
      { text: "Meet Our Team", href: "/team", variant: "contained" },
      { text: "Contact Us", href: "/contact", variant: "outlined" },
    ],
    height: "60vh",
    alignment: "center",
  };

  // About section config
  const aboutConfig = {
    title: "Our Story",
    content:
      "Founded in 2020, Luxe Studio emerged from a simple yet powerful vision: to bring sophistication and excellence to every project we touch. What started as a small design consultancy has grown into a full-service agency trusted by industry leaders worldwide.\n\nOur team of passionate designers, strategists, and consultants work collaboratively to deliver solutions that don't just meet expectations—they exceed them. We believe in the power of thoughtful design, strategic thinking, and genuine partnerships.",
    image: "/images/about-image.jpg",
    imagePosition: "right",
    variant: "default",
  };

  // Mission section config
  const missionConfig = {
    title: "Our Mission",
    content:
      "To elevate brands through sophisticated design and strategic consulting, creating lasting impact for our clients and their audiences. We are committed to excellence, innovation, and building relationships that stand the test of time.",
    variant: "centered",
    backgroundColor: "background.paper",
  };

  // Timeline config
  const timelineConfig = {
    title: "Our Journey",
    subtitle: "Milestones that shaped Luxe Studio",
    items: [
      {
        year: "2020",
        title: "Foundation",
        description:
          "Luxe Studio was founded with a vision to bring elegance and excellence to design consulting.",
      },
      {
        year: "2021",
        title: "Growth & Expansion",
        description:
          "Expanded our team to 10 talented professionals and completed 100+ projects.",
      },
      {
        year: "2022",
        title: "Industry Recognition",
        description:
          "Received the Design Excellence Award and expanded our service offerings.",
      },
      {
        year: "2023",
        title: "Global Reach",
        description:
          "Partnered with international clients across multiple continents.",
      },
      {
        year: "2024",
        title: "Innovation Hub",
        description:
          "Launched our innovation lab focused on cutting-edge design solutions.",
      },
    ],
  };

  // Stats config
  const statsConfig = {
    stats: [
      { label: "Projects Completed", value: 250, suffix: "+" },
      { label: "Happy Clients", value: 180, suffix: "+" },
      { label: "Team Members", value: 15, suffix: "" },
      { label: "Countries Served", value: 12, suffix: "" },
    ],
    variant: "default",
  };

  // Values config
  const valuesConfig = {
    title: "Our Values",
    subtitle: "The principles that guide everything we do",
    variant: "icon",
    columns: 2,
    items: [
      {
        icon: "Diamond",
        title: "Excellence",
        description:
          "We pursue perfection in every detail, delivering work that exceeds expectations and stands the test of time.",
      },
      {
        icon: "Handshake",
        title: "Integrity",
        description:
          "Honesty and transparency are at the core of our relationships with clients, partners, and team members.",
      },
      {
        icon: "EmojiObjects",
        title: "Innovation",
        description:
          "We embrace creativity and forward-thinking approaches to solve complex challenges.",
      },
      {
        icon: "Favorite",
        title: "Passion",
        description:
          "Our love for design and dedication to our craft drives us to create meaningful solutions.",
      },
    ],
  };

  // CTA config
  const ctaConfig = {
    title: "Let's Create Together",
    subtitle:
      "Ready to bring your vision to life? Our team is here to help you succeed.",
    cta: [
      { text: "Start a Project", href: "/contact", variant: "contained" },
      { text: "View Our Work", href: "/portfolio", variant: "outlined" },
    ],
    variant: "default",
  };

  // Footer config
  const footerConfig = {
    companyName: "Luxe Studio",
    description:
      "Premium design and consulting services for discerning clients.",
    sections: [
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Our Team", href: "/team" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Design Services", href: "/services" },
          { label: "Consulting", href: "/services" },
          { label: "Branding", href: "/services" },
          { label: "Strategy", href: "/services" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Case Studies", href: "/portfolio" },
          { label: "Pricing", href: "/pricing" },
        ],
      },
    ],
    social: {
      twitter: "https://twitter.com/luxestudio",
      linkedin: "https://linkedin.com/company/luxestudio",
      instagram: "https://instagram.com/luxestudio",
      facebook: "https://facebook.com/luxestudio",
    },
    bottomLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <main>
      {/* Hero Section */}
      <AnimatedBox variant="fadeIn">
        <Box sx={{ mt: 8 }}>
          <HeroSection config={heroConfig} />
        </Box>
      </AnimatedBox>

      {/* About Section */}
      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10 }}>
          <AboutSection config={aboutConfig} />
        </Box>
      </AnimatedBox>

      {/* Mission Section */}
      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10 }}>
          <AboutSection config={missionConfig} />
        </Box>
      </AnimatedBox>

      {/* Timeline */}
      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10, bgcolor: "background.default" }}>
          <Timeline config={timelineConfig} />
        </Box>
      </AnimatedBox>

      {/* Stats Counter */}
      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 8, bgcolor: "background.paper" }}>
          <StatsCounter config={statsConfig} />
        </Box>
      </AnimatedBox>

      {/* Values */}
      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10 }}>
          <GridSection config={valuesConfig} />
        </Box>
      </AnimatedBox>

      {/* CTA Section */}
      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10, bgcolor: "background.paper" }}>
          <CallToActionSection config={ctaConfig} />
        </Box>
      </AnimatedBox>

      {/* Footer */}
      <FooterSection config={footerConfig} />
    </main>
  );
}
