// src/pages/DrawerPage.tsx
import React, { useState } from 'react';
import { Stack, Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ComponentShowcase from '../components/common/ComponentShowcase';
import DsDrawer from '../components/navigation/DsDrawer';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const DrawerPage = () => {
  const code = `
type Anchor = 'top' | 'left' | 'bottom' | 'right';

// In your component...
const [state, setState] = useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});

const toggleDrawer =
  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

// ...

<>
  {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer(anchor, true)}>Open {anchor}</Button>
      <DsDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {/* Drawer Content Here */}
      </DsDrawer>
    </React.Fragment>
  ))}
</>
  `;

  // Self-contained component for the interactive example
  const InteractiveDrawerExample = () => {
    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };

    const drawerContent = (anchor: Anchor) => (
      <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation">
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
      <Box sx={{ textAlign: 'center' }}>
        {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button sx={{ m: 1 }} variant="contained" onClick={toggleDrawer(anchor, true)}>Open {anchor}</Button>
            <DsDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {drawerContent(anchor)}
            </DsDrawer>
          </React.Fragment>
        ))}
      </Box>
    );
  };

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Temporary Drawer"
        description="The Drawer is a surface that can be opened and closed from any side of the screen. It is controlled by the 'open' prop and the 'onClose' callback."
        component={<InteractiveDrawerExample />}
        code={code}
      />
    </Stack>
  );
};

export default DrawerPage;
