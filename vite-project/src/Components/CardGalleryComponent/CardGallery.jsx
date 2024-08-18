import { Close, Favorite, MoreVert, Share } from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    createTheme,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Slide,
    ThemeProvider,
    Toolbar,
    Typography,
} from '@mui/material';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthData';
import { db } from '../../firebase';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9843', // Set the primary color to orange
        },
    },
});
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardGallery() {
    const [open, setOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [likedCards, setLikedCards] = useState([]);
    const { user, signInWithGoogle } = useAuth();
    const [openUserList, setOpenUserList] = useState(false);
    const [usersWhoLiked, setUsersWhoLiked] = useState([]);
    const [openDetailDialog, setOpenDetailDialog] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            const querySnapshot = await getDocs(collection(db, 'cards'));
            const cardsData = querySnapshot.docs.map(async (doc) => {
                const card = { id: doc.id, ...doc.data() };

                // Fetch user details for each user in likedBy
                if (card.likedBy) {
                    const userDetailsPromises = card.likedBy.map(getUserDetails);
                    const userDetails = await Promise.all(userDetailsPromises);
                    card.likedByDetails = userDetails;
                } else {
                    card.likedByDetails = [];
                }

                return card;
            });

            // Resolve all card data with user details
            const resolvedCardsData = await Promise.all(cardsData);
            setCards(resolvedCardsData);
        };

        const fetchUserLikes = async () => {
            if (user) {
                const docRef = doc(db, 'userLikes', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setLikedCards(docSnap.data().likedCards || []);
                } else {
                    setLikedCards([]);
                }
            }
        };

        fetchCards();
        fetchUserLikes();
    }, [user]);

    const handleDetailOpen = (card) => {
        setSelectedCard(card);
        setOpenDetailDialog(true);
    };

    const handleDetailClose = () => {
        setOpenDetailDialog(false);
        setSelectedCard(null);
    };

    const handleUserListOpen = (likedByDetails) => {
        setUsersWhoLiked(likedByDetails); // Set users who liked the card
        setOpenUserList(true); // Open the dialog
    };

    const getUserDetails = async (userId) => {
        const userRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            return userDoc.data();
        } else {
            console.log('No such document!');
            return null;
        }
    };

    const handleLike = async (cardId, currentLikes, currentLikedBy) => {
        if (!user) {
            setOpen(true);
            return;
        }

        if (likedCards.includes(cardId)) {
            alert('You have already liked this card.');
            return;
        }

        // Optimistically update the UI
        setCards(prevCards => prevCards.map(card =>
            card.id === cardId
                ? {
                    ...card,
                    likes: card.likes + 1,
                    likedBy: [...(card.likedBy || []), user.uid],
                    likedByDetails: [...(card.likedByDetails || []), { name: user.displayName, avatar: user.photoURL }]
                }
                : card
        ));

        setLikedCards((prev) => [...prev, cardId]);

        try {
            // Update Firestore
            const cardRef = doc(db, 'cards', cardId);
            await updateDoc(cardRef, {
                likes: currentLikes + 1,
                likedBy: [...currentLikedBy, user.uid],
            });

            const userLikesRef = doc(db, 'userLikes', user.uid);
            await setDoc(userLikesRef, {
                likedCards: [...likedCards, cardId],
            }, { merge: true });
        } catch (error) {
            // Revert the optimistic update if there is an error
            console.error("Error updating like: ", error);
            setCards(prevCards => prevCards.map(card =>
                card.id === cardId
                    ? {
                        ...card,
                        likes: card.likes - 1,
                        likedBy: card.likedBy.filter(uid => uid !== user.uid),
                        likedByDetails: card.likedByDetails.filter(userDetail => userDetail.uid !== user.uid)
                    }
                    : card
            ));

            setLikedCards((prev) => prev.filter(id => id !== cardId));
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const UserSignInWithGoogle = () => {
        setOpen(false);
        signInWithGoogle();
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <div className='h-[200px] overflow-hidden bg-[#ffa6005c]'>
                    <div className='w-[400px] m-auto '>
                        <h2 className=' absolute text-[60px] mt-12'>Latest Update</h2>
                    </div>
                    <img
                        width='100%'
                        className=' relative -z-10'
                        src='https://static.vecteezy.com/system/resources/previews/008/014/115/non_2x/tropical-leaves-background-design-summer-leaves-flat-illustration-simple-banner-with-copy-space-free-vector.jpg'
                        alt=''
                    />
                </div>
                <div className='w-[100%] m-auto lg:p-20 max-sm:p-10'>
                    <Box sx={{ padding: '20px 0px' }}>
                        <div className=''>
                            <Typography
                                variant='body1'
                                color='initial'
                                sx={{
                                    color: '#FF9843',
                                    fontSize: '30px',
                                    fontFamily: '"Poppins", sans-serif',
                                    textAlign: 'center',
                                }}
                            >
                                Why Choose Him
                            </Typography>
                            <Typography
                                variant='body1'
                                color='initial'
                                sx={{
                                    fontSize: '40px',
                                    fontFamily: '"Poppins", sans-serif',
                                    textAlign: 'center',
                                    fontWeight: '700',
                                }}
                            >
                                My Expertise Area
                            </Typography>
                        </div>
                        <Grid container spacing={2} sx={{ marginTop: '15px' }}>
                            {cards.map((card) => (
                                <Grid item xs={12} sm={3} key={card.id}>
                                    <Card sx={{ maxWidth: 400 }} >
                                        <CardHeader
                                            action={
                                                <IconButton aria-label="settings" onClick={() => handleDetailOpen(card)}>
                                                    <MoreVert />
                                                </IconButton>
                                            }
                                            title={card.title}
                                            subheader={card.subheader}
                                        />
                                        <CardMedia component="img" height="194" image={card.image} alt={card.title} onClick={() => handleDetailOpen(card)} />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <IconButton
                                                aria-label="add to favorites"
                                                onClick={() => handleLike(card.id, card.likes, card.likedBy || [])}
                                                color={likedCards.includes(card.id) ? 'primary' : 'default'}
                                            >
                                                <Favorite />
                                                <Typography sx={{ ml: 1 }}>{card.likes}</Typography>
                                            </IconButton>
                                            <IconButton aria-label="show liked by" onClick={() => handleUserListOpen(card.likedByDetails)}>
                                                {card.likedByDetails && card.likedByDetails.length > 0 ? (
                                                    <AvatarGroup max={4}>
                                                        {card.likedByDetails.map((user, index) =>
                                                            user ? (
                                                                <Avatar key={index} alt={user.name} src={user.avatar} />
                                                            ) : (
                                                                <Avatar key={index}>U</Avatar>
                                                            )
                                                        )}
                                                    </AvatarGroup>
                                                ) : (
                                                    <Typography></Typography>
                                                )}
                                            </IconButton>
                                            <IconButton aria-label="share">
                                                <Share />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
                <DialogTitle
                    id='alert-dialog-title'
                    sx={{
                        fontSize: '40px',
                        textAlign: 'center',
                        padding: '40px 40px',
                    }}
                >
                    {'Use Google for Sign in'}
                </DialogTitle>
                <DialogContent
                    sx={{
                        padding: '80px 0px',
                    }}
                >
                    <DialogContentText
                        id='alert-dialog-description'
                        sx={{
                            width: 'full',
                            margin: 'auto',
                            textAlign: 'center',
                        }}
                    >
                        <Button
                            variant='outlined'
                            onClick={UserSignInWithGoogle}
                            sx={{
                                padding: '15px 80px',
                                fontSize: '20px',
                                borderRadius: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textTransform: 'none',
                                margin: 'auto',
                            }}
                        >
                            <img
                                width='40px'
                                src='https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png?f=webp&w=128'
                                alt='Google Icon'
                                style={{ marginRight: '10px' }}
                            />
                            Sign in
                        </Button>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Dialog open={openUserList} onClose={() => setOpenUserList(false)}>
                <DialogTitle>Users Who Liked This Card</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {usersWhoLiked.length > 0 ? (
                            <List>
                                {usersWhoLiked.map((user, index) => (
                                    <ListItem key={index}>
                                        <ListItemAvatar>
                                            <Avatar alt={user.name} src={user.avatar} />
                                        </ListItemAvatar>
                                        <ListItemText primary={user.name} secondary={user.email} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <Typography>No users liked this card.</Typography>
                        )}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Dialog
                fullScreen
                TransitionComponent={Transition}
                open={openDetailDialog}
                onClose={handleDetailClose}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleDetailClose}
                            aria-label="close"
                        >
                            <Close />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Back
                        </Typography>

                    </Toolbar>
                </AppBar>

                <DialogContent>
                    <Grid container spacing={2}>
                        {/* Main Image Section */}
                        <Grid item xs={12} sm={8}>
                            <DialogContentText sx={{ margin: '30px 0' }}>
                                <img
                                    src={selectedCard?.image}
                                    alt={selectedCard?.title}
                                    style={{ width: '100%', borderRadius: '8px' }}
                                />
                            </DialogContentText>

                            {/* Additional Images */}
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <DialogContentText sx={{ margin: '0 15px' }}>
                                        <img
                                            src={selectedCard?.image1}
                                            alt={selectedCard?.title}
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </DialogContentText>
                                </Grid>
                                <Grid item xs={6}>
                                    <DialogContentText sx={{ margin: '0 15px' }}>
                                        <img
                                            src={selectedCard?.image2}
                                            alt={selectedCard?.title}
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </DialogContentText>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Details Section */}
                        <Grid item xs={12} sm={4}>
                            <DialogTitle>{selectedCard?.title}</DialogTitle>
                            <DialogContent>
                                <DialogContentText sx={{ marginBottom: '15px' }}>
                                    <strong>Description:</strong> {selectedCard?.description}
                                </DialogContentText>
                                <DialogContentText sx={{ marginBottom: '15px' }}>
                                    <strong>Likes:</strong> {selectedCard?.likes}
                                </DialogContentText>
                                <DialogContentText>
                                    <strong>Liked By:</strong>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                                        {selectedCard?.likedByDetails.length > 0 ? (
                                            selectedCard.likedByDetails.map((user) => (
                                                <Box key={user.id} sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <Avatar
                                                        alt={user.name}
                                                        src={user.avatar}
                                                        sx={{ width: 32, height: 32 }}
                                                    />
                                                    <Typography variant="body2" sx={{ fontWeight: '500' }}>
                                                        {user.name}
                                                    </Typography>
                                                </Box>
                                            ))
                                        ) : (
                                            <Typography>No one yet</Typography>
                                        )}
                                    </Box>
                                </DialogContentText>
                            </DialogContent>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>

        </ThemeProvider >
    );
}
