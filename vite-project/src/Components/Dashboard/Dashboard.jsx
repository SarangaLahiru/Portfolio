// src/pages/Dashboard.js
import { Container, Grid, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useMemo } from 'react';
import { useAuth } from '../../AuthData';
import Home from '../../Pages/Home';
import FeedbackForm from './Components/FeedbackForm';
import OrderForm from './Components/OrderForm';
import OrdersDashboard from './Components/OrdersDashboard';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843', // Set the primary color to orange
        },
    },
});

export default function Dashboard() {
    const { user } = useAuth();

    // Memoize the content to avoid unnecessary re-renders
    const dashboardContent = useMemo(() => (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
                    User Dashboard
                </Typography>
                <Grid container spacing={4}>
                    {/* Orders Dashboard and Order Form */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                            <OrdersDashboard />
                        </Paper>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <OrderForm />
                        </Paper>
                    </Grid>

                    {/* Feedback Form */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <FeedbackForm />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    ), [user]);

    // If the user is not authenticated, redirect to the Home page
    if (!user) {
        return <Home />;
    }

    return dashboardContent;
}
