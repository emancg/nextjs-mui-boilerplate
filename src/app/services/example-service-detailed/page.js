/**
 * Example Service Detail Page - Extended Info Cards Template (5 Cards)
 *
 * INSTRUCTIONS:
 * - This template shows a service page with multiple feature cards (2+3 layout)
 * - Ideal for services with detailed specifications, pricing tiers, or schedules
 * - Copy this folder and rename from 'example-service-detailed' to your service name
 * - Replace placeholder content with your actual service information
 * - Customize icons from @mui/icons-material (see https://mui.com/material-ui/material-icons/)
 * - Adjust grid layout by changing md values (xs={12} md={6} = 2 columns, md={4} = 3 columns)
 */

'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentsIcon from '@mui/icons-material/Payments';
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

const InfoCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#FFFFFF',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '4px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#F5F5F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
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
              Engaging subtitle that captures the essence of your service
            </Typography>
          </Container>
        </PageHeader>

        {/* Main Content */}
        <ContentSection>
          <Container maxWidth="lg">
            {/* Feature Cards Grid - 2 columns on top, 3 columns on bottom */}
            <Grid container spacing={4} sx={{ mb: 6 }}>
              {/* First Row - 2 cards at 50% width each */}
              <Grid item xs={12} md={6}>
                <InfoCard>
                  <IconWrapper>
                    <DirectionsBoatIcon />
                  </IconWrapper>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1.125rem',
                      color: 'text.primary',
                      mb: 1.5,
                    }}
                  >
                    Feature Title 1
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '1.0625rem',
                      lineHeight: 1.7,
                    }}
                  >
                    Describe a key feature of your service with <strong>emphasis</strong> on important details
                  </Typography>
                </InfoCard>
              </Grid>

              <Grid item xs={12} md={6}>
                <InfoCard>
                  <IconWrapper>
                    <PaymentsIcon />
                  </IconWrapper>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1.125rem',
                      color: 'text.primary',
                      mb: 1.5,
                    }}
                  >
                    Pricing
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    $99
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      mb: 1,
                    }}
                  >
                    per session
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontStyle: 'italic',
                    }}
                  >
                    (prices may vary based on customization)
                  </Typography>
                </InfoCard>
              </Grid>

              {/* Second Row - 3 cards at 33% width each */}
              <Grid item xs={12} md={4}>
                <InfoCard>
                  <IconWrapper>
                    <ScheduleIcon />
                  </IconWrapper>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1.125rem',
                      color: 'text.primary',
                      mb: 1.5,
                    }}
                  >
                    Feature Title 2
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '1.0625rem',
                      lineHeight: 1.7,
                    }}
                  >
                    Add schedule, timing, or availability details with <strong>highlights</strong>
                  </Typography>
                </InfoCard>
              </Grid>

              <Grid item xs={12} md={4}>
                <InfoCard>
                  <IconWrapper>
                    <ScheduleIcon />
                  </IconWrapper>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1.125rem',
                      color: 'text.primary',
                      mb: 1.5,
                    }}
                  >
                    Feature Title 3
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '1.0625rem',
                      lineHeight: 1.7,
                    }}
                  >
                    Include another specification or detail about your service
                  </Typography>
                </InfoCard>
              </Grid>

              <Grid item xs={12} md={4}>
                <InfoCard>
                  <IconWrapper>
                    <AccessTimeIcon />
                  </IconWrapper>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1.125rem',
                      color: 'text.primary',
                      mb: 1.5,
                    }}
                  >
                    Feature Title 4
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '1.0625rem',
                      lineHeight: 1.7,
                    }}
                  >
                    Highlight additional important information or <strong>key benefits</strong> of your service
                  </Typography>
                </InfoCard>
              </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Divider sx={{ mb: 6, borderColor: 'divider' }} />
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                  color: 'text.primary',
                  mb: 3,
                }}
              >
                Ready to get started?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  maxWidth: '700px',
                  margin: '0 auto',
                }}
              >
                Contact us today to book your appointment or learn more about this service.
              </Typography>
            </Box>
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
