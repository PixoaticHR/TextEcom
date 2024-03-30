import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Tooltip } from "react-tooltip";
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Person2Icon from '@mui/icons-material/Person2';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DashboardIcon from '@mui/icons-material/Dashboard';

import '../header/index.css';

const drawerWidth = 240;
const linkPage = (url) => {
    window.location.replace(window.location.origin + url);
}
function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const navItems = [{ name: 'Shop', link: '/shop' }, { name: 'Skills', link: '/skills' }, { name: 'Stories', link: '/stories' }, { name: 'About', link: '/about' }, { name: 'Contact Us', link: '/contact' }];
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, ml: 3 }}>
               <DashboardIcon />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText className='hover:text-[#009898]' primary={item.name} onClick={() => linkPage(item.link)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const containerStyle = {
        marginTop: '30px',
        backgroundColor: 'white', color: 'black'
    };
    return (
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />
            <AppBar className='navbarMarginHeight' component="nav" style={containerStyle}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ display: { md: 'none' } }}
                        className='w-full'
                    >
                        <Grid container spacing={1} className='w-full'>
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2} style={{ textAlign: 'right' }} onClick={handleDrawerToggle}> <MenuIcon /></Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2} style={{ textAlign: 'left' }} ><DashboardIcon/></Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{ textAlign: 'center' }}><h3 className='text-xl font-bold text-[#000] hover:text-[#009898]'>LOGO</h3></Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{ textAlign: 'center' }}>
                                <Grid container spacing={2}>
                                    <Tooltip anchorSelect=".search" place="bottom">Search</Tooltip>
                                    <Tooltip anchorSelect=".subscribe" place="bottom">Subscribe</Tooltip>
                                    <Tooltip anchorSelect=".cart" place="left">Profile</Tooltip>
                                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{ alignItems: 'right' }}><Button key={1} sx={{ color: 'black' }} className='text-[#000] hover:text-[#009898] search' onClick={() => linkPage("/search")}><SearchIcon /></Button></Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{ alignItems: 'right' }}> <Button key={2} sx={{ color: 'black' }} className='text-[#000] hover:text-[#009898] subscribe' onClick={() => linkPage("/subscribe")}><FavoriteBorderIcon /></Button></Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{ alignItems: 'right' }}><Button key={3} sx={{ color: 'black' }} className='text-[#000] hover:text-[#009898] cart' onClick={() => linkPage("/profile")}><Person2Icon /></Button></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </IconButton>
                    {/* large Device */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, padding: 2, display: { xs: 'none', sm: 'block' } }}
                        className='navbarHeaderDiv'
                    >
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{ textAlign: 'left' }}>
                                <DashboardIcon className="cursor-pointer text-3xl" onClick={() => linkPage("/")} />
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{ textAlign: 'center' }}>
                                <Button key='logo' onClick={() => linkPage('/')} >
                                    <h3 className='text-xl font-bold text-[#000] hover:text-[#009898]'>LOGO</h3>
                                </Button>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{ textAlign: 'right', marginTop: '12px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px' }}>
                                <Tooltip anchorSelect=".search" place="bottom">Search</Tooltip>
                                <Tooltip anchorSelect=".subscribe" place="bottom">Subscribe</Tooltip>
                                <Tooltip anchorSelect=".cart" place="bottom">Cart</Tooltip>
                                <Tooltip anchorSelect=".profile" place="left">Profile</Tooltip>
                                <Button key={1} sx={{ color: 'black' }} className='text-[#000] hover:text-[#009898] search' onClick={() => linkPage("/search")}><SearchIcon /></Button>
                                <Button key={2} sx={{ color: 'black' }} className='text-[#000] hover:text-[#009898] subscribe' onClick={() => linkPage("/subscribe")}><FavoriteBorderIcon /></Button>
                                <Button key={3} sx={{ color: 'black' }} className='text-[#000] hover:text-[#009898] cart' onClick={() => linkPage("/cart")}><Person2Icon /></Button>
                                <Button key={4} sx={{ color: 'black' }} className='text-[#000] hover:text-[#009898] profile' onClick={() => linkPage("/profile")}><LocalMallIcon /></Button>
                                <Button key={4} sx={{ color: 'black' }} className='text-[#000] hover:text-[#009898]'>

                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 ">Eng <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg></button>
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }} >
                                {navItems.map((item) => (
                                    <Button className='hover:text-[#009898] text-[#000]' sx={{ color: 'black' }} onClick={() => linkPage(item.link)} >{item.name}</Button>
                                ))}
                            </Grid>
                        </Grid>

                    </Typography>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <Box>
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    {drawer}
                </Drawer>
            </nav>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <Box>
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    {/* {drawer1} */}
                </Drawer>
            </nav>
        </Box>
    );
}

export default DrawerAppBar;