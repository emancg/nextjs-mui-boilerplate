'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import BlogCard from '../BlogCard';
import Container from '../../utility/Container';

/**
 * BlogGrid Component
 *
 * Grid display of blog posts with optional category filtering and pagination
 *
 * @param {Object} config - Blog grid configuration
 * @param {string} config.title - Section title
 * @param {Array} config.posts - Array of blog post objects
 * @param {number} config.columns - Number of columns (2, 3, or 4)
 * @param {boolean} config.showFilters - Show category filters
 * @param {Array} config.categories - Available categories for filtering
 * @param {string} config.variant - Card variant: 'card', 'list', 'minimal'
 * @param {boolean} config.showPagination - Show pagination controls
 * @param {number} config.postsPerPage - Number of posts per page (default: 9)
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const FilterTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(6),
}));

export default function BlogGrid({ config, sx = {} }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  if (!config || !config.posts || config.posts.length === 0) {
    return null;
  }

  const {
    title = 'Latest Articles',
    posts,
    columns = 3,
    showFilters = false,
    categories = [],
    variant = 'card',
    showPagination = false,
    postsPerPage = 9,
  } = config;

  // Extract categories from posts if not provided
  const allCategories = categories.length > 0
    ? categories
    : [...new Set(posts.map(post => post.category).filter(Boolean))];

  // Filter posts by category
  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = showPagination
    ? filteredPosts.slice(startIndex, endIndex)
    : filteredPosts;

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
    setCurrentPage(1); // Reset to first page on category change
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    // Scroll to top of blog grid
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine grid columns based on config
  const gridColumns = {
    xs: 12,
    sm: columns >= 3 ? 6 : 12,
    md: columns === 4 ? 3 : columns === 3 ? 4 : 6,
  };

  return (
    <SectionContainer sx={sx}>
      <Container maxWidth="lg">
        {title && (
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 700, marginBottom: 4 }}
          >
            {title}
          </Typography>
        )}

        {showFilters && allCategories.length > 0 && (
          <FilterTabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="blog category filters"
          >
            <Tab label="All" value="all" />
            {allCategories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </FilterTabs>
        )}

        {filteredPosts.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No posts found in this category.
            </Typography>
          </Box>
        ) : variant === 'list' ? (
          <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {paginatedPosts.map((post, index) => (
                <BlogCard key={post.slug || index} post={post} variant="list" />
              ))}
            </Box>
            {showPagination && totalPages > 1 && (
              <PaginationContainer>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                  showFirstButton
                  showLastButton
                />
              </PaginationContainer>
            )}
          </>
        ) : (
          <>
            <Grid container spacing={4}>
              {paginatedPosts.map((post, index) => (
                <Grid item {...gridColumns} key={post.slug || index}>
                  <BlogCard post={post} variant={variant} />
                </Grid>
              ))}
            </Grid>
            {showPagination && totalPages > 1 && (
              <PaginationContainer>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                  showFirstButton
                  showLastButton
                />
              </PaginationContainer>
            )}
          </>
        )}
      </Container>
    </SectionContainer>
  );
}
