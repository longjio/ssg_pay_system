// D:/ssg_pay_system/src/layouts/MainLayout.tsx

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
    Box, CircularProgress, useTheme, useMediaQuery, Drawer, Toolbar,
    IconButton, Tabs, Tab,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useAuth } from '../contexts/AuthContext';
import Header from './Header';
import { routableItems, menuStructure } from '../menu-data';
import { MenuItem } from '../types/menu';
import DrawerContent from './DrawerContent';
import NotFoundPage from '../pages/NotFoundPage';
import DsBreadcrumbs from '../components/navigation/DsBreadcrumbs';

import TabContextMenu from '../components/navigation/TabContextMenu'; // 새로 추가된 컴포넌트 임포트
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
    const [activeIconMenuId, setActiveIconMenuId] = useState<string>('foundations'); // 활성 아이콘 메뉴 상태 추가

    // --- 핸들러 함수들 (기존과 동일) ---
        useEffect(() => {
        // 1. URL에 따라 현재 메뉴 아이템을 찾습니다.
        const currentItem = routableItems.find(item => item.path === location.pathname);

        // 2. 탭이 하나도 열려있지 않은 초기 상태인지 확인합니다.
        if (openTabs.length === 0) {
            const homeItem = routableItems.find(item => item.path === '/app');
            const initialTabs = [];
            if (homeItem) {
                initialTabs.push(homeItem);
            }
            // 현재 아이템이 홈 아이템과 다를 경우 탭에 추가합니다.
            if (currentItem && currentItem.id !== homeItem?.id) {
                initialTabs.push(currentItem);
            }
            // 초기 탭 목록을 설정합니다.
            setOpenTabs(initialTabs);
        } else {
            // 3. 이미 탭이 열려 있는 경우, 현재 URL에 해당하는 탭이 없으면 새로 추가합니다.
            if (currentItem && !openTabs.some(tab => tab.id === currentItem.id)) {
                setOpenTabs(prev => [...prev, currentItem]);
            }
        }

        // 4. 현재 URL을 활성 탭으로 설정합니다.
        setActiveTab(location.pathname);

        // 5. 최상위 경로일 경우 /app으로 리다이렉트합니다.
        if (location.pathname === '/' || location.pathname === '/ssg_pay_system/') {
            navigate('/app', { replace: true });
        }
    }, [location.pathname, navigate]); // openTabs 종속성을 제거하여 무한 루프 가능성을 없앱니다.
    const handleDrawerToggle = () => { if (isMobile) { setMobileDrawerOpen(!isMobileDrawerOpen); } else { setDesktopDrawerOpen(!isDesktopDrawerOpen); } };
    const handleMenuClick = useCallback((item: MenuItem) => { if (item.path) { navigate(item.path); } if (isMobile) { setMobileDrawerOpen(false); } }, [navigate, isMobile]);

    const handleIconMenuClick = (item: { id: string }) => {
        setActiveIconMenuId(item.id); // 활성 아이콘 메뉴 ID 설정
        setDesktopDrawerOpen(true); // Drawer 열기

        const group = menuStructure.find(g => g.id === item.id);

        // 재귀적으로 첫 번째 라우트 가능한 아이템을 찾는 함수
        const findFirstRoutableItem = (items: MenuItem[]): MenuItem | null => {
            for (const menuItem of items) {
                if (menuItem.path) {
                    return menuItem;
                }
                if (menuItem.children && menuItem.children.length > 0) {
                    const found = findFirstRoutableItem(menuItem.children);
                    if (found) return found;
                }
            }
            return null;
        };

        if (group && group.items.length > 0) {
            const firstItem = findFirstRoutableItem(group.items);
            if (firstItem?.path) {
                navigate(firstItem.path);
            }
        }
    };
    const handleTabChange = (event: React.SyntheticEvent, newPath: string) => { navigate(newPath); };
    const handleCloseTab = (e: React.MouseEvent, tabToClose: MenuItem) => { e.stopPropagation(); if (tabToClose.path === '/app') return; const tabIndex = openTabs.findIndex(tab => tab.id === tabToClose.id); const newTabs = openTabs.filter(tab => tab.id !== tabToClose.id); setOpenTabs(newTabs); if (activeTab === tabToClose.path) { if (newTabs.length > 0) { const newActiveTab = newTabs[Math.max(0, tabIndex - 1)]; if (newActiveTab.path) { navigate(newActiveTab.path); } } else { navigate('/app'); } } };
    const handleTitleClick = useCallback(() => navigate('/app'), [navigate]);
    const handleLogout = () => { logout(); navigate('/login'); };
    const handleTabContextMenu = (event: React.MouseEvent, tab: MenuItem) => { event.preventDefault(); setContextMenu(contextMenu === null ? { mouseX: event.clientX + 2, mouseY: event.clientY - 6, tab } : null); };
    const handleCloseContextMenu = () => { setContextMenu(null); };
    const handleCloseThisTab = () => { if (contextMenu?.tab) { handleCloseTab({ stopPropagation: () => {} } as React.MouseEvent, contextMenu.tab); } handleCloseContextMenu(); };
    const handleCloseOthers = () => { if (contextMenu?.tab) { const homeItem = routableItems.find(item => item.path === '/app'); const currentTab = contextMenu.tab; let tabsToKeep = [currentTab]; if (homeItem && homeItem.id !== currentTab.id) { tabsToKeep.unshift(homeItem); } setOpenTabs(tabsToKeep); if (currentTab.path) { navigate(currentTab.path); } } handleCloseContextMenu(); };
    const handleCloseAllTabs = () => { const homeItem = routableItems.find(item => item.path === '/app'); if (homeItem && homeItem.path) { setOpenTabs([homeItem]); navigate(homeItem.path); } else { setOpenTabs([]); navigate('/app'); } handleCloseContextMenu(); };

    // 활성 아이콘 메뉴에 해당하는 서브메뉴 데이터 필터링
    const activeSubMenu = menuStructure.find(g => g.id === activeIconMenuId);

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
                <Toolbar sx={{ minHeight: '52px !important', height: '52px' }} />
                <IconSidebar onMenuClick={handleIconMenuClick} activeIconMenuId={activeIconMenuId} />

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
                    [`& .MuiDrawer-paper`]: {
                        // Drawer의 Paper도 동일한 너비를 가지도록 설정
                        width: { sm: isDesktopDrawerOpen ? drawerWidth : 0 },
                        overflow: 'hidden', // 이중 스크롤 방지
                        borderLeft: 'none',
                        borderRight: 1,
                        borderColor: 'divider',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        // transition을 Paper에 적용하여 부드러운 애니메이션
                        transition: theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    },
                }}
            >
                {/* IconSidebar처럼 Toolbar를 추가하여 Header 높이 확보 */}
                <Toolbar sx={{ flexShrink: 0, minHeight: '52px !important', height: '52px' }} />
                <DrawerContent menuData={activeSubMenu?.items || []} onMenuClick={handleMenuClick} />
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
                    pt: { xs: '56px', sm: '52px' }, // 고정된 Header 높이만큼 패딩
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
                <Box sx={{ flexGrow: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ px: 3, pt: 2, pb: 1 }}>
                        <DsBreadcrumbs />
                    </Box>
                    <Box sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
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
            </Box>

            {/* ContextMenu 컴포넌트로 분리 */}
            <TabContextMenu
                contextMenu={contextMenu}
                handleCloseContextMenu={handleCloseContextMenu}
                handleCloseThisTab={handleCloseThisTab}
                handleCloseOthers={handleCloseOthers}
                handleCloseAllTabs={handleCloseAllTabs}
            />
        </Box>
    );
}