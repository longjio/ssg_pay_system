// src/pages/ButtonPage.tsx
import React from 'react';
import { Stack } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { DsButton } from '../components/button/DsButton';

const ButtonPage = () => {
  const containedCode = `
<DsButton color="primary">Primary</DsButton>
<DsButton color="secondary">Secondary</DsButton>
<DsButton color="success" disabled>Disabled</DsButton>
<DsButton color="error" href="#">Link</DsButton>
  `;

  const outlinedCode = `
<DsButton variant="outlined" color="primary">Primary</DsButton>
<DsButton variant="outlined" color="warning">Warning</DsButton>
<DsButton variant="outlined" disabled>Disabled</DsButton>
<DsButton variant="outlined" color="info" href="#">Link</DsButton>
  `;

  const textCode = `
<DsButton variant="text" color="primary">Primary</DsButton>
<DsButton variant="text">Default</DsButton>
<DsButton variant="text" disabled>Disabled</DsButton>
<DsButton variant="text" color="inherit" href="#">Link</DsButton>
  `;

  const sizeCode = `
<DsButton size="small">Small</DsButton>
<DsButton size="medium">Medium</DsButton>
<DsButton size="large">Large</DsButton>
  `;

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Contained Buttons"
        description="Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain primary actions."
        component={
          <Stack direction="row" spacing={2} alignItems="center">
            <DsButton color="primary">Primary</DsButton>
            <DsButton color="secondary">Secondary</DsButton>
            <DsButton color="success" disabled>Disabled</DsButton>
            <DsButton color="error" href="#">Link</DsButton>
          </Stack>
        }
        code={containedCode}
      />
      <ComponentShowcase
        title="Outlined Buttons"
        description="Outlined buttons are medium-emphasis buttons. They contain important, but not primary, actions on a screen."
        component={
          <Stack direction="row" spacing={2} alignItems="center">
            <DsButton variant="outlined" color="primary">Primary</DsButton>
            <DsButton variant="outlined" color="warning">Warning</DsButton>
            <DsButton variant="outlined" disabled>Disabled</DsButton>
            <DsButton variant="outlined" color="info" href="#">Link</DsButton>
          </Stack>
        }
        code={outlinedCode}
      />
      <ComponentShowcase
        title="Text Buttons"
        description="Text buttons are typically used for less-pronounced actions, including those located in dialogs and cards."
        component={
          <Stack direction="row" spacing={2} alignItems="center">
            <DsButton variant="text" color="primary">Primary</DsButton>
            <DsButton variant="text">Default</DsButton>
            <DsButton variant="text" disabled>Disabled</DsButton>
            <DsButton variant="text" color="inherit" href="#">Link</DsButton>
          </Stack>
        }
        code={textCode}
      />
      <ComponentShowcase
        title="Button Sizes"
        description="Buttons can be set to different sizes."
        component={
          <Stack direction="row" spacing={2} alignItems="center">
            <DsButton size="small">Small</DsButton>
            <DsButton size="medium">Medium</DsButton>
            <DsButton size="large">Large</DsButton>
          </Stack>
        }
        code={sizeCode}
      />
    </Stack>
  );
};

export default ButtonPage;
