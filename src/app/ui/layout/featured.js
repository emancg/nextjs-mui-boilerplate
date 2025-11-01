'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

export default function FeaturedItems(props) {

    const items = props;
    const itemCount = props.length;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            </Grid>
        </Box>
    );
}