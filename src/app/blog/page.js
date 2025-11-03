'use client';

import Box from '@mui/material/Box';
import AnimatedBox from '@/lib/animations/AnimatedBox';
import HeroSection from '@/lib/components/hero/HeroSection';
import BlogGrid from '@/lib/components/blog/BlogGrid';
import NewsletterSignup from '@/lib/components/forms/NewsletterSignup';
import FooterSection from '@/lib/components/navigation/FooterSection';

export default function BlogPage() {
  const heroConfig = {
    title: "Insights & Ideas",
    subtitle: "Thoughts on design, strategy, and building successful brands",
    height: "60vh",
    alignment: "center"
  };

  const blogConfig = {
    title: "Latest Articles",
    subtitle: "Expert insights from the Luxe Studio team",
    posts: [
      {
        title: "The Art of Timeless Brand Design",
        excerpt: "Discover the principles behind creating brand identities that remain relevant for decades, not just seasons.",
        author: "Alexandra Sterling",
        date: "2024-01-15",
        category: "Branding",
        image: "/images/blog/post1.jpg",
        slug: "art-of-timeless-brand-design"
      },
      {
        title: "Strategic Consulting in the Digital Age",
        excerpt: "How traditional consulting adapts to meet the challenges of rapidly evolving digital landscapes.",
        author: "Marcus Chen",
        date: "2024-01-12",
        category: "Strategy",
        image: "/images/blog/post2.jpg",
        slug: "strategic-consulting-digital-age"
      },
      {
        title: "Color Psychology in Luxury Branding",
        excerpt: "Understanding how color choices influence perception and create emotional connections with your audience.",
        author: "Isabella Rodriguez",
        date: "2024-01-08",
        category: "Design",
        image: "/images/blog/post3.jpg",
        slug: "color-psychology-luxury-branding"
      },
      {
        title: "Building Trust Through Brand Consistency",
        excerpt: "Why maintaining brand consistency across all touchpoints is crucial for establishing credibility.",
        author: "Sophia Laurent",
        date: "2024-01-05",
        category: "Branding",
        image: "/images/blog/post4.jpg",
        slug: "building-trust-brand-consistency"
      },
      {
        title: "The Future of Digital Experiences",
        excerpt: "Exploring emerging trends in web design and digital interaction that will shape the next decade.",
        author: "David Park",
        date: "2024-01-02",
        category: "Technology",
        image: "/images/blog/post5.jpg",
        slug: "future-digital-experiences"
      },
      {
        title: "Measuring ROI in Brand Investments",
        excerpt: "Practical frameworks for tracking the impact of brand initiatives on business performance.",
        author: "James Morrison",
        date: "2023-12-28",
        category: "Strategy",
        image: "/images/blog/post6.jpg",
        slug: "measuring-roi-brand-investments"
      }
    ],
    postsPerPage: 6,
    variant: "card"
  };

  const newsletterConfig = {
    title: "Stay Informed",
    description: "Subscribe to receive our latest insights, case studies, and industry news directly in your inbox.",
    variant: "inline"
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
          <BlogGrid config={blogConfig} />
        </Box>
      </AnimatedBox>

      <AnimatedBox variant="fadeInUp" delay={0.2}>
        <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
          <Box sx={{ maxWidth: '800px', mx: 'auto', px: 3 }}>
            <NewsletterSignup config={newsletterConfig} />
          </Box>
        </Box>
      </AnimatedBox>

      <FooterSection config={footerConfig} />
    </main>
  );
}
