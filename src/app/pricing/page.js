'use client';

import Box from '@mui/material/Box';
import AnimatedBox from '@/lib/animations/AnimatedBox';
import HeroSection from '@/lib/components/hero/HeroSection';
import PricingTable from '@/lib/components/pricing/PricingTable';
import FAQAccordion from '@/lib/components/faq/FAQAccordion';
import CallToActionSection from '@/lib/components/content/CallToActionSection';
import FooterSection from '@/lib/components/navigation/FooterSection';

export default function PricingPage() {
  const heroConfig = {
    title: "Transparent Pricing",
    subtitle: "Choose the perfect plan for your needs. All plans include our signature attention to detail.",
    cta: [
      { text: "Get Custom Quote", href: "/contact", variant: "outlined" }
    ],
    height: "60vh",
    alignment: "center"
  };

  const pricingConfig = {
    title: "Our Packages",
    subtitle: "Flexible solutions for businesses of all sizes",
    plans: [
      {
        name: "Essential",
        price: 2500,
        period: "project",
        description: "Perfect for small businesses and startups",
        features: [
          "Brand Identity Design",
          "Logo & Visual Assets",
          "Brand Guidelines (Basic)",
          "2 Rounds of Revisions",
          "30 Days Support",
          "Source Files Included"
        ],
        cta: { text: "Get Started", href: "/contact?plan=essential" },
        highlighted: false
      },
      {
        name: "Professional",
        price: 5000,
        period: "project",
        description: "Ideal for growing businesses",
        features: [
          "Everything in Essential",
          "Complete Brand Strategy",
          "Marketing Collateral Design",
          "Website Design (5 pages)",
          "4 Rounds of Revisions",
          "90 Days Support",
          "Priority Email Support"
        ],
        cta: { text: "Get Started", href: "/contact?plan=professional" },
        highlighted: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "quote",
        description: "For large organizations with complex needs",
        features: [
          "Everything in Professional",
          "Full Brand Architecture",
          "Unlimited Revisions",
          "Custom Digital Solutions",
          "Dedicated Account Manager",
          "12 Months Support",
          "24/7 Priority Support",
          "Training & Documentation"
        ],
        cta: { text: "Contact Sales", href: "/contact?plan=enterprise" },
        highlighted: false
      }
    ]
  };

  const faqConfig = {
    title: "Frequently Asked Questions",
    subtitle: "Have questions? We're here to help",
    faqs: [
      {
        question: "What's included in the pricing?",
        answer: "All our packages include strategy, design, revisions, and support. The specific deliverables vary by plancheck the features list for each package to see what's included."
      },
      {
        question: "Can I upgrade my plan later?",
        answer: "Absolutely! You can upgrade your plan at any time. We'll credit your previous payment toward the upgraded package."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans for projects over $5,000. Contact us to discuss options that work for your budget."
      },
      {
        question: "What if I need something custom?",
        answer: "We love custom projects! Contact us with your specific requirements, and we'll create a tailored proposal and quote for your unique needs."
      },
      {
        question: "How long does a typical project take?",
        answer: "Essential projects typically take 4-6 weeks, Professional projects 8-12 weeks, and Enterprise projects vary based on scope. We'll provide a detailed timeline during our initial consultation."
      },
      {
        question: "What's your refund policy?",
        answer: "We offer a satisfaction guarantee. If you're not happy with the initial concepts, we'll refund your deposit minus the strategy phase costs. Once you approve designs, all sales are final."
      }
    ]
  };

  const ctaConfig = {
    title: "Ready to Get Started?",
    subtitle: "Let's discuss which plan is right for your business",
    cta: [
      { text: "Schedule Consultation", href: "/contact", variant: "contained" },
      { text: "View Our Work", href: "/portfolio", variant: "outlined" }
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
          <PricingTable config={pricingConfig} />
        </Box>
      </AnimatedBox>

      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
          <FAQAccordion config={faqConfig} />
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
