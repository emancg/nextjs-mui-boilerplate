'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import RefreshIcon from '@mui/icons-material/Refresh';
import EmailIcon from '@mui/icons-material/Email';

/**
 * Maintenance Component
 *
 * Site maintenance page with optional countdown timer
 *
 * @param {string} title - Maintenance title
 * @param {string} message - Maintenance message
 * @param {Date|string} estimatedTime - Estimated completion time
 * @param {boolean} showProgress - Show loading progress bar
 * @param {string} contactEmail - Support email address
 * @param {boolean} showRefresh - Show refresh button
 */

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.warning.light} 0%, ${theme.palette.warning.main} 100%)`,
  padding: theme.spacing(4),
}));

const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(8, 6),
  textAlign: 'center',
  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  maxWidth: 600,

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 4),
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  animation: 'rotate 3s linear infinite',
  '@keyframes rotate': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  '& svg': {
    fontSize: '6rem',
    color: theme.palette.warning.main,
  },
}));

const CountdownBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
}));

const TimeUnit = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  margin: theme.spacing(0, 2),
  minWidth: 60,
}));

const TimeValue = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: theme.palette.warning.main,
}));

const TimeLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  color: theme.palette.text.secondary,
  textTransform: 'uppercase',
}));

export default function Maintenance({
  title = 'Site Under Maintenance',
  message = "We're currently performing scheduled maintenance to improve your experience. We'll be back shortly!",
  estimatedTime,
  showProgress = true,
  contactEmail,
  showRefresh = true
}) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!estimatedTime) return;

    const targetDate = new Date(estimatedTime).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [estimatedTime]);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <PageContainer>
      <Container maxWidth="sm">
        <ContentBox>
          <IconWrapper>
            <BuildCircleIcon />
          </IconWrapper>

          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, lineHeight: 1.7 }}
          >
            {message}
          </Typography>

          {showProgress && (
            <Box sx={{ mb: 4 }}>
              <LinearProgress
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'grey.200',
                }}
              />
            </Box>
          )}

          {estimatedTime && timeLeft && (
            <CountdownBox>
              <Typography
                variant="overline"
                sx={{ mb: 2, display: 'block', fontWeight: 600 }}
              >
                Estimated Time Remaining
              </Typography>
              <Box>
                <TimeUnit>
                  <TimeValue>{String(timeLeft.hours).padStart(2, '0')}</TimeValue>
                  <TimeLabel>Hours</TimeLabel>
                </TimeUnit>
                <TimeUnit>
                  <TimeValue>{String(timeLeft.minutes).padStart(2, '0')}</TimeValue>
                  <TimeLabel>Minutes</TimeLabel>
                </TimeUnit>
                <TimeUnit>
                  <TimeValue>{String(timeLeft.seconds).padStart(2, '0')}</TimeValue>
                  <TimeLabel>Seconds</TimeLabel>
                </TimeUnit>
              </Box>
            </CountdownBox>
          )}

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mt: 4 }}>
            {showRefresh && (
              <Button
                onClick={handleRefresh}
                variant="contained"
                size="large"
                startIcon={<RefreshIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                }}
              >
                Refresh Page
              </Button>
            )}

            {contactEmail && (
              <Button
                href={`mailto:${contactEmail}`}
                variant="outlined"
                size="large"
                startIcon={<EmailIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                }}
              >
                Contact Support
              </Button>
            )}
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', mt: 4 }}
          >
            Thank you for your patience
          </Typography>
        </ContentBox>
      </Container>
    </PageContainer>
  );
}
