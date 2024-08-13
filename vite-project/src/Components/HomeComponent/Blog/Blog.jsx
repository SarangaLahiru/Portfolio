import { Button, Card, CardActions, CardContent, CardMedia, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843', // Set the primary color to orange
        },
    },
});

export default function Blog() {
    return (
        <ThemeProvider theme={theme}>
            <div className=' bg-[#f3f3f3] p-10'>

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
                <Grid container spacing={1} sx={{
                    width: "70%",
                    margin: 'auto',
                    marginTop: "60px"
                }}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
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
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
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
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
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
                    </Grid>

                </Grid>

            </div>
        </ThemeProvider>
    )
}
