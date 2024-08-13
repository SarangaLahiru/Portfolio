import { DownhillSkiing } from '@mui/icons-material';
import { Box, Button, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Slide.css';
const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843', // Set the primary color to orange
        },
    },
});

export default function Slide() {
    return (
        <ThemeProvider theme={theme}>
            <div className='h-fit bg-gradient-to-br to-[#d3d3d3] from-white lg:px-64 lg:py-8'>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={8} >
                        <div className='content'>
                            <h2 className=' text-[#FF9843]'
                                style={{
                                    fontFamily: '"Poppins", sans-serif',
                                    fontWeight: '400',

                                }}
                            >Hi, I'm </h2>
                            <TypeAnimation
                                sequence={[
                                    'Mary Hardy',
                                    1000,
                                    'Digital Marketing Expert',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '55px', display: 'inline-block', fontFamily: '"Poppins", sans-serif', fontWeight: "800" }}
                                repeat={Infinity}
                            />
                            <p
                                className=' text-[#8c8888] mt-[20px] text-[20px]'
                            >
                                Shot What able cold new the see hold.Friendly as an betrayed formarly me.morning because as to society behaved moment.
                            </p>
                            <Box
                                sx={{
                                    marginTop: "40px",
                                }}
                            >
                                <Button
                                    sx={{
                                        color: 'white',
                                        padding: '10px 20px',
                                        margin: '0px 10px',
                                        backgroundColor: "#FF9843",
                                        borderRadius: "24px",
                                        fontFamily: '"Poppins", sans-serif',
                                        fontSize: "18px"
                                    }}
                                    variant="contained"

                                >
                                    Download
                                </Button>
                                <Button
                                    sx={{
                                        padding: '10px',
                                        margin: '0px 10px', color: '#FF9843',
                                        borderColor: "#FF9843", padding: '10px 20px', borderRadius: "24px",
                                        fontFamily: '"Poppins", sans-serif',
                                        fontSize: "18px"
                                    }}
                                    variant="outlined"
                                    color='primary'
                                >
                                    Sign in
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
                        borderRadius: "100px",
                        padding: '50px 2px',
                        overflow: "hidden",
                        position: "relative",
                        top: "-50px"

                    }}
                >
                    <Grid item xs={12} sm={4} mb={1}>


                        <Grid container spacing={1}

                        >
                            <Grid item xs={12} sm={5}>
                                <div className='flex flex-wrap items-center justify-center lg:ml-[180px]'>
                                    <DownhillSkiing
                                        sx={{
                                            backgroundColor: "#FF9843",
                                            color: "white",
                                            fontSize: "80px",
                                            margin: "10px auto",
                                            borderRadius: "50px",

                                        }}
                                    />
                                </div>

                            </Grid>
                            <Grid item xs={12} sm={7}>

                                <Typography
                                    gutterBottom variant="h5" component="div"
                                    sx={{
                                        fontSize: "40px",
                                        textAlign: "center"
                                    }}
                                >
                                    Lizard
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary"
                                    sx={{
                                        fontSize: "15px",
                                        textAlign: "center"
                                    }}
                                >
                                    Lizards are a widespread group
                                </Typography>


                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={4} mb={1}>


                        <Grid container spacing={1}

                        >
                            <Grid item xs={12} sm={5}>
                                <div className='flex flex-wrap items-center justify-center lg:ml-[180px]'>
                                    <DownhillSkiing
                                        sx={{
                                            backgroundColor: "#FF9843",
                                            color: "white",
                                            fontSize: "80px",
                                            margin: "10px auto",
                                            borderRadius: "50px",

                                        }}
                                    />
                                </div>

                            </Grid>
                            <Grid item xs={12} sm={7}>

                                <Typography
                                    gutterBottom variant="h5" component="div"
                                    sx={{
                                        fontSize: "40px",
                                        textAlign: "center"
                                    }}
                                >
                                    Lizard
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary"
                                    sx={{
                                        fontSize: "15px",
                                        textAlign: "center"
                                    }}
                                >
                                    Lizards are a widespread group
                                </Typography>


                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={4} mb={1}>


                        <Grid container spacing={1}

                        >
                            <Grid item xs={12} sm={5}>
                                <div className='flex flex-wrap items-center justify-center lg:ml-[180px]'>
                                    <DownhillSkiing
                                        sx={{
                                            backgroundColor: "#FF9843",
                                            color: "white",
                                            fontSize: "80px",
                                            margin: "10px auto",
                                            borderRadius: "50px",

                                        }}
                                    />
                                </div>

                            </Grid>
                            <Grid item xs={12} sm={7}>

                                <Typography
                                    gutterBottom variant="h5" component="div"
                                    sx={{
                                        fontSize: "40px",
                                        textAlign: "center"
                                    }}
                                >
                                    Lizard
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary"
                                    sx={{
                                        fontSize: "15px",
                                        textAlign: "center"
                                    }}
                                >
                                    Lizards are a widespread group
                                </Typography>


                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}
