// D:/ds_mui_new/src/layouts/DrawerContent.tsx

import React, { useState, useMemo } from 'react';
import {
    List,
    ListItemButton,
    ListItemText,
    Box,
    TextField,
    InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItem } from '../types/menu'; // MenuGroup is no longer needed here

interface DrawerContentProps {
    onMenuClick: (item: MenuItem) => void;
    // [핵심 수정] menuData prop이 이제 MenuItem의 배열을 직접 받습니다.
    menuData: MenuItem[];
}

export default function DrawerContent({ onMenuClick, menuData }: DrawerContentProps) {
    const [searchTerm, setSearchTerm] = useState('');

    // 검색어에 따라 메뉴 데이터를 필터링합니다.
    const filteredMenuItems = useMemo(() => {
        if (!searchTerm.trim()) {
            return menuData;
        }
        const lowercasedSearchTerm = searchTerm.toLowerCase().trim();
        return menuData.filter(item =>
            item.text.toLowerCase().includes(lowercasedSearchTerm)
        );
    }, [menuData, searchTerm]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ p: 2}}>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="메뉴 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <Box sx={{ overflowY: 'auto', overflowX: 'hidden', flexGrow: 1 }}>
                <List component="nav">
                    {/* [핵심 수정] 더 이상 그룹을 렌더링하지 않고, 받은 메뉴 아이템 목록을 바로 렌더링합니다. */}
                    {filteredMenuItems.map((item) => (
                        <ListItemButton key={item.id} sx={{ pl: 2 }} onClick={() => onMenuClick(item)}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Box>
    );
}