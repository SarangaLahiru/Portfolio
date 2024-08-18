import { Button, Card, CardActions, CardContent, CardMedia, createTheme, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843',
        },
    },
    typography: {
        fontFamily: '"Poppins", sans-serif',
    },
});

const carouselItems = [
    {
        title: "Lizard",
        description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
        image: "/static/images/cards/contemplative-reptile.jpg",
    },
    {
        title: "Chameleon",
        description: "Chameleons are distinctive and highly specialized clade of Old World lizards with over 160 species described.",
        image: "/static/images/cards/contemplative-reptile.jpg",
    },
    {
        title: "Gecko",
        description: "Geckos are small lizards found in warm climates throughout the world, known for their vocalizations and unique toes.",
        image: "/static/images/cards/contemplative-reptile.jpg",
    },
];

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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
        ]
    };

    return (
        <ThemeProvider theme={theme}>
            <div className='p-10 bg-[#f2f2f2]'>
                <Typography variant="body1"
                    sx={{
                        color: "#FF9843",
                        fontSize: "30px",
                        textAlign: "center",
                        mb: 2,
                    }}
                >
                    Why Choose Him
                </Typography>
                <Typography variant="h4" component="h2"
                    sx={{
                        fontWeight: "700",
                        textAlign: "center",
                        mb: 8,
                    }}
                >
                    News And Events
                </Typography>
                <div className='w-full p-[50px]'>
                    <Slider {...settings}>
                        {carouselItems.map((item, index) => (
                            <Card key={index} sx={{ maxWidth: 345, m: '0 auto' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.image}
                                    title={item.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">Share</Button>
                                    <Button size="small" color="primary">Learn More</Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Slider>
                </div>
            </div>
        </ThemeProvider>
    );
}
