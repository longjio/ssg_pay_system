
import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
    Box, CircularProgress, useTheme, useMediaQuery, Drawer, Toolbar,
    IconButton, Tabs, Tab, Menu, MenuItem as MuiMenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useAuth } from '../contexts/AuthContext';
import Header from './Header';
import { routableItems, menuStructure } from '../menu-data';
import { MenuItem } from '../types/menu';
import DrawerContent from './DrawerContent';
import NotFoundPage from '../pages/NotFoundPage';
import DsBreadcrumbs from '../components/navigation/DsBreadcrumbs';
import IconSidebar from './IconSidebar';

const drawerWidth = 240;

export default function MainLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { user, logout } = useAuth();

    const [openTabs, setOpenTabs] = useState<MenuItem[]>([]);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number; tab: MenuItem; } | null>(null);

    const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [isDesktopDrawerOpen, setDesktopDrawerOpen] = useState(true);

    useEffect(() => { const currentItem = routableItems.find(item => item.path === location.pathname); if (currentItem) { setActiveTab(currentItem.path ?? null); if (!openTabs.some(tab => tab.id === currentItem.id)) { setOpenTabs(prev => [...prev, currentItem]); } } else { setActiveTab(location.pathname); } }, [location.pathname, openTabs]);
    useEffect(() => { const homeItem = routableItems.find(item => item.path === '/app'); if (homeItem) { setOpenTabs([homeItem]); setActiveTab(homeItem.path ?? null); if (location.pathname === '/' || location.pathname === '/ssg_pay_system/') { navigate('/app', { replace: true }); } } }, []);
    const handleDrawerToggle = () => { if (isMobile) { setMobileDrawerOpen(!isMobileDrawerOpen); } else { setDesktopDrawerOpen(!isDesktopDrawerOpen); } };
    const handleMenuClick = useCallback((item: MenuItem) => { if (item.path) { navigate(item.path); } if (isMobile) { setMobileDrawerOpen(false); } }, [navigate, isMobile]);
    const handleTabChange = (event: React.SyntheticEvent, newPath: string) => { navigate(newPath); };
    const handleCloseTab = (e: React.MouseEvent, tabToClose: MenuItem) => { e.stopPropagation(); if (tabToClose.path === '/app') return; const tabIndex = openTabs.findIndex(tab => tab.id === tabToClose.id); const newTabs = openTabs.filter(tab => tab.id !== tabToClose.id); setOpenTabs(newTabs); if (activeTab === tabToClose.path) { if (newTabs.length > 0) { const newActiveTab = newTabs[Math.max(0, tabIndex - 1)]; if (newActiveTab.path) { navigate(newActiveTab.path); } } else { navigate('/app'); } } };
    const handleTitleClick = useCallback(() => navigate('/app'), [navigate]);
    const handleLogout = () => { logout(); navigate('/login'); };
    const handleTabContextMenu = (event: React.MouseEvent, tab: MenuItem) => { event.preventDefault(); setContextMenu(contextMenu === null ? { mouseX: event.clientX + 2, mouseY: event.clientY - 6, tab } : null); };
    const handleCloseContextMenu = () => { setContextMenu(null); };
    const handleCloseThisTab = () => { if (contextMenu?.tab) { handleCloseTab({ stopPropagation: () => {} } as React.MouseEvent, contextMenu.tab); } handleCloseContextMenu(); };
    const handleCloseOthers = () => { if (contextMenu?.tab) { const homeItem = routableItems.find(item => item.path === '/app'); const currentTab = contextMenu.tab; let tabsToKeep = [currentTab]; if (homeItem && homeItem.id !== currentTab.id) { tabsToKeep.unshift(homeItem); } setOpenTabs(tabsToKeep); if (currentTab.path) { navigate(currentTab.path); } } handleCloseContextMenu(); };
    const handleCloseAllTabs = () => { const homeItem = routableItems.find(item => item.path === '/app'); if (homeItem && homeItem.path) { setOpenTabs([homeItem]); navigate(homeItem.path); } else { setOpenTabs([]); navigate('/app'); } handleCloseContextMenu(); };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            {/* IconSidebar: onMenuClick 핸들러를 추가합니다. */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexShrink: 0 }}>
                <IconSidebar menuData={menuStructure} onMenuClick={handleDrawerToggle} />
            </Box>

            {/* Drawer: 변경 없음 */}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? isMobileDrawerOpen : isDesktopDrawerOpen}
                onClose={handleDrawerToggle}
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
                        position: 'relative',
                        width: { xs: '80%', sm: drawerWidth },
                        boxSizing: 'border-box',
                        borderRight: { sm: `1px solid ${theme.palette.divider}` },
                        borderLeft: 'none',
                        overflowX: 'hidden',
                        transition: theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen,
                        }),
                        ...(!isDesktopDrawerOpen && !isMobile && {
                            width: 0,
                            border: 'none',
                        }),
                    },
                }}
            >
                {isMobile && <Toolbar />}
                <DrawerContent menuData={menuStructure} onMenuClick={handleMenuClick} />
            </Drawer>

            {/* Main Content Area */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                <Header
                    isDesktopDrawerOpen={isDesktopDrawerOpen}
                    isMobile={isMobile}
                    onDrawerToggle={handleDrawerToggle}
                    onTitleClick={handleTitleClick}
                    user={user}
                    onLogout={handleLogout}
                />
                {!isMobile && openTabs.length > 0 && (
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper', flexShrink: 0 }}>
                        <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
                            {openTabs.map((tab) => (
                                <Tab
                                    key={tab.id}
                                    value={tab.path}
                                    onContextMenu={(e) => handleTabContextMenu(e, tab)}
                                    sx={{ cursor: 'context-menu' }}
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            {tab.text}
                                            {tab.path !== '/app' && (
                                                <IconButton size="small" onClick={(e) => handleCloseTab(e, tab)} sx={{ ml: 1.5 }}>
                                                    <CloseIcon fontSize="small" />
                                                </IconButton>
                                            )}
                                        </Box>
                                    }
                                />
                            ))}
                        </Tabs>
                    </Box>
                )}
                <Box sx={{ flexGrow: 1, p: 3, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <DsBreadcrumbs />
                    <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}><CircularProgress /></Box>}>
                        <Routes>
                            {routableItems.map(item => {
                                if (item.component && item.path) {
                                    const PageComponent = item.component;
                                    let relativePath = item.path.substring('/app'.length);
                                    if (relativePath.startsWith('/')) {
                                        relativePath = relativePath.substring(1);
                                    }
                                    return <Route key={item.id} path={relativePath} element={<PageComponent />} />
                                }
                                return null;
                            })}
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </Box>
            </Box>

            {/* ContextMenu: 변경 없음 */}
            <Menu
                open={contextMenu !== null}
                onClose={handleCloseContextMenu}
                anchorReference="anchorPosition"
                anchorPosition={contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined}
            >
                <MuiMenuItem onClick={handleCloseThisTab} disabled={contextMenu?.tab.path === '/app'}>
                    이 탭 닫기
                </MuiMenuItem>
                <MuiMenuItem onClick={handleCloseOthers}>다른 탭 모두 닫기</MuiMenuItem>
                <MuiMenuItem onClick={handleCloseAllTabs}>전체 탭 닫기</MuiMenuItem>
            </Menu>
        </Box>
    );
}
