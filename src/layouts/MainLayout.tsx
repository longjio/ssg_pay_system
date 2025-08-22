// D:/ssg_pay_system/src/layouts/MainLayout.tsx

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

import IconSidebar, { ICON_SIDEBAR_WIDTH } from './IconSidebar';

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

    // --- 핸들러 함수들 (기존과 동일) ---
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
        // ★ 1. 최상위 Box가 Flex 컨테이너 역할을 합니다.
        // overflow: 'hidden'을 추가하여 자식 요소로 인한 스크롤바 발생을 원천적으로 방지합니다.
        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            <Header
                isDesktopDrawerOpen={isDesktopDrawerOpen}
                isMobile={isMobile}
                onDrawerToggle={handleDrawerToggle}
                onTitleClick={handleTitleClick}
                user={user}
                onLogout={handleLogout}
            />

            {/* ★ 2. IconSidebar를 위한 컨테이너입니다. */}
            {/* 이 컨테이너는 Flex 아이템으로 동작하며, 고정된 너비를 가집니다. */}
            <Box
                component="nav"
                sx={{
                    width: { sm: ICON_SIDEBAR_WIDTH },
                    flexShrink: 0, // 너비가 줄어들지 않도록 설정
                    display: { xs: 'none', sm: 'flex' },
                    flexDirection: 'column',
                    borderRight: 1,
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                }}
            >
                {/* Header의 높이만큼 공간을 만들어 IconSidebar가 겹치지 않게 합니다. */}
                <Toolbar />
                <IconSidebar menuData={menuStructure} onMenuClick={() => setDesktopDrawerOpen(true)} />
            </Box>

            {/* ★ 3. Drawer(2depth 메뉴)도 Flex 아이템으로 동작합니다. */}
            {/* 복잡한 left, top 속성 대신 Flexbox 흐름에 따라 자연스럽게 배치됩니다. */}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? isMobileDrawerOpen : isDesktopDrawerOpen}
                onClose={handleDrawerToggle}
                sx={{
                    // Drawer의 열림/닫힘 상태에 따라 너비를 동적으로 변경합니다.
                    width: { sm: isDesktopDrawerOpen ? drawerWidth : 0 },
                    flexShrink: 0,
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    [`& .MuiDrawer-paper`]: {
                        // Drawer의 내용물(Paper)은 부모의 너비를 100% 채우고,
                        // 위치를 상대적으로 설정하여 Flexbox 흐름을 따르게 합니다.
                        position: 'relative',
                        width: '100%',
                        overflowX: 'hidden',
                        borderLeft: 'none',
                        // Header 아래에 위치하도록 상단 공간 확보
                        top: { sm: '64px' },
                        height: { sm: 'calc(100% - 64px)' },
                    },
                }}
            >
                {isMobile && <Toolbar />}
                <DrawerContent menuData={menuStructure} onMenuClick={handleMenuClick} />
            </Drawer>

            {/* ★ 4. 메인 콘텐츠 영역입니다. */}
            {/* flexGrow: 1 속성으로 남은 공간을 모두 차지하도록 하여 수동 너비 계산을 제거합니다. */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'hidden', // 내부 콘텐츠가 넘칠 경우를 대비
                    pt: { xs: '56px', sm: '64px' }, // 고정된 Header 높이만큼 패딩
                }}
            >
                {!isMobile && openTabs.length > 0 && (
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
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
                {/* 실제 페이지 콘텐츠는 내부에서 스크롤되도록 overflow: 'auto'를 유지합니다. */}
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
                                    return <Route key={item.id} path={relativePath} element={<PageComponent />} />;
                                }
                                return null;
                            })}
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </Box>
            </Box>

            {/* ContextMenu (변경 없음) */}
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