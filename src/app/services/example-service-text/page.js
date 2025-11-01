/**
 * Example Service Detail Page - Text-Heavy Template
 *
 * INSTRUCTIONS:
 * - This template is ideal for services that need detailed text descriptions
 * - Copy this folder and rename from 'example-service-text' to your service name (e.g., 'photography', 'consulting')
 * - Replace all placeholder content with your actual service information
 * - Add or remove sections as needed for your service
 * - Update images and styling to match your brand
 */

'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from 'next/link';
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
              A compelling subtitle that describes your service offering
            </Typography>
          </Container>
        </PageHeader>

        {/* Main Content */}
        <ContentSection>
          <Container maxWidth="md">
            <SectionTitle variant="h2">
              What is this service about?
            </SectionTitle>
            <BodyText>
              Write a detailed description of your service here. Explain what makes it unique, the value it provides, and what clients can expect. This is your opportunity to showcase your expertise and build trust with potential customers. Replace this text with your actual service description.
            </BodyText>

            <Divider sx={{ my: 4, borderColor: 'divider' }} />

            <SectionTitle variant="h2">
              Key Features
            </SectionTitle>
            <BodyText>
              Describe the main features or highlights of your service. What will clients experience? What makes your offering special?
            </BodyText>

            {/* Optional: Add an image showcase */}
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <Link target="_blank" href="/your-image.png">
                <Box sx={{
                  maxWidth: '360px',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <Image
                    height={900}
                    width={360}
                    src="/your-image.png"
                    alt="service details"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Box>
              </Link>
            </Box>

            <SectionTitle variant="h2">
              What's Included
            </SectionTitle>
            <BodyText>
              List everything that's included in your service package. Be specific and clear about what clients will receive.
            </BodyText>
            <BodyText>
              • Feature or benefit 1
            </BodyText>
            <BodyText>
              • Feature or benefit 2
            </BodyText>
            <BodyText>
              • Feature or benefit 3
            </BodyText>

            <SectionTitle variant="h2">
              What You'll Need
            </SectionTitle>
            <BodyText>
              <strong>Item 1:</strong> Describe what clients should bring or prepare for this service.
            </BodyText>
            <BodyText>
              <strong>Item 2:</strong> Include any requirements or recommendations.
            </BodyText>
            <BodyText>
              <strong>Item 3:</strong> Add more items as needed for your specific service.
            </BodyText>

            <SectionTitle variant="h2">
              Preparation Tips
            </SectionTitle>
            <BodyText>
              <strong>Tip 1:</strong> Provide helpful advice on how clients can prepare for your service.
            </BodyText>
            <BodyText>
              <strong>Tip 2:</strong> Share insights that will enhance their experience.
            </BodyText>
            <BodyText>
              Add any additional preparation information here to help clients get the most out of your service.
            </BodyText>

            <Divider sx={{ my: 4, borderColor: 'divider' }} />

            <SectionTitle variant="h2" sx={{ textAlign: 'center' }}>
              Ready to get started?
            </SectionTitle>
            <BodyText sx={{ textAlign: 'center' }}>
              Contact us to learn more or to book this service. We're here to help!
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
            {/* hiddenItem prop: Set to the index of this service to hide it from the list (e.g., 0, 1, 2, etc.) */}
            <ServicesSection config={servicesConfig} hiddenItem={0} />
          </Container>
        </Box>

        {/* Footer */}
        <FooterSection config={footerConfig} />
      </PageContainer>
    </main>
  );
}
