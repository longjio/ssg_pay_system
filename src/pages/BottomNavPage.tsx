// src/pages/BottomNavPage.tsx
import React, { useState } from 'react';
import { Stack, Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ComponentShowcase from '../components/common/ComponentShowcase';

const BottomNavPage = () => {
  const basicCode = `
// In your component...
const [value, setValue] = useState(0);

// This would typically be fixed to the bottom of the screen.
// The Paper component provides the container and shadow.
<Paper sx={{ width: 350 }} elevation={3}>
  <BottomNavigation
    showLabels
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  >
    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
  </BottomNavigation>
</Paper>
  `;

  const noLabelsCode = `
// In your component...
const [value, setValue] = useState(0);

<Paper sx={{ width: 350 }} elevation={3}>
  <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  >
    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
  </BottomNavigation>
</Paper>
  `;

  // Self-contained component for the interactive example
  const InteractiveBottomNav = ({ showLabels = true }: { showLabels?: boolean }) => {
    const [value, setValue] = useState(0);
    return (
      <Paper sx={{ width: 350 }} elevation={3}>
        <BottomNavigation
          showLabels={showLabels}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
    );
  };

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Bottom Navigation with Labels"
        description="A simple Bottom Navigation bar. The 'showLabels' prop ensures labels are always visible."
        component={<InteractiveBottomNav />}
        code={basicCode}
      />
      <ComponentShowcase
        title="Bottom Navigation without Labels"
        description="When 'showLabels' is omitted, labels only appear on the active item."
        component={<InteractiveBottomNav showLabels={false} />}
        code={noLabelsCode}
      />
    </Stack>
  );
};

export default BottomNavPage;
