'use client';

import Box from '@mui/material/Box';
import AnimatedBox from '@/lib/animations/AnimatedBox';
import HeroSection from '@/lib/components/hero/HeroSection';
import TeamSection from '@/lib/components/team/TeamSection';
import CallToActionSection from '@/lib/components/content/CallToActionSection';
import FooterSection from '@/lib/components/navigation/FooterSection';

export default function TeamPage() {
  const heroConfig = {
    title: "Meet Our Team",
    subtitle: "The talented individuals behind Luxe Studio's success",
    cta: [
      { text: "Join Our Team", href: "/careers", variant: "contained" }
    ],
    height: "60vh",
    alignment: "center"
  };

  const teamConfig = {
    title: "Our Leadership",
    subtitle: "Experienced professionals dedicated to your success",
    members: [
      {
        name: "Alexandra Sterling",
        role: "Founder & Creative Director",
        bio: "With over 15 years of experience in luxury branding, Alexandra leads our creative vision with passion and precision.",
        image: "/images/team/alexandra.jpg",
        social: {
          linkedin: "https://linkedin.com/in/alexandra-sterling",
          twitter: "https://twitter.com/asterling"
        }
      },
      {
        name: "Marcus Chen",
        role: "Chief Strategy Officer",
        bio: "Marcus brings strategic insight from working with Fortune 500 companies and innovative startups alike.",
        image: "/images/team/marcus.jpg",
        social: {
          linkedin: "https://linkedin.com/in/marcus-chen",
          twitter: "https://twitter.com/mchen"
        }
      },
      {
        name: "Isabella Rodriguez",
        role: "Head of Design",
        bio: "Isabella's award-winning designs have transformed brands across fashion, hospitality, and technology sectors.",
        image: "/images/team/isabella.jpg",
        social: {
          linkedin: "https://linkedin.com/in/isabella-rodriguez",
          instagram: "https://instagram.com/isabelladesigns"
        }
      },
      {
        name: "James Morrison",
        role: "Senior Consultant",
        bio: "James specializes in digital transformation and has guided dozens of companies through successful transitions.",
        image: "/images/team/james.jpg",
        social: {
          linkedin: "https://linkedin.com/in/james-morrison"
        }
      },
      {
        name: "Sophia Laurent",
        role: "Brand Strategist",
        bio: "Sophia crafts compelling brand narratives that resonate with audiences and drive meaningful engagement.",
        image: "/images/team/sophia.jpg",
        social: {
          linkedin: "https://linkedin.com/in/sophia-laurent",
          twitter: "https://twitter.com/slaurent"
        }
      },
      {
        name: "David Park",
        role: "Lead Developer",
        bio: "David builds elegant technical solutions that bring creative visions to life with precision and performance.",
        image: "/images/team/david.jpg",
        social: {
          linkedin: "https://linkedin.com/in/david-park",
          github: "https://github.com/davidpark"
        }
      }
    ],
    variant: "card"
  };

  const ctaConfig = {
    title: "Want to Join Our Team?",
    subtitle: "We're always looking for talented individuals who share our passion for excellence",
    cta: [
      { text: "View Open Positions", href: "/careers", variant: "contained" },
      { text: "Learn About Our Culture", href: "/about", variant: "outlined" }
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
          <TeamSection config={teamConfig} />
        </Box>
      </AnimatedBox>

      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
          <CallToActionSection config={ctaConfig} />
        </Box>
      </AnimatedBox>

      <FooterSection config={footerConfig} />
    </main>
  );
}
