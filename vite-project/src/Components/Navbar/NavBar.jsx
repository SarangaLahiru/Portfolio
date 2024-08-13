import { Download } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, createTheme, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, ThemeProvider, Tooltip, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthData';


const pages = ['Home', 'Products', 'Pricing', 'Blog', 'Details'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9843', // Set the primary color to orange
    },
  },
});

function NavBar() {

  const { user, signInWithGoogle, signOutUser } = useAuth();
  console.log(user);


  const [open, setOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const currentTheme = useTheme();
  const router = useLocation(); // Use the router hook to get the current path
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const UserSignInWithGoogle = () => {
    signInWithGoogle();
    setOpen(false);
  }
  const handleDashboard = () => {
    navigate('/dashboard')

  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: 'black',
          fontFamily: '"Poppins", sans-serif',
          position: 'relative',
          zIndex: "100",

        }}
      >
        <Container maxWidth="2xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                fontFamily: '"Poppins", sans-serif',
                fontSize: "50px"
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  fontFamily: '"Poppins", sans-serif',

                }}
              >
                {pages.map((page) => {
                  const isActive = router.pathname === `/${page.toLowerCase()}`;
                  return (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link
                        href={`/${page.toLowerCase()}`}
                        color="inherit"
                        underline="none"
                        sx={{
                          color: isActive ? '#FF9843' : 'inherit',
                          '&:hover': {
                            color: '#FF9843',
                          },
                        }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </Link>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => {
                const isActive = router.pathname === `/${page.toLowerCase()}`;
                return (
                  <Button
                    key={page}
                    component={Link}
                    href={`/${page.toLowerCase()}`}
                    sx={{
                      my: 2,
                      color: isActive ? '#FF9843' : 'black',
                      display: 'block',
                      fontFamily: '"Poppins", sans-serif',
                      '&:hover': {
                        color: '#FF9843',
                      },
                      fontSize: "18px"
                    }}
                  >
                    {page}
                  </Button>
                );
              })}
            </Box>

            <Button
              sx={{
                color: 'white',
                padding: '10px 20px',
                margin: '0px 10px',
                backgroundColor: "#FF9843",
                borderRadius: "24px",
                fontFamily: '"Poppins", sans-serif',
                fontSize: "18px"
              }}
              variant="contained"
              endIcon={<Download />}
            >
              Download
            </Button>
            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user.photoURL || "/default-avatar.jpg"}
                      sx={{
                        width: "50px",
                        height: "50px"
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '50px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center"
                      sx={{
                        fontSize: "20px"
                      }}
                    >{user.displayName}</Typography>

                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{user.email}</Typography>

                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleDashboard}>
                    <Typography textAlign="center">Dashboard</Typography>

                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center"
                      onClick={signOutUser}
                    >Sign Out</Typography>

                  </MenuItem>

                </Menu>
              </Box>


            ) : (
              <Button
                sx={{
                  padding: '10px',
                  margin: '0px 10px',
                  color: '#FF9843',
                  borderColor: "#FF9843",
                  padding: '10px 20px',
                  borderRadius: "24px",
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "18px"
                }}
                variant="outlined"
                color='primary'
                onClick={handleClickOpen}
              >
                Sign in
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontSize: "40px",
            textAlign: "center",
            padding: "40px 40px",
          }}
        >
          {"Use Google for Sign in"}
        </DialogTitle>
        <DialogContent
          sx={{
            padding: "80px 0px",
          }}
        >
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              width: "full",
              margin: "auto",
              textAlign: "center",

            }}
          >
            <Button
              variant="outlined"
              onClick={UserSignInWithGoogle}
              sx={{
                padding: "15px 80px",
                fontSize: "20px",
                borderRadius: "50px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textTransform: 'none',
                margin: 'auto'
              }}
            >
              <img
                width="40px"
                src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png?f=webp&w=128"
                alt="Google Icon"
                style={{ marginRight: '10px' }}
              />
              Sign in
            </Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>

    </ThemeProvider>
  );
}
export default NavBar;
