// src/pages/BottomNavPage.tsx
import React, { useState } from 'react';
import { Box, Stack, BottomNavigation, BottomNavigationAction, Paper, Typography } from '@mui/material';
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
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Bottom Navigation은 화면 하단에 위치하여 주요 페이지 간 이동을 제공하는 내비게이션 컴포넌트입니다.
          </Typography>
        </Box>
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
    </Box>
  );
};

export default BottomNavPage;
