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
                        <div className='bg-white m-2 p-4 rounded-lg shadow-md'>
                            {/* Profile Avatar */}
                            <Avatar
                                sx={{ margin: 'auto', width: '100px', height: '100px' }}
                                alt="Profile Picture"
                                src="https://media.istockphoto.com/id/492529287/photo/portrait-of-happy-laughing-man.jpg?s=612x612&w=0&k=20&c=0xQcd69Bf-mWoJYgjxBSPg7FHS57nOfYpZaZlYDVKRE="
                            />
                            <Typography variant="h5" align="center" sx={{ marginTop: '10px' }}>
                                Sashika Lahiru
                            </Typography>
                            <Typography variant="subtitle1" align="center" color="textSecondary">
                                Undergraduate
                            </Typography>

                            {/* Social Media Links */}
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

                            {/* Personal Details */}
                            <Divider sx={{ margin: '20px 0' }} />
                            <Grid container spacing={2} sx={{ padding: '0 16px' }}>
                                <Grid item xs={6}>
                                    <Typography variant="body1" className='bg-[#FF9843] p-1'>
                                        Name:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    Sashika Lahiru
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" className='bg-[#FF9843] p-1'>
                                        Age:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    24
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" className='bg-[#FF9843] p-1'>
                                        Residence:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    Sabaragamuwa University of Sri Lanka
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" className='bg-[#FF9843] p-1'>
                                        Address:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    [Your Address Here]
                                </Grid>
                            </Grid>

                            {/* Skills */}
                            <Divider sx={{ margin: '20px 0' }} />
                            <Grid container direction="column" spacing={2} sx={{ padding: '0 16px' }}>
                                <Typography variant="h6" className='ml-4'>
                                    Skills
                                </Typography>
                                <Grid item>
                                    <Typography variant="body2">Skill 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={70} sx={{ width: '90%', height: '5px' }} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">Skill 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={50} sx={{ width: '90%', height: '5px' }} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">Skill 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={80} sx={{ width: '90%', height: '5px' }} />
                                </Grid>
                            </Grid>

                            {/* Download Button */}
                            <Divider sx={{ margin: '20px 0' }} />
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
                            <Divider sx={{ margin: '20px 0' }} />
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
                                            <h2
                                                className='text-black'
                                                style={{
                                                    fontFamily: '"Poppins", sans-serif',
                                                    fontWeight: '700',
                                                }}
                                            >
                                                Hi, I'm Sashika Lahiru
                                                <span className='text-[#FF9843]'>— Passionate Developer</span>
                                            </h2>
                                            <p
                                                className='text-[#8c8888] mt-[20px] text-[20px]'
                                            >
                                                I’m a web and mobile developer based in Sri Lanka. I specialize in creating high-quality digital solutions with a focus on user experience and functionality. Explore my work and feel free to reach out.
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
                                                    Download Resume
                                                </Button>
                                            </Box>
                                        </div>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <div className='p-2'>
                                        <img className='w-[200px] m-auto' src="https://www.esalibirth.com/wp-content/uploads/2015/09/man1.png" alt="Profile" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                        <Typography variant="body1" color="initial"
                            sx={{
                                color: "#FF9843",
                                fontSize: "30px",
                                fontFamily: '"Poppins", sans-serif',
                                textAlign: "center",
                                marginTop: '20px'
                            }}
                        >
                            Blog
                        </Typography>
                        <Typography variant="body1" color="initial"
                            sx={{
                                fontSize: "40px",
                                fontFamily: '"Poppins", sans-serif',
                                textAlign: "center",
                                fontWeight: "700",
                                marginTop: '10px'
                            }}
                        >
                            Latest Updates
                        </Typography>

                        <div className='bg-white m-2'>
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="tabs example">
                                            <Tab label="Item One" value="1" />
                                            <Tab label="Item Two" value="2" />
                                            <Tab label="Item Three" value="3" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">Content for Item One</TabPanel>
                                    <TabPanel value="2">Content for Item Two</TabPanel>
                                    <TabPanel value="3">Content for Item Three</TabPanel>
                                </TabContext>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    )
}
