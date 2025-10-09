import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';

// 아이콘 import
import PaletteIcon from '@mui/icons-material/Palette';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import DataObjectIcon from '@mui/icons-material/DataObject';

/**
 * IconSidebar 내부에서 사용하는 메뉴 아이템의 타입을 정의합니다.
 */
type IconMenuItem = {
    id: string;
    path: string;
    label: string;
    icon: React.ReactElement;
};

/**
 * IconSidebar가 받을 props 타입을 정의합니다.
 */
interface IconSidebarProps {
    onMenuClick: (item: IconMenuItem) => void;
    activeIconMenuId: string;
}

// 메뉴 데이터 정의
const iconMenuItems: IconMenuItem[] = [
    { id: 'foundations', path: '/app/foundations', label: 'Foundations', icon: <PaletteIcon /> },
    { id: 'components', path: '/app/components', label: 'Components', icon: <WidgetsIcon /> },
    { id: 'layout', path: '/app/layout', label: 'Layout', icon: <ViewQuiltIcon /> },
    { id: 'patterns', path: '/app/patterns', label: 'Patterns', icon: <DataObjectIcon /> },
];

export const ICON_SIDEBAR_WIDTH = 76;

const IconSidebar = ({ onMenuClick, activeIconMenuId }: IconSidebarProps) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: ICON_SIDEBAR_WIDTH,
                flexShrink: 0,
                bgcolor: 'background.paper',
                borderRight: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <List sx={{ width: '100%', py: 1, px: 0.5 }}>
                {iconMenuItems.map((item) => (
                    <ListItem disablePadding sx={{ mb: 1 }} key={item.id}>
                        <ListItemButton
                            onClick={() => onMenuClick(item)}
                            selected={item.id === activeIconMenuId}
                            sx={{
                                flexDirection: 'column',
                                justifyContent: 'center', // 아이콘과 텍스트를 세로 중앙에 배치
                                alignItems: 'center',
                                minHeight: '72px',
                                borderRadius: 1, // 모서리를 부드럽게
                                color: theme.palette.text.secondary, // 선택되지 않았을 때의 기본 색상

                                // ★★★ 핵심 수정 사항 ★★★
                                // 선택된 아이템의 배경은 primary 색상으로, 아이콘과 글자는 대비되는 색으로 반전시킵니다.
                                '&.Mui-selected': {
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.primary.contrastText,
                                    // 선택된 아이템에 마우스를 올렸을 때의 스타일
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.dark,
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
                                        mt: 0.5, // 아이콘과의 간격 조정
                                        textAlign: 'center',
                                        lineHeight: 1.2,
                                        fontSize: '11px',
                                        whiteSpace: 'nowrap',
                                        fontWeight: 500, // 글자를 약간 굵게 하여 가독성 향상
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