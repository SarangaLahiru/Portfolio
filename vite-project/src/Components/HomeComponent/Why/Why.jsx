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
                    Why Choose Him
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
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ margin: "15px 10px", }}>
                                    <h2 className=' text-xl p-2'>Web Development</h2>
                                    <BorderLinearProgress variant="determinate" value={90} />
                                    <Typography variant="body2" color="textSecondary">90%</Typography>
                                </Box>
                                <Box sx={{ margin: "15px 10px", }}>
                                    <h2 className=' text-xl p-2'>Mobile Development</h2>
                                    <BorderLinearProgress variant="determinate" value={80} />
                                    <Typography variant="body2" color="textSecondary">80%</Typography>
                                </Box>
                                <Box sx={{ margin: "15px 10px", }}>
                                    <h2 className=' text-xl p-2'>UI/UX Design</h2>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                    <Typography variant="body2" color="textSecondary">70%</Typography>
                                </Box>
                                <Box sx={{ margin: "15px 10px", }}>
                                    <h2 className=' text-xl p-2'>Machine Learning</h2>
                                    <BorderLinearProgress variant="determinate" value={60} />
                                    <Typography variant="body2" color="textSecondary">60%</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ margin: "15px 10px", }}>
                                    <h2 className=' text-xl p-2'>AI & Automation</h2>
                                    <BorderLinearProgress variant="determinate" value={75} />
                                    <Typography variant="body2" color="textSecondary">75%</Typography>
                                </Box>
                                <Box sx={{ margin: "15px 10px", }}>
                                    <h2 className=' text-xl p-2'>Database Management</h2>
                                    <BorderLinearProgress variant="determinate" value={85} />
                                    <Typography variant="body2" color="textSecondary">85%</Typography>
                                </Box>
                                <Box sx={{ margin: "15px 10px", }}>
                                    <h2 className=' text-xl p-2'>Cloud Computing</h2>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                    <Typography variant="body2" color="textSecondary">70%</Typography>
                                </Box>
                                <Box sx={{ margin: "15px 10px", }}>
                                    <h2 className=' text-xl p-2'>DevOps</h2>
                                    <BorderLinearProgress variant="determinate" value={65} />
                                    <Typography variant="body2" color="textSecondary">65%</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </div>
        </ThemeProvider>
    )
}