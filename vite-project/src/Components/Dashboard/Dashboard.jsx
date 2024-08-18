// src/pages/Dashboard.js
import { Container, Grid, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import FeedbackDisplay from './Components/FeedbackDisplay';
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
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
                    User Dashboard
                </Typography>
                <Grid container spacing={4}>
                    {/* Order Form and Orders Dashboard */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Submit Your Order
                            </Typography>
                            <OrderForm />
                        </Paper>
                        <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Your Orders
                            </Typography>
                            <OrdersDashboard />
                        </Paper>
                    </Grid>

                    {/* Feedback Form and Feedback Display */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Submit Feedback
                            </Typography>
                            <FeedbackForm />
                        </Paper>
                        <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                User Feedbacks
                            </Typography>
                            <FeedbackDisplay />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
