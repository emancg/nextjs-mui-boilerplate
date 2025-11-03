'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Container from '../../utility/Container';
import * as MuiIcons from '@mui/icons-material';

/**
 * Timeline Component
 *
 * Vertical timeline for displaying milestones, roadmap, or history
 *
 * @param {Object} config - Configuration object
 * @param {string} config.title - Section title
 * @param {string} config.subtitle - Section subtitle
 * @param {Array} config.items - Array of timeline items
 * @param {string} config.items[].date - Date or label
 * @param {string} config.items[].title - Item title
 * @param {string} config.items[].description - Item description
 * @param {string} config.items[].icon - MUI icon name
 * @param {string} config.items[].status - Status: 'completed', 'current', 'upcoming'
 * @param {string} config.variant - Variant: 'default', 'alternating'
 * @param {string} config.backgroundColor - Background color
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme, bgcolor }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: bgcolor || 'transparent',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const TimelineContainer = styled(Box)(({ theme, variant }) => ({
  position: 'relative',
  paddingLeft: variant === 'alternating' ? 0 : theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(4),
  },

  '&::before': variant === 'alternating'
    ? {
        content: '""',
        position: 'absolute',
        left: '50%',
        top: 0,
        bottom: 0,
        width: 3,
        backgroundColor: theme.palette.divider,
        [theme.breakpoints.down('md')]: {
          left: theme.spacing(2),
        },
      }
    : {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 3,
        backgroundColor: theme.palette.divider,
      },
}));

const TimelineItem = styled(Box)(({ theme, variant, position, isLast }) => ({
  position: 'relative',
  marginBottom: isLast ? 0 : theme.spacing(6),
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: variant === 'alternating' && position === 'left' ? 'row' : 'row',

  [theme.breakpoints.up('md')]: {
    paddingLeft: variant === 'alternating' ? (position === 'left' ? 0 : '50%') : 0,
    paddingRight: variant === 'alternating' && position === 'left' ? '50%' : 0,
    justifyContent: variant === 'alternating' && position === 'left' ? 'flex-end' : 'flex-start',
  },

  [theme.breakpoints.down('md')]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const IconBox = styled(Box)(({ theme, status }) => {
  const colors = {
    completed: theme.palette.success.main,
    current: theme.palette.primary.main,
    upcoming: theme.palette.grey[400],
  };

  return {
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: 'white',
    border: `3px solid ${colors[status] || colors.upcoming}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    position: 'relative',
    zIndex: 1,
    marginRight: theme.spacing(3),

    '& svg': {
      fontSize: '1.5rem',
      color: colors[status] || colors.upcoming,
    },
  };
});

const ContentBox = styled(Box)(({ theme, status }) => ({
  flex: 1,
  padding: theme.spacing(3),
  backgroundColor: status === 'current' ? theme.palette.primary.light : 'white',
  borderRadius: theme.spacing(2),
  border: `2px solid ${status === 'current' ? theme.palette.primary.main : theme.palette.divider}`,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',

  '&:hover': {
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
    transform: 'translateY(-2px)',
  },
}));

const DateLabel = styled(Typography)(({ theme, status }) => ({
  fontSize: '0.875rem',
  fontWeight: 700,
  color: status === 'completed' ? theme.palette.success.main : status === 'current' ? theme.palette.primary.main : theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  textTransform: 'uppercase',
  letterSpacing: 1,
}));

const StatusBadge = styled(Box)(({ theme, status }) => {
  const colors = {
    completed: { bg: theme.palette.success.light, text: theme.palette.success.dark },
    current: { bg: theme.palette.primary.light, text: theme.palette.primary.dark },
    upcoming: { bg: theme.palette.grey[200], text: theme.palette.text.secondary },
  };

  const color = colors[status] || colors.upcoming;

  return {
    display: 'inline-block',
    padding: theme.spacing(0.5, 1.5),
    borderRadius: theme.spacing(3),
    backgroundColor: color.bg,
    color: color.text,
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    marginLeft: theme.spacing(1),
  };
});

export default function Timeline({ config, sx = {} }) {
  if (!config || !config.items || config.items.length === 0) {
    return null;
  }

  const {
    title,
    subtitle,
    items,
    variant = 'default',
    backgroundColor,
  } = config;

  return (
    <SectionContainer bgcolor={backgroundColor} sx={sx}>
      <Container maxWidth="lg">
        {subtitle && (
          <Typography
            variant="overline"
            align="center"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: 1.5,
              display: 'block',
              marginBottom: 1,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {title && (
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            {title}
          </Typography>
        )}

        <TimelineContainer variant={variant}>
          {items.map((item, index) => {
            const IconComponent = item.icon && MuiIcons[item.icon]
              ? MuiIcons[item.icon]
              : MuiIcons.Circle;

            const position = variant === 'alternating' && index % 2 === 0 ? 'left' : 'right';

            return (
              <TimelineItem
                key={index}
                variant={variant}
                position={position}
                isLast={index === items.length - 1}
              >
                <IconBox status={item.status}>
                  <IconComponent />
                </IconBox>

                <ContentBox status={item.status}>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', mb: 1 }}>
                    <DateLabel status={item.status}>
                      {item.date}
                    </DateLabel>
                    {item.status && (
                      <StatusBadge status={item.status}>
                        {item.status}
                      </StatusBadge>
                    )}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {item.description}
                  </Typography>
                </ContentBox>
              </TimelineItem>
            );
          })}
        </TimelineContainer>
      </Container>
    </SectionContainer>
  );
}
