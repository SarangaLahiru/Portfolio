import { Avatar, createTheme, Grid, ThemeProvider } from '@mui/material';
import React from 'react';
import Slider from "react-slick";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843', // Set the primary color to orange
        },
    },
});
export default function TestCarosal() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <ThemeProvider theme={theme}>
            <div className='p-10'>

                <div className=' w-full p-2'>
                    <div className="slider-container">

                        <Slider {...settings} className='lg:w-[80%] m-auto'>
                            <div className='lg:w-[300px]'>

                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div className='flex'>
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"
                                                sx={{
                                                    width: "80px",
                                                    height: "80px",
                                                    border: '2px #FF9843 solid'
                                                }}
                                            />
                                            <div className='m-2'>
                                                <h2 className=' text-[30px]'>Raul K.Smith</h2>
                                                <h2 className=' text-[18px] text-[#858585]'>Client him</h2>
                                            </div>


                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <h2 className=' text-[20px] lg:w-[500px]'>Wikipedia is a free, open content online encyclopedia created through the collaborative effort of a community of users known as Wikipedians. Anyone registered on the site can create an article for publication; registration is not required to edit articles.</h2>
                                    </Grid>

                                </Grid>
                            </div>
                            <div className='lg:w-[300px]'>

                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div className='flex'>
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"
                                                sx={{
                                                    width: "80px",
                                                    height: "80px",
                                                    border: '2px #FF9843 solid'
                                                }}
                                            />
                                            <div className='m-2'>
                                                <h2 className=' text-[30px]'>Raul K.Smith</h2>
                                                <h2 className=' text-[18px] text-[#858585]'>Client him</h2>
                                            </div>


                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <h2 className=' text-[20px] lg:w-[500px]'>Wikipedia is a free, open content online encyclopedia created through the collaborative effort of a community of users known as Wikipedians. Anyone registered on the site can create an article for publication; registration is not required to edit articles.</h2>
                                    </Grid>

                                </Grid>
                            </div>
                            <div className='lg:w-[300px]'>

                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <div className='flex'>
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"
                                                sx={{
                                                    width: "80px",
                                                    height: "80px",
                                                    border: '2px #FF9843 solid'
                                                }}
                                            />
                                            <div className='m-2'>
                                                <h2 className=' text-[30px]'>Raul K.Smith</h2>
                                                <h2 className=' text-[18px] text-[#858585]'>Client him</h2>
                                            </div>


                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <h2 className=' text-[20px] lg:w-[500px]'>Wikipedia is a free, open content online encyclopedia created through the collaborative effort of a community of users known as Wikipedians. Anyone registered on the site can create an article for publication; registration is not required to edit articles.</h2>
                                    </Grid>

                                </Grid>
                            </div>



                        </Slider>
                    </div>

                </div>
            </div>
        </ThemeProvider>
    )
}
