// D:/ds_mui_new/src/layouts/DrawerContent.tsx

import React, { useState, useMemo } from 'react';
import {
    List,
    ListItemButton,
    ListItemText,
    Collapse,
    Box,
    TextField,
    InputAdornment,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
// [핵심 1] 더 이상 내부적으로 useMenu 훅을 사용하지 않습니다.
import { MenuItem, MenuGroup } from '../types/menu';

interface DrawerContentProps {
    onMenuClick: (item: MenuItem) => void;
    // [핵심 2] MainLayout에서 직접 데이터를 받도록 props 타입을 명시합니다.
    menuData: MenuGroup[];
}

export default function DrawerContent({ onMenuClick, menuData }: DrawerContentProps) {
    const [openState, setOpenState] = useState<Record<string, boolean>>({
        'group-foundations': true,
        'group-components': true, // Components 그룹도 기본적으로 열어둡니다.
    });
    const [searchTerm, setSearchTerm] = useState('');

    const handleToggle = (groupId: string) => {
        setOpenState(prevState => ({
            ...prevState,
            [groupId]: !prevState[groupId],
        }));
    };

    const isSearching = searchTerm.trim().length > 0;

    // 검색어에 따라 메뉴 데이터를 필터링합니다. useMemo를 사용해 성능을 최적화합니다.
    const filteredMenuData = useMemo(() => {
        if (!isSearching) {
            return menuData;
        }

        const lowercasedSearchTerm = searchTerm.toLowerCase().trim();

        return menuData
            .map(group => {
                // 각 그룹의 하위 메뉴 아이템 중에서 검색어와 일치하는 것을 찾습니다.
                const matchingItems = group.items.filter(item =>
                    item.text.toLowerCase().includes(lowercasedSearchTerm)
                );

                // 그룹 제목이 일치하거나, 일치하는 하위 메뉴가 있는 경우 그룹을 결과에 포함합니다.
                if (group.title.toLowerCase().includes(lowercasedSearchTerm) || matchingItems.length > 0) {
                    return {
                        ...group,
                        // 그룹 제목이 검색어와 일치하면 모든 하위 메뉴를, 그렇지 않으면 일치하는 하위 메뉴만 표시합니다.
                        items: group.title.toLowerCase().includes(lowercasedSearchTerm)
                            ? group.items
                            : matchingItems,
                    };
                }
                return null;
            })
            .filter((group): group is MenuGroup => group !== null);
    }, [menuData, searchTerm, isSearching]);

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
                {/* [핵심 3] props로 받은 menuData를 사용하여 UI를 그립니다. */}
                {filteredMenuData.map((group: MenuGroup) => (
                    // 메뉴 아이템이 하나라도 있을 때만 그룹을 렌더링합니다.
                    group.items.length > 0 && (
                        <React.Fragment key={group.id}>
                            <ListItemButton onClick={() => handleToggle(group.id)}>
                                <ListItemText primary={group.title} primaryTypographyProps={{ fontWeight: 'bold' }} />
                                {isSearching || openState[group.id] ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={isSearching || openState[group.id]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {group.items.map((item) => (
                                        <ListItemButton key={item.id} sx={{ pl: 4 }} onClick={() => onMenuClick(item)}>
                                            <ListItemText primary={item.text} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                        </React.Fragment>
                    )
                ))}
            </List>
            </Box>
        </Box>
    );
}