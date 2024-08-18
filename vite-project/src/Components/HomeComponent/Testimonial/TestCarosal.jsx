import { Avatar, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { getFeedbacks } from '../../../firebaseFunctions';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843', // Set the primary color to orange
        },
    },
});
export default function TestCarosal() {

    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const feedbackList = await getFeedbacks();
                setFeedbacks(feedbackList);
            } catch (err) {
                setError('Failed to load feedbacks.');
            } finally {
                setLoading(false);
            }
        };
        fetchFeedbacks();
    }, []);

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

    if (loading) {
        return (
            <div className='p-10'>
                <Typography variant="h6" align="center">Loading feedbacks...</Typography>
            </div>
        );
    }

    if (error) {
        return (
            <div className='p-10'>
                <Typography color="error" variant="h6" align="center">{error}</Typography>
            </div>
        );
    }
    return (
        <ThemeProvider theme={theme}>
            <div className='p-10'>

                <div className=' w-full p-2'>
                    <div className="slider-container">

                        <Slider {...settings} className='lg:w-[80%] m-auto'>
                            {feedbacks.map((fb) => (
                                <div key={fb.feedbackId} className='lg:w-[300px]'>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <div className='flex'>
                                                <Avatar
                                                    alt={fb.userName}
                                                    src={fb.avatar || '/static/images/avatar/3.jpg'} // Fallback image
                                                    sx={{
                                                        width: '80px',
                                                        height: '80px',
                                                        border: '2px #FF9843 solid'
                                                    }}
                                                />
                                                <div className='m-2'>
                                                    <h2 className='text-[30px]'>{fb.userName}</h2>
                                                    <h2 className='text-[18px] text-[#858585]'>{fb.role || 'Client'}</h2>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <h2 className='text-[20px] lg:w-[500px]'>{fb.feedback}</h2>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
        </ThemeProvider>
    )
}
