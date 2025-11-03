'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';

/**
 * NotFound Component
 *
 * 404 error page with MUI theming
 *
 * @param {string} title - Error title
 * @param {string} message - Error message
 * @param {Object} action - Custom action button config
 * @param {string} action.text - Button text
 * @param {string} action.href - Button link
 */

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
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
  '& svg': {
    fontSize: '6rem',
    color: theme.palette.error.main,
  },
}));

const ErrorCode = styled(Typography)(({ theme }) => ({
  fontSize: '8rem',
  fontWeight: 900,
  lineHeight: 1,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    fontSize: '6rem',
  },
}));

export default function NotFound({
  title = 'Page Not Found',
  message = "Oops! The page you're looking for doesn't exist. It might have been moved or deleted.",
  action
}) {
  return (
    <PageContainer>
      <Container maxWidth="sm">
        <ContentBox>
          <IconWrapper>
            <ErrorOutlineIcon />
          </IconWrapper>

          <ErrorCode variant="h1">404</ErrorCode>

          <Typography
            variant="h4"
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

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              href="/"
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              Go Home
            </Button>

            {action && (
              <Button
                component={Link}
                href={action.href}
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                }}
              >
                {action.text}
              </Button>
            )}
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', mt: 4 }}
          >
            Error Code: 404 - Not Found
          </Typography>
        </ContentBox>
      </Container>
    </PageContainer>
  );
}
