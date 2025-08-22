import React from 'react';
// ListItemText를 추가로 import 합니다.
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

// 아이콘 import
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import BusinessIcon from '@mui/icons-material/Business';
import CasesIcon from '@mui/icons-material/Cases';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';


// 메뉴 데이터 정의
const iconMenuItems = [
    { id: 'product', path: '/app/product', label: '상품대', icon: <InventoryIcon /> },
    { id: 'rent', path: '/app/rent', label: '임대', icon: <BusinessIcon /> },
    { id: 'business', path: '/app/business', label: '영업비', icon: <CasesIcon /> },
    { id: 'entrustment', path: '/app/entrustment', label: '위수탁', icon: <LocalShippingIcon /> },
    { id: 'payment', path: '/app/payment', label: '지불관리', icon: <PaymentIcon /> },
    { id: 'wallet', path: '/app/wallet', label: '지급관리', icon: <AccountBalanceWalletIcon /> },
    { id: 'verification', path: '/app/verification', label: '검증관리', icon: <DomainVerificationIcon /> },
    { id: 'stats', path: '/app/stats', label: '기준정보', icon: <BarChartIcon /> },
    { id: 'users', path: '/app/user-management', label: '운영자', icon: <PeopleIcon /> },

];

// 사이드바 너비를 상수로 정의하여 MainLayout과 공유할 수 있도록 export 합니다.
export const ICON_SIDEBAR_WIDTH = 76;

const IconSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();

    const isActive = (path: string) => {
        if (path === '/app') {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <Box
            sx={{
                width: ICON_SIDEBAR_WIDTH,
                flexShrink: 0,
                bgcolor: theme.palette.mode === 'dark' ? '#262B32' : '#F4F6F8',
                borderRight: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: '64px',
            }}
        >
            <List sx={{ width: '100%', py: 1, px: 0.5 }}>
                {iconMenuItems.map((item) => (
                    <ListItem disablePadding sx={{ mb: 1 }} key={item.id}>
                        <ListItemButton
                            onClick={() => navigate(item.path)}
                            selected={isActive(item.path)}
                            sx={{
                                flexDirection: 'column',
                                // ★ 1. 세로 정렬을 '가운데'에서 '시작점(위)'으로 변경합니다.
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                // ★ 2. 상하 패딩(py)을 상단 패딩(pt)으로 변경하여 16px 여백을 줍니다.
                                pt: 4,
                                minHeight: '72px',
                                '&.Mui-selected': {
                                    bgcolor: 'primary.main',
                                    color: 'primary.contrastText',
                                    '&:hover': {
                                        bgcolor: 'primary.dark',
                                    },
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 0, color: 'inherit', justifyContent: 'center' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    variant: 'caption',
                                    sx: {
                                        mt: 0.25,
                                        textAlign: 'center',
                                        lineHeight: 1.2,
                                        fontSize: '11px',
                                        whiteSpace: 'nowrap',
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default IconSidebar;