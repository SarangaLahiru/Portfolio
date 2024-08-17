import { Button, Card, CardActions, CardContent, CardMedia, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843', // Set the primary color to orange
        },
    },
    typography: {
        fontFamily: '"Poppins", sans-serif',
    },
});

const blogPosts = [
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

export default function Blog() {
    return (
        <ThemeProvider theme={theme}>
            <div className='bg-[#f3f3f3] p-10'>
                <Typography
                    variant="h5"
                    sx={{
                        color: "#FF9843",
                        fontSize: "30px",
                        textAlign: "center",
                        marginBottom: 2,
                    }}
                >
                    Blog
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: "40px",
                        fontWeight: "700",
                        textAlign: "center",
                        marginBottom: 6,
                    }}
                >
                    Latest Updates
                </Typography>
                <Grid container spacing={4} sx={{ width: "70%", margin: 'auto' }}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card sx={{ maxWidth: 345, margin: "auto" }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={post.image}
                                    title={post.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {post.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">Share</Button>
                                    <Button size="small" color="primary">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </ThemeProvider>
    );
}
