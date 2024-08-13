import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, Link, Typography } from '@mui/material';
import React from 'react';

export default function Fbar() {
    return (
        <Box sx={{
            bgcolor: 'primary.main', color: 'white', py: 4,
            backgroundColor: "#FF9843",
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Company
                        </Typography>
                        <Typography variant="body2">
                            123 Street Name, City, State, 12345
                        </Typography>
                        <Typography variant="body2">
                            Email: info@company.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="#" color="inherit" variant="body2" display="block">
                            About Us
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block">
                            Services
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block">
                            Contact
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <IconButton color="inherit" href="https://www.facebook.com" target="_blank">
                            <Facebook />
                        </IconButton>
                        <IconButton color="inherit" href="https://www.twitter.com" target="_blank">
                            <Twitter />
                        </IconButton>
                        <IconButton color="inherit" href="https://www.instagram.com" target="_blank">
                            <Instagram />
                        </IconButton>
                        <IconButton color="inherit" href="https://www.linkedin.com" target="_blank">
                            <LinkedIn />
                        </IconButton>
                    </Grid>
                </Grid>

                <Box mt={4} textAlign="center">
                    <Typography variant="body2" color="inherit">
                        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
