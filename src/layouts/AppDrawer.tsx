
import React from 'react';
import { Drawer, Toolbar, useTheme } from '@mui/material';
import DrawerContent from './DrawerContent';
import { MenuItem, MenuGroup } from '../types/menu';
import { ICON_SIDEBAR_WIDTH } from './IconSidebar';

const drawerWidth = 240;

interface AppDrawerProps {
    isMobile: boolean;
    isMobileDrawerOpen: boolean;
    isDesktopDrawerOpen: boolean;
    onDrawerToggle: () => void;
    menuData: MenuItem[];
    onMenuClick: (item: MenuItem) => void;
}

const AppDrawer: React.FC<AppDrawerProps> = ({
    isMobile,
    isMobileDrawerOpen,
    isDesktopDrawerOpen,
    onDrawerToggle,
    menuData,
    onMenuClick,
}) => {
    const theme = useTheme();

    return (
        <Drawer
            variant={isMobile ? 'temporary' : 'permanent'}
            open={isMobile ? isMobileDrawerOpen : isDesktopDrawerOpen}
            onClose={onDrawerToggle}
            sx={{
                width: { xs: '80%', sm: drawerWidth },
                flexShrink: 0,
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                ...(!isDesktopDrawerOpen && !isMobile && {
                    overflowX: 'hidden',
                    width: 0,
                }),
                [`& .MuiDrawer-paper`]: {
                    width: { xs: '80%', sm: drawerWidth },
                    boxSizing: 'border-box',
                    left: { sm: ICON_SIDEBAR_WIDTH },
                    top: { xs: 0, sm: '64px' },
                    height: { xs: '100%', sm: 'calc(100% - 64px)' },
                    borderRight: { sm: `1px solid ${theme.palette.divider}` },
                    borderLeft: 'none',
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    ...(!isDesktopDrawerOpen && !isMobile && {
                        width: 0,
                    }),
                },
            }}
        >
            {isMobile && <Toolbar />}
            <DrawerContent menuData={menuData} onMenuClick={onMenuClick} />
        </Drawer>
    );
};

export default AppDrawer;
