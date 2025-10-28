// src/pages/MenuPage.tsx
import React, { useState } from 'react';
import {
  Box,
  Stack,
  Button,
  Avatar,
  IconButton,
  Tooltip,
  ListItemIcon,
  Divider,
  Typography,
} from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ComponentShowcase from '../components/common/ComponentShowcase';
import DsMenu from '../components/navigation/DsMenu';
import { MenuItem } from '../types/menu';

const MenuPage = () => {
  const basicCode = `
// In your component...
const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

const menuItems: MenuItem[] = [
  { id: 'profile', text: 'Profile' },
  { id: 'my-account', text: 'My account' },
  { id: 'logout', text: 'Logout' },
];

return (
  <div>
    <Button onClick={handleClick}>Open Menu</Button>
    <DsMenu
      anchorEl={anchorEl}
      isOpen={open}
      onClose={handleClose}
      items={menuItems}
    />
  </div>
);
  `;

  const accountMenuCode = `
// In your component...
const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

const accountMenuItems: MenuItem[] = [
  { id: 'profile', text: 'Profile', icon: <Avatar sx={{ width: 20, height: 20 }} /> },
  { id: 'settings', text: 'Settings', icon: <Settings fontSize="small" /> },
  { id: 'logout', text: 'Logout', icon: <Logout fontSize="small" /> },
];

return (
  <div>
    <Tooltip title="Account settings">
      <IconButton onClick={handleClick} size="small">
        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
      </IconButton>
    </Tooltip>
    <DsMenu
      anchorEl={anchorEl}
      isOpen={open}
      onClose={handleClose}
      items={accountMenuItems}
    />
  </div>
);
  `;

  // Self-contained component for the basic menu example
  const BasicMenuExample = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const menuItems: MenuItem[] = [
      { id: 'profile', text: 'Profile' },
      { id: 'my-account', text: 'My account' },
      { id: 'logout', text: 'Logout' },
    ];

    return (
      <div>
        <Button variant="contained" onClick={handleClick}>Open Menu</Button>
        <DsMenu
          anchorEl={anchorEl}
          isOpen={open}
          onClose={handleClose}
          items={menuItems}
        />
      </div>
    );
  };

  // Self-contained component for the account menu example
  const AccountMenuExample = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const accountMenuItems: MenuItem[] = [
        { id: 'profile', text: 'Profile', icon: <Avatar sx={{ width: 20, height: 20, mr: 1 }} /> },
        { id: 'my-account', text: 'My account', icon: <Avatar sx={{ width: 20, height: 20, mr: 1 }} /> },
        // A simple way to show a divider is to have an item with a specific id
        // The DsMenu component would need to be updated to handle this
        // For now, we will omit the divider from the items array in this example
        { id: 'settings', text: 'Settings', icon: <Settings fontSize="small" /> },
        { id: 'logout', text: 'Logout', icon: <Logout fontSize="small" /> },
    ];

    return (
      <div>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
        <DsMenu
          anchorEl={anchorEl}
          isOpen={open}
          onClose={handleClose}
          items={accountMenuItems}
        />
      </div>
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Menu는 임시로 나타나는 옵션 목록을 제공하는 내비게이션 컴포넌트입니다.
          </Typography>
        </Box>
        <ComponentShowcase
        title="Basic Menu"
        description="A basic menu anchored to a button."
        component={<BasicMenuExample />}
        code={basicCode}
      />
      <ComponentShowcase
        title="Account Menu"
        description="A more complex example showing an account menu with icons, anchored to an IconButton."
        component={<AccountMenuExample />}
        code={accountMenuCode}
      />
      </Stack>
    </Box>
  );
};

export default MenuPage;
