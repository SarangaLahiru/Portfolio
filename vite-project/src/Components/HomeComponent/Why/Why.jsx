import { Box, createTheme, Grid, LinearProgress, linearProgressClasses, styled, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843', // Set the primary color to orange
        },
    },
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#FF9843' : '#308fe8',
    },
}));

export default function Why() {
    return (
        <ThemeProvider theme={theme}>
            <div className='p-12 bg-[#fafafa]'>
                <Typography variant="body1" color="initial"
                    sx={{
                        color: "#FF9843",
                        fontSize: "30px",
                        fontFamily: '"Poppins", sans-serif',
                        textAlign: "center"
                    }}
                >
                    WHy Choose Him

                </Typography>
                <Typography variant="body1" color="initial"
                    sx={{

                        fontSize: "40px",
                        fontFamily: '"Poppins", sans-serif',
                        textAlign: "center",
                        fontWeight: "700"
                    }}
                >
                    My Expertise Area

                </Typography>
                <Box
                    sx={{

                        padding: "30px 0px"
                    }}
                >
                    <div className='w-[70%] m-auto'>
                        <Grid container spacing={4} >
                            <Grid item xs={12} sm={6}

                            >

                                <Box sx={{

                                    margin: "15px 10px",
                                }}>
                                    <h2 className=' text-xl p-2'>Facebook Marketing</h2>
                                    <BorderLinearProgress variant="determinate" value={50} />

                                    <Typography variant="body2" color="textSecondary">50%</Typography>

                                </Box>
                                <Box sx={{

                                    margin: "15px 10px",
                                }}>
                                    <h2 className=' text-xl p-2'>Facebook Marketing</h2>
                                    <BorderLinearProgress variant="determinate" value={50} />

                                    <Typography variant="body2" color="textSecondary">50%</Typography>

                                </Box>
                                <Box sx={{

                                    margin: "15px 10px",
                                }}>
                                    <h2 className=' text-xl p-2'>Facebook Marketing</h2>
                                    <BorderLinearProgress variant="determinate" value={50} />

                                    <Typography variant="body2" color="textSecondary">50%</Typography>

                                </Box>
                                <Box sx={{

                                    margin: "15px 10px",
                                }}>
                                    <h2 className=' text-xl p-2'>Facebook Marketing</h2>
                                    <BorderLinearProgress variant="determinate" value={50} />

                                    <Typography variant="body2" color="textSecondary">50%</Typography>

                                </Box>



                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{

                                    margin: "15px 10px",
                                }}>
                                    <h2 className=' text-xl p-2'>Facebook Marketing</h2>
                                    <BorderLinearProgress variant="determinate" value={50} />

                                    <Typography variant="body2" color="textSecondary">50%</Typography>

                                </Box>
                                <Box sx={{

                                    margin: "15px 10px",
                                }}>
                                    <h2 className=' text-xl p-2'>Facebook Marketing</h2>
                                    <BorderLinearProgress variant="determinate" value={50} />

                                    <Typography variant="body2" color="textSecondary">50%</Typography>

                                </Box>
                                <Box sx={{

                                    margin: "15px 10px",
                                }}>
                                    <h2 className=' text-xl p-2'>Facebook Marketing</h2>
                                    <BorderLinearProgress variant="determinate" value={50} />

                                    <Typography variant="body2" color="textSecondary">50%</Typography>

                                </Box>
                                <Box sx={{

                                    margin: "15px 10px",
                                }}>
                                    <h2 className=' text-xl p-2'>Facebook Marketing</h2>
                                    <BorderLinearProgress variant="determinate" value={50} />

                                    <Typography variant="body2" color="textSecondary">50%</Typography>

                                </Box>
                            </Grid>

                        </Grid>
                    </div>
                </Box>


            </div>
        </ThemeProvider>

    )
}
