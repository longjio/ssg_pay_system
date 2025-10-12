
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Toolbar,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Stack
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { DsAppBar } from '../components/surface/DsAppBar';
import ComponentShowcase from '../components/common/ComponentShowcase';

// --- SearchAppBar styles (from original file) ---
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
// --- End of styles ---

const AppBarPage = () => {
    const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(null);
    const openProfileMenu = Boolean(anchorElProfile);

    const handleMenuClick = () => alert('Menu icon clicked!');
    const handleLoginClick = () => alert('Login button clicked!');
    const handleInfoClick = () => alert('Info button clicked!');

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElProfile(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setAnchorElProfile(null);
    };

    const handleProfileMenuItemClick = (action: string) => {
        alert(`${action} clicked!`);
        handleProfileMenuClose();
    };

    const basicAppBarCode = `
<DsAppBar
    title="Basic AppBar"
    onMenuClick={handleMenuClick}
    actionButtonText="Login"
    onActionButtonClick={handleLoginClick}
/>
    `;

    const noMenuButtonCode = `
<DsAppBar
    title="AppBar without Menu Button"
    showMenuButton={false}
    actionButtonText="Info"
    onActionButtonClick={handleInfoClick}
/>
    `;

    const simpleTitleCode = `
<DsAppBar
    title="Simple Title Bar"
    onMenuClick={handleMenuClick}
/>
    `;

    const searchAppBarCode = `
// This example uses MUI's AppBar directly for customization.
<AppBar position="static">
    <Toolbar>
        <IconButton color="inherit"><MenuIcon /></IconButton>
        <Typography sx={{ flexGrow: 1 }}>Search AppBar</Typography>
        <Search>
            <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
        </Search>
    </Toolbar>
</AppBar>
    `;

    const profileMenuAppBarCode = `
// This example uses MUI's AppBar directly for customization.
<AppBar position="sticky">
    <Toolbar>
        <IconButton color="inherit"><MenuIcon /></IconButton>
        <Typography sx={{ flexGrow: 1 }}>Profile</Typography>
        <div>
            <IconButton onClick={handleProfileMenuOpen} color="inherit">
                <AccountCircle />
            </IconButton>
            <Menu
                anchorEl={anchorElProfile}
                open={openProfileMenu}
                onClose={handleProfileMenuClose}
            >
                <MenuItem onClick={() => handleProfileMenuItemClick('Profile')}>Profile</MenuItem>
                <MenuItem onClick={() => handleProfileMenuItemClick('My account')}>My account</MenuItem>
            </Menu>
        </div>
    </Toolbar>
</AppBar>
    `;

    return (
        <Stack spacing={4}>
            <ComponentShowcase
                title="Basic AppBar"
                description="A standard AppBar with a title, menu icon, and action button."
                component={
                    <DsAppBar
                        title="Basic AppBar"
                        onMenuClick={handleMenuClick}
                        actionButtonText="Login"
                        onActionButtonClick={handleLoginClick}
                    />
                }
                code={basicAppBarCode}
            />
            <ComponentShowcase
                title="AppBar without Menu Button"
                description="An AppBar without the leading menu icon."
                component={
                    <DsAppBar
                        title="AppBar without Menu Button"
                        showMenuButton={false}
                        actionButtonText="Info"
                        onActionButtonClick={handleInfoClick}
                    />
                }
                code={noMenuButtonCode}
            />
            <ComponentShowcase
                title="Simple Title Bar"
                description="A simple AppBar with only a title and a menu icon."
                component={
                    <DsAppBar
                        title="Simple Title Bar"
                        onMenuClick={handleMenuClick}
                    />
                }
                code={simpleTitleCode}
            />
            <ComponentShowcase
                title="AppBar with Search"
                description="A more complex example using MUI's native AppBar to include a search field. This demonstrates customization beyond the DsAppBar component."
                component={
                    <Box sx={{ flexGrow: 1 }}>
                        <DsAppBar position="static" color="primary">
                            <Toolbar>
                                <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }} onClick={handleMenuClick}>
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                                    Search AppBar
                                </Typography>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                                </Search>
                            </Toolbar>
                        </DsAppBar>
                    </Box>
                }
                code={searchAppBarCode}
            />
            <ComponentShowcase
                title="AppBar with Profile Menu"
                description="Another custom example showing how to integrate a profile icon with a dropdown menu."
                component={
                    <Box sx={{ flexGrow: 1 }}>
                         <DsAppBar position="sticky">
                            <Toolbar>
                                <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }} onClick={handleMenuClick}>
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Profile
                                </Typography>
                                <div>
                                    <IconButton size="large" onClick={handleProfileMenuOpen} color="inherit">
                                        <AccountCircle />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar-profile"
                                        anchorEl={anchorElProfile}
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        keepMounted
                                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                        open={openProfileMenu}
                                        onClose={handleProfileMenuClose}
                                    >
                                        <MenuItem onClick={() => handleProfileMenuItemClick('Profile')}>Profile</MenuItem>
                                        <MenuItem onClick={() => handleProfileMenuItemClick('My account')}>My account</MenuItem>
                                        <MenuItem onClick={() => handleProfileMenuItemClick('Logout')}>Logout</MenuItem>
                                    </Menu>
                                </div>
                            </Toolbar>
                        </DsAppBar>
                    </Box>
                }
                code={profileMenuAppBarCode}
            />
        </Stack>
    );
};

export default AppBarPage;
