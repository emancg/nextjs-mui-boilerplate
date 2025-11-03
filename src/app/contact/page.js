'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AnimatedBox from '@/lib/animations/AnimatedBox';
import HeroSection from '@/lib/components/hero/HeroSection';
import ContactForm from '@/lib/components/forms/ContactForm';
import NewsletterSignup from '@/lib/components/forms/NewsletterSignup';
import Container from '@/lib/components/utility/Container';
import FooterSection from '@/lib/components/navigation/FooterSection';

const contactHeroConfig = {
  title: "Get In Touch",
  subtitle: "Have a project in mind? We'd love to hear from you. Let's create something extraordinary together.",
  cta: [
    { text: "Call Us", href: "tel:+15551234567", variant: "outlined" }
  ],
  height: "60vh",
  alignment: "center"
};

const contactFormConfig = {
  title: "Send Us a Message",
  description: "Fill out the form below and our team will get back to you within 24 hours.",
  showSubject: true,
  variant: "default",
};

const newsletterConfig = {
  title: "Stay Informed",
  description: "Subscribe to our newsletter for design insights, industry trends, and exclusive updates.",
  variant: "inline",
};

const ContactInfoCard = ({ icon: Icon, title, content }) => (
  <Box
    sx={{
      textAlign: 'center',
      p: 4,
      borderRadius: '4px',
      backgroundColor: '#FFFFFF',
      border: '1px solid',
      borderColor: 'divider',
      height: '100%',
    }}
  >
    <Box
      sx={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        mb: 3,
      }}
    >
      <Icon sx={{ fontSize: '2rem', color: 'primary.main' }} />
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, fontSize: '1.125rem' }}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9375rem' }}>
      {content}
    </Typography>
  </Box>
);

export default function ContactPage() {
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
      {/* Hero Section */}
      <AnimatedBox variant="fadeIn">
        <Box sx={{ mt: 8 }}>
          <HeroSection config={contactHeroConfig} />
        </Box>
      </AnimatedBox>

      {/* Contact Information Cards */}
      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.paper' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <ContactInfoCard
                  icon={EmailIcon}
                  title="Email Us"
                  content="hello@luxestudio.com"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <ContactInfoCard
                  icon={PhoneIcon}
                  title="Call Us"
                  content="+1 (555) 123-4567"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <ContactInfoCard
                  icon={LocationOnIcon}
                  title="Visit Us"
                  content="123 Madison Avenue, New York, NY 10016"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </AnimatedBox>

      {/* Contact Form Section */}
      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
          <Container maxWidth="md">
            <ContactForm config={contactFormConfig} />
          </Container>
        </Box>
      </AnimatedBox>

      {/* Newsletter Section */}
      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
          <Container maxWidth="md">
            <NewsletterSignup config={newsletterConfig} />
          </Container>
        </Box>
      </AnimatedBox>

      <FooterSection config={footerConfig} />
    </main>
  );
}
