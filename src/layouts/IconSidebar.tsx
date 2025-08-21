import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { MenuGroup, MenuItem } from '../types/menu';
import { useTheme } from '@mui/material/styles';

export const ICON_SIDEBAR_WIDTH = 76;

interface IconSidebarProps {
    menuData: MenuGroup[];
    onMenuClick: () => void;
}

const IconSidebar: React.FC<IconSidebarProps> = ({ menuData, onMenuClick }) => {
    const theme = useTheme();

    return (
        <List sx={{ pt: 2 }}>
            {menuData.map((group) => (
                <React.Fragment key={group.id}>
                    {group.items?.map((item: MenuItem) => (
                        <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                            <Tooltip title={item.text} placement="right">
                                <ListItemButton
                                    component={Link}
                                    to={item.path ?? '#'}
                                    onClick={onMenuClick}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: 'center',
                                        px: 2.5,
                                        color: theme.palette.text.secondary,
                                        '&:hover': {
                                            color: theme.palette.primary.main,
                                            backgroundColor: 'transparent',
                                        },
                                        '&.Mui-selected': {
                                            color: theme.palette.primary.main,
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: 'auto',
                                            justifyContent: 'center',
                                            color: 'inherit',
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                </ListItemButton>
                            </Tooltip>
                        </ListItem>
                    ))}
                </React.Fragment>
            ))}
        </List>
    );
};

export default IconSidebar;
