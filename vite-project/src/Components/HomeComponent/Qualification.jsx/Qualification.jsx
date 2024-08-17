import { CalendarMonth, School, Work } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function Qualification() {
    return (
        <div className='p-4'>
            <Typography variant="body1" color="initial"
                sx={{
                    color: "#FF9843",
                    fontSize: "30px",
                    fontFamily: '"Poppins", sans-serif',
                    textAlign: "center"
                }}
            >
                My Qualifications
            </Typography>
            <Typography variant="body1" color="initial"
                sx={{
                    fontSize: "40px",
                    fontFamily: '"Poppins", sans-serif',
                    textAlign: "center",
                    fontWeight: "700"
                }}
            >
                My Journey
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <div className='m-auto lg:ml-72 mt-10'>
                        <div className='m-auto flex lg:w-52'>
                            <School sx={{
                                margin: '5px',
                                fontSize: '50px'
                            }} />
                            <Typography variant="body1" color="initial"
                                sx={{
                                    margin: '5px',
                                    fontSize: '30px'
                                }}
                            >
                                Education
                            </Typography>
                        </div>
                        <div>
                            <Box sx={{
                                padding: "20px 50px",
                                borderLeft: '2px #eca013 solid',
                                margin: "20px 0px"
                            }}>
                                <Typography variant="body1" color="initial"
                                    sx={{ fontSize: '20px' }}
                                >
                                    Kekirawa Central College
                                </Typography>
                                <Typography className='text-[#787878]'>High School</Typography>
                                <Typography className='text-[#eca013] mt-2'><CalendarMonth /> 2010 - 2017</Typography>
                            </Box>
                            <Box sx={{
                                padding: "20px 50px",
                                borderLeft: '2px #eca013 solid',
                                margin: "20px 0px"
                            }}>
                                <Typography variant="body1" color="initial"
                                    sx={{ fontSize: '20px' }}
                                >
                                    Sabaragamuwa University of Sri Lanka
                                </Typography>
                                <Typography className='text-[#787878]'>BSc. Computing and Information Systems</Typography>
                                <Typography className='text-[#eca013] mt-2'><CalendarMonth /> 2020 - 2024</Typography>
                            </Box>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className='m-auto lg:ml-24 mt-10'>
                        <div className='m-auto flex lg:w-96'>
                            <Work sx={{
                                margin: '5px',
                                fontSize: '50px'
                            }} />
                            <Typography variant="body1" color="initial"
                                sx={{
                                    margin: '5px',
                                    fontSize: '30px'
                                }}
                            >
                                Experience
                            </Typography>
                        </div>
                        <div>
                            <Box sx={{
                                padding: "20px 50px",
                                borderLeft: '2px #eca013 solid',
                                margin: "20px 0px"
                            }}>
                                <Typography variant="body1" color="initial"
                                    sx={{ fontSize: '20px' }}
                                >
                                    AlphaNel Solutions
                                </Typography>
                                <Typography className='text-[#787878]'>Co-Founder</Typography>
                                <Typography className='text-[#eca013] mt-2'><CalendarMonth /> 2022 - Present</Typography>
                            </Box>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
