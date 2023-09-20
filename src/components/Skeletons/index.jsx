import { Container, Skeleton } from '@mui/material';
import React from 'react';

export const Skeletons = () => {
    return (
        <Container maxWidth="xl">
            <Skeleton variant="rounded" width="100%" height={292} sx={{margin:"1em"}}/>
            <Skeleton variant="rounded" width="100%" height={292} sx={{margin:"1em"}}/>
            <Skeleton variant="rounded" width="100%" height={292} sx={{margin:"1em"}}/>
            <Skeleton variant="rounded" width="100%" height={292} sx={{margin:"1em"}}/>
            <Skeleton variant="rounded" width="100%" height={292} sx={{margin:"1em"}}/>
        </Container>
    );
};