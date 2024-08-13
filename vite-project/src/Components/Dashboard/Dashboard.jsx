import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';


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


        </ThemeProvider>
    )
}
