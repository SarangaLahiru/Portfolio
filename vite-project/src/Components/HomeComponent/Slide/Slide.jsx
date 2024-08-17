import { MobileFriendly, SmartToy, Web } from '@mui/icons-material';
import { Box, Button, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Slide.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843',
        },
    },
});

export default function Slide() {
    return (
        <ThemeProvider theme={theme}>
            <div className='h-fit bg-gradient-to-br from-white via-[#f7f7f7] to-[#d3d3d3] lg:px-[78px] lg:py-8'>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={8} >
                        <div className='content'>
                            <h2 className='text-[#FF9843]'
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    fontWeight: '400',
                                }}
                            >
                                Hi, I'm
                            </h2>
                            <TypeAnimation
                                sequence={[
                                    'Sashika Lahiru',
                                    1000,
                                    'Full-Stack Developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{
                                    fontSize: '55px',
                                    display: 'inline-block',
                                    fontFamily: '"Poppins", sans-serif',
                                    fontWeight: '800'
                                }}
                                repeat={Infinity}
                            />
                            <p className='text-[#8c8888] mt-[20px] text-[18px]'>
                                I specialize in crafting dynamic web experiences with expertise in both frontend and backend development. My goal is to deliver innovative solutions that ensure seamless and impactful user interactions.
                            </p>
                            <Box
                                sx={{
                                    marginTop: '40px',
                                }}
                            >
                                <Button
                                    sx={{
                                        color: 'white',
                                        padding: '10px 20px',
                                        margin: '0px 10px',
                                        backgroundColor: '#FF9843',
                                        borderRadius: '24px',
                                        fontFamily: '"Poppins", sans-serif',
                                        fontSize: '18px',
                                        transition: 'background-color 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#FF7843',
                                        }
                                    }}
                                    variant="contained"
                                >
                                    Download CV
                                </Button>
                                <Button
                                    sx={{
                                        padding: '10px',
                                        margin: '0px 10px',
                                        color: '#FF9843',
                                        borderColor: '#FF9843',
                                        padding: '10px 20px',
                                        borderRadius: '24px',
                                        fontFamily: '"Poppins", sans-serif',
                                        fontSize: '18px',
                                        transition: 'border-color 0.3s ease, color 0.3s ease',
                                        '&:hover': {
                                            borderColor: '#FF7843',
                                            color: '#FF7843',
                                        }
                                    }}
                                    variant="outlined"
                                    color='primary'
                                >
                                    Contact Me
                                </Button>
                            </Box>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className='image-container'>
                            <img src="/Images/man-png-30099.png" alt="Man" />
                        </div>
                    </Grid>
                </Grid>
            </div >
            <div className='w-[80%] m-auto'>
                <Grid container spacing={0}
                    sx={{
                        backgroundColor: "white",
                        boxShadow: "0px 0px 30px #ababab",
                        borderRadius: "50px",
                        padding: '30px',
                        overflow: "hidden",
                        position: "relative",
                        top: "-100px"
                    }}
                >
                    <Grid item xs={12} sm={4} mb={1}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item xs={12} sm={12} textAlign="center">
                                <MobileFriendly
                                    sx={{
                                        backgroundColor: "#FF9843",
                                        color: "white",
                                        fontSize: "80px",
                                        margin: "10px auto",
                                        borderRadius: "50px",
                                        padding: '10px',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography
                                    gutterBottom variant="h5" component="div"
                                    sx={{
                                        fontSize: "24px",
                                        textAlign: "center",
                                        marginTop: "20px",
                                    }}
                                >
                                    Mobile Development
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary"
                                    sx={{
                                        fontSize: "15px",
                                        textAlign: "center",
                                        padding: "0px 20px",
                                        marginTop: "10px",
                                    }}
                                >
                                    Building cross-platform apps using Flutter and React Native.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={4} mb={1}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item xs={12} sm={12} textAlign="center">
                                <Web
                                    sx={{
                                        backgroundColor: "#FF9843",
                                        color: "white",
                                        fontSize: "80px",
                                        margin: "10px auto",
                                        borderRadius: "50px",
                                        padding: '10px',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography
                                    gutterBottom variant="h5" component="div"
                                    sx={{
                                        fontSize: "24px",
                                        textAlign: "center",
                                        marginTop: "20px",
                                    }}
                                >
                                    Web Development
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary"
                                    sx={{
                                        fontSize: "15px",
                                        textAlign: "center",
                                        padding: "0px 20px",
                                        marginTop: "10px",
                                    }}
                                >
                                    Developing responsive websites with React, Laravel, and Node.js.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={4} mb={1}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item xs={12} sm={12} textAlign="center">
                                <SmartToy
                                    sx={{
                                        backgroundColor: "#FF9843",
                                        color: "white",
                                        fontSize: "80px",
                                        margin: "10px auto",
                                        borderRadius: "50px",
                                        padding: '10px',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography
                                    gutterBottom variant="h5" component="div"
                                    sx={{
                                        fontSize: "24px",
                                        textAlign: "center",
                                        marginTop: "20px",
                                    }}
                                >
                                    AI & Automation
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary"
                                    sx={{
                                        fontSize: "15px",
                                        textAlign: "center",
                                        padding: "0px 20px",
                                        marginTop: "10px",
                                    }}
                                >
                                    Implementing AI solutions to automate complex tasks.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        </ThemeProvider>
    );
}
