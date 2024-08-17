import { Button, createTheme, Grid, ThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843', // Set the primary color to orange
        },
    },
});

export default function Contact() {
    return (
        <ThemeProvider theme={theme}>
            <div className='bg-[#ff9341] p-12'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={9}>
                        <div className='text-white lg:ml-[300px] lg:mt-[70px] max-sm:ml-[10px]'>
                            <h2 className='text-[42px]'>Get in Touch</h2>
                            <p className='mt-4 lg:w-[700px]'>
                                I'm always excited to connect with new people and explore potential collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!
                            </p>
                            <Button
                                sx={{
                                    backgroundColor: "white",
                                    fontWeight: "700",
                                    marginTop: "40px",
                                    borderRadius: "50px",
                                    padding: "10px 20px",
                                    fontSize: "18px",
                                    color: "#FF9843",
                                    '&:hover': {
                                        backgroundColor: "#FF9843",
                                        color: "white",
                                    }
                                }}
                            >
                                Contact Me
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/group-of-university-classmates-standing-together-2762610-2314990.png" alt="Contact" />
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}
