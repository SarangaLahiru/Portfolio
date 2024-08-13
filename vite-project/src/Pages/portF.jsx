import { Download, Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Box, Button, createTheme, Divider, Grid, IconButton, styled, ThemeProvider, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Tab from '@mui/material/Tab';
import React from 'react';

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

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843', // Set the primary color to orange
        },
    },
});

export default function PortF() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <ThemeProvider theme={theme}>
            <div className='mt-[10px] bg-[#eaeaea]'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <div className='bg-[#ffffff] m-2'>
                            <Avatar
                                sx={{ margin: 'auto', width: '100px', height: '100px' }}
                                alt="Remy Sharp"
                                src="https://media.istockphoto.com/id/492529287/photo/portrait-of-happy-laughing-man.jpg?s=612x612&w=0&k=20&c=0xQcd69Bf-mWoJYgjxBSPg7FHS57nOfYpZaZlYDVKRE="
                            />
                            <Typography variant="h5" align="center" sx={{ marginTop: '5px' }}>
                                Asdf sdfsdfsdf
                            </Typography>
                            <Typography variant="subtitle1" align="center" color="textSecondary">
                                undergraduate
                            </Typography>
                            <Grid container justifyContent="center" sx={{ marginTop: '10px' }}>
                                <IconButton color="primary" href="https://www.facebook.com" target="_blank">
                                    <Facebook />
                                </IconButton>
                                <IconButton color="primary" href="https://www.instagram.com" target="_blank">
                                    <Instagram />
                                </IconButton>
                                <IconButton color="primary" href="https://www.linkedin.com" target="_blank">
                                    <LinkedIn />
                                </IconButton>
                            </Grid>

                            <Divider sx={{ margin: '30px' }} />
                            <Grid container spacing={2} sx={{ padding: '0 16px' }}>
                                <Grid item xs={6}>
                                    <span className='bg-[#FF9843] p-1'>Name :</span>
                                </Grid>
                                <Grid item xs={6}>
                                    Asdf
                                </Grid>
                                <Grid item xs={6}>
                                    <span className='bg-[#FF9843] p-1'>Age :</span>
                                </Grid>
                                <Grid item xs={6}>
                                    Asdf
                                </Grid>
                                <Grid item xs={6}>
                                    <span className='bg-[#FF9843] p-1'>Residence :</span>
                                </Grid>
                                <Grid item xs={6}>
                                    Asdf
                                </Grid>
                                <Grid item xs={6}>
                                    <span className='bg-[#FF9843] p-1'>Address :</span>
                                </Grid>
                                <Grid item xs={6}>
                                    Asdf
                                </Grid>
                            </Grid>

                            <Divider sx={{ margin: '30px' }} />
                            <Grid container direction="column" spacing={2} sx={{ padding: '0 16px' }}>
                                <h2 className='ml-4 text-[20px]' >Languages</h2>
                                <Grid item>
                                    <Typography variant="p">Skill 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={50} sx={{ width: '90%', height: '5px' }} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="p">Skill 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={50} sx={{ width: '90%', height: '5px' }} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="p">Skill 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={50} sx={{ width: '90%', height: '5px' }} />
                                </Grid>
                            </Grid>

                            <Divider sx={{ margin: '30px' }} />
                            <Grid container direction="column" spacing={2} sx={{ padding: '0 16px' }}>
                                <h2 className='ml-4 text-[20px]' >Languages</h2>
                                <Grid item>
                                    <Typography variant="p">Skill 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={50} sx={{ width: '90%', height: '5px' }} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="p">Skill 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={50} sx={{ width: '90%', height: '5px' }} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="p">Skill 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={50} sx={{ width: '90%', height: '5px' }} />
                                </Grid>
                            </Grid>
                            <Divider sx={{ margin: '30px' }} />
                            <div className='m-auto w-[250px]'>
                                <Button
                                    sx={{
                                        color: 'black',
                                        padding: '10px 50px',
                                        margin: '0px auto',
                                        backgroundColor: "#FF9843",
                                        borderRadius: "4px",
                                        fontFamily: '"Poppins", sans-serif',
                                        fontSize: "18px",

                                    }}
                                    variant="contained"
                                    endIcon={<Download />}
                                >
                                    Download
                                </Button>
                            </div>
                            <Divider sx={{ margin: '30px' }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <div
                            className="bg-white m-2 h-fit"
                            style={{ backgroundImage: "url('/Images/Group 242.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >

                            <Grid container>
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="body1" color="initial">

                                        <div className='content'>
                                            <h2 className=' text-[black]'
                                                style={{
                                                    fontFamily: '"Poppins", sans-serif',
                                                    fontWeight: '700',

                                                }}
                                            >Hi, I'm  Asdf reted
                                                <span className=' text-[#FF9843]'>Shot What able </span>
                                                cold new the
                                            </h2>

                                            <p
                                                className=' text-[#8c8888] mt-[20px] text-[20px]'
                                            >
                                                Shot What able cold new the see hold.Friendly as an betrayed formarly me.morning because as to society behaved moment.
                                            </p>
                                            <Box
                                                sx={{
                                                    marginTop: "20px",
                                                }}
                                            >
                                                <Button
                                                    sx={{
                                                        color: 'black',
                                                        padding: '10px 20px',
                                                        margin: '0px 10px',
                                                        backgroundColor: "#FF9843",
                                                        borderRadius: "4px",
                                                        fontFamily: '"Poppins", sans-serif',
                                                        fontSize: "18px"
                                                    }}
                                                    variant="contained"

                                                >
                                                    Download
                                                </Button>

                                            </Box>

                                        </div>

                                    </Typography>

                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <div className='p-2'>
                                        <img className='w-[200px] m-auto' src="https://www.esalibirth.com/wp-content/uploads/2015/09/man1.png" alt="" />
                                    </div>
                                </Grid>


                            </Grid>
                        </div>
                        <Typography variant="body1" color="initial"
                            sx={{
                                color: "#FF9843",
                                fontSize: "30px",
                                fontFamily: '"Poppins", sans-serif',
                                textAlign: "center"
                            }}
                        >
                            Blog

                        </Typography>
                        <Typography variant="body1" color="initial"
                            sx={{

                                fontSize: "40px",
                                fontFamily: '"Poppins", sans-serif',
                                textAlign: "center",
                                fontWeight: "700"
                            }}
                        >
                            Latest Updates

                        </Typography>
                        <div className='bg-white m-2'>

                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Item One" value="1" />
                                            <Tab label="Item Two" value="2" />
                                            <Tab label="Item Three" value="3" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">Item One</TabPanel>
                                    <TabPanel value="2">Item Two</TabPanel>
                                    <TabPanel value="3">Item Three</TabPanel>
                                </TabContext>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    )
}
