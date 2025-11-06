/**
 * Home Page Configuration - Luxe Studio
 *
 * Defines the composition of sections on the home page
 */

export const homePageConfig = {
  title: "Home - Your Company",
  background: {
    image: null
  },
  sections: [
    {
      id: "hero-section",
      type: 'hero',
      animation: 'fadeIn',
      config: {
        title: "Your company's awesome title",
        subtitle: "Your company's catchy subtitle that highlights key offerings",
        cta: [
          { text: "Explore Services", href: "/services", variant: "contained" },
          { text: "View Portfolio", href: "/portfolio", variant: "outlined" }
        ],
        backgroundImage: "/images/hero-bg.jpg",
        height: "90vh",
        alignment: "center"
      }
    },
    {
      id: "stats-section",
      type: 'stats',
      animation: 'fadeInUp',
      config: {
        title: "Trusted by Industry Leaders",
        stats: [
          { label: "Projects Completed", value: 250, suffix: "+" },
          { label: "Happy Clients", value: 180, suffix: "+" },
          { label: "Team Members", value: 15, suffix: "" },
          { label: "Years Experience", value: 5, suffix: "+" }
        ],
        variant: "default"
      },
      containerProps: {
        sx: { bgcolor: 'background.paper', py: 8 }
      }
    },
    {
      id: "services-section",
      type: 'services',
      animation: 'fadeInUp',
      config: {
        title: "Our Services",
        subtitle: "Your slogan or brief description about services offered",
        services: [
          {
            title: "Sample Service 1",
            description: "Detailed description of Sample Service 1 that highlights its benefits and features.",
            icon: "Psychology"
          },
          {
            title: "Sample Service 2",
            description: "Comprehensive overview of Sample Service 2, explaining how it can add value to clients.",
            icon: "Palette"
          },
          {
            title: "Sample Service 3",
            description: "Insights into Sample Service 3, showcasing its unique selling points and advantages.",
            icon: "TrendingUp"
          }
        ]
      },
      containerProps: {
        sx: { py: 10 }
      }
    },
    {
      id: "features-section",
      type: 'features',
      animation: 'fadeInUp',
      config: {
        title: "Why Choose Your Company",
        subtitle: "Excellence in every detail",
        variant: "icon",
        columns: 3,
        items: [
          {
            icon: "Diamond",
            title: "Premium Quality",
            description: "We deliver nothing less than exceptional results that exceed expectations."
          },
          {
            icon: "Groups",
            title: "Expert Team",
            description: "Our seasoned professionals bring years of industry experience to every project."
          },
          {
            icon: "Speed",
            title: "Timely Delivery",
            description: "We respect your time and consistently meet deadlines without compromising quality."
          },
          {
            icon: "SupportAgent",
            title: "Dedicated Support",
            description: "Personalized attention and ongoing support throughout your journey with us."
          },
          {
            icon: "Security",
            title: "Trusted Partner",
            description: "Built on integrity, transparency, and long-term client relationships."
          },
          {
            icon: "AutoAwesome",
            title: "Innovation",
            description: "Cutting-edge solutions that keep you ahead of the competition."
          }
        ]
      },
      containerProps: {
        sx: { bgcolor: 'background.default', py: 10 }
      }
    },
    {
      id: "testimonials-section",
      type: 'testimonials',
      animation: 'fadeInUp',
      config: {
        title: "What Our Clients Say",
        subtitle: "Testimonials from satisfied partners",
        testimonials: [
          {
            name: "Sarah Anderson",
            role: "CEO, Anderson Enterprises",
            content: "Luxe Studio transformed our brand identity beyond our wildest expectations. Their attention to detail and commitment to excellence is unmatched.",
            rating: 5,
            avatar: "/images/testimonials/sarah.jpg"
          },
          {
            name: "Michael Chen",
            role: "Founder, Chen & Associates",
            content: "Working with Luxe Studio was an absolute pleasure. They understood our vision and delivered results that exceeded our goals.",
            rating: 5,
            avatar: "/images/testimonials/michael.jpg"
          },
          {
            name: "Emily Rodriguez",
            role: "Marketing Director, Rodriguez Group",
            content: "The team at Luxe Studio is professional, creative, and incredibly responsive. They've become an invaluable partner to our business.",
            rating: 5,
            avatar: "/images/testimonials/emily.jpg"
          }
        ],
        variant: "card",
        autoplay: true,
        interval: 5000
      },
      containerProps: {
        sx: { py: 10 }
      }
    },
    {
      id: "logo-grid-section",
      type: 'logoGrid',
      animation: 'fadeInUp',
      config: {
        title: "Trusted by Leading Brands",
        logos: [
          { name: "Company 1", image: "/images/logos/logo1.png", url: "#" },
          { name: "Company 2", image: "/images/logos/logo2.png", url: "#" },
          { name: "Company 3", image: "/images/logos/logo3.png", url: "#" },
          { name: "Company 4", image: "/images/logos/logo4.png", url: "#" },
          { name: "Company 5", image: "/images/logos/logo5.png", url: "#" },
          { name: "Company 6", image: "/images/logos/logo6.png", url: "#" }
        ]
      },
      containerProps: {
        sx: { bgcolor: 'background.paper', py: 8 }
      }
    },
    {
      id: "cta-section",
      type: 'cta',
      animation: 'fadeInUp',
      config: {
        title: "Ready to Elevate Your Brand?",
        subtitle: "Let's create something extraordinary together. Contact us today to discuss your project.",
        cta: [
          { text: "Get Started", href: "/contact", variant: "contained" },
          { text: "View Pricing", href: "/pricing", variant: "outlined" }
        ],
        variant: "gradient"
      },
      containerProps: {
        sx: { py: 10 }
      }
    },
    {
      id: "footer-section",
      type: 'footer',
      animation: 'fadeIn',
      config: {
        companyName: "Your Company Name",
        description: "Leading the industry with innovative solutions and unparalleled service.",
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
              { label: "Sample Service 1", href: "/services" },
              { label: "Sample Service 2", href: "/services" },
              { label: "Sample Service 3", href: "/services" },
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
      }
    }
  ]
};
