import { Button, Card, CardActions, CardContent, CardMedia, createTheme, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import Slider from "react-slick";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843', // Set the primary color to orange
        },
    },
});
export default function Carosal() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
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
            <div className='p-10 bg-[#f2f2f2]'>
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
                    News And Events

                </Typography>
                <div className=' w-full p-[100px]'>
                    <div className="slider-container">

                        <Slider {...settings} className='w-[100%] m-auto'>
                            <Card sx={{}}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{}} >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{}}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Slider>
                    </div>

                </div>
            </div>
        </ThemeProvider>
    )
}
