/**
 * Example Service Detail Page - Multi-Package Template
 *
 * INSTRUCTIONS:
 * - This template is ideal for services with multiple packages, tiers, or options
 * - Great for detailed service breakdowns with different pricing levels
 * - Copy this folder and rename from 'example-service-packages' to your service name
 * - Replace placeholder content with your actual service information
 * - Add or remove sections, subsections as needed
 * - Use SectionTitle for main headings, SubSectionTitle for sub-headings, and BodyText for content
 */

'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { FooterSection, ServicesSection } from '@/lib/components';
import { footerConfig } from '../../../../content/sections/footer.config';
import { servicesConfig } from '../../../../content/sections/services.config';

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  width: '100%',
}));

const PageHeader = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  padding: theme.spacing(12, 2),
  textAlign: 'center',
  marginTop: theme.spacing(8),
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 2),
    marginTop: theme.spacing(7),
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(6),
}));

const SubSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

const BodyText = styled(Typography)(({ theme }) => ({
  fontSize: '1.0625rem',
  lineHeight: 1.7,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2.5),
}));

export default function ServiceDetailPage() {
  return (
    <main>
      <PageContainer>
        {/* Page Header */}
        <PageHeader>
          <Container maxWidth="lg">
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: 'text.primary',
                marginBottom: 2,
              }}
            >
              YOUR SERVICE NAME
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: 'text.secondary',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              A captivating subtitle that draws in your audience
            </Typography>
          </Container>
        </PageHeader>

        {/* Main Content */}
        <ContentSection>
          <Container maxWidth="md">
            <SectionTitle variant="h2">
              What makes this service special?
            </SectionTitle>
            <BodyText>
              Write an engaging introduction to your service here. This is your opportunity to connect with potential clients and explain the unique value you provide. Describe the experience, benefits, and what sets your service apart from competitors. Make it personal and compelling.
            </BodyText>

            <Divider sx={{ my: 4, borderColor: 'divider' }} />

            <SectionTitle variant="h2">
              Service Options & Packages
            </SectionTitle>
            <BodyText>
              If you offer multiple tiers, packages, or variations of your service, introduce them here. Explain how clients can choose the option that best fits their needs.
            </BodyText>

            <SubSectionTitle variant="h3">
              Package Option 1
            </SubSectionTitle>
            <BodyText>
              Describe your first service package or option in detail. Include what's included, the duration, pricing, and any special features. Use <strong>bold text</strong> to emphasize key points like pricing or unique features.
            </BodyText>
            <BodyText>
              Add additional details about specific features, deliverables, or what clients can expect with <strong>this package option</strong>.
            </BodyText>

            <SubSectionTitle variant="h3">
              Package Option 2
            </SubSectionTitle>
            <BodyText>
              Describe your second service package or option. Explain how it differs from the first option and what makes it valuable.
            </BodyText>
            <BodyText>
              Include pricing information like <strong>$199</strong> or other important specifications.
            </BodyText>
            <BodyText>
              List what's included or any locations, features, or benefits with <strong>clear emphasis on key details</strong>.
            </BodyText>

            <SubSectionTitle variant="h3">
              Package Option 3
            </SubSectionTitle>
            <BodyText>
              Continue describing additional packages or service variations. Keep the format consistent for easy scanning.
            </BodyText>
            <BodyText>
              Highlight the price point like <strong>$299</strong> and what makes this option attractive.
            </BodyText>
            <BodyText>
              Mention specific features, deliverables, or destinations with <strong>emphasis where appropriate</strong>.
            </BodyText>

            <SubSectionTitle variant="h3">
              Package Option 4
            </SubSectionTitle>
            <BodyText>
              Add as many package options as needed for your service. Each subsection should clearly explain what the package includes and its value proposition.
            </BodyText>
            <BodyText>
              Include pricing such as <strong>$399</strong> and any unique selling points.
            </BodyText>

            {/* Optional: Important Notice Box */}
            <Box sx={{
              mt: 4,
              p: 3,
              backgroundColor: '#F5F5F5',
              borderRadius: '4px',
              border: '1px solid',
              borderColor: 'divider'
            }}>
              <BodyText sx={{ mb: 0, fontStyle: 'italic' }}>
                <strong>Important Note:</strong> Use this styled box to highlight important information, terms and conditions, special notices, or disclaimers that clients should be aware of before booking your service.
              </BodyText>
            </Box>

            <Divider sx={{ my: 4, borderColor: 'divider' }} />

            <SectionTitle variant="h2" sx={{ textAlign: 'center' }}>
              Ready to get started?
            </SectionTitle>
            <BodyText sx={{ textAlign: 'center' }}>
              Contact us today to discuss your needs and book this service. We look forward to working with you!
            </BodyText>
          </Container>
        </ContentSection>

        {/* Other Services */}
        <Box sx={{ backgroundColor: '#F5F5F5', py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                textAlign: 'center',
                mb: 6,
              }}
            >
              SEE MORE OF OUR SERVICES
            </Typography>
            {/* hiddenItem prop: Set to the index of this service to hide it from the list */}
            <ServicesSection config={servicesConfig} hiddenItem={0} />
          </Container>
        </Box>

        {/* Footer */}
        <FooterSection config={footerConfig} />
      </PageContainer>
    </main>
  );
}
