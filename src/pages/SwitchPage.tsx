// src/pages/SwitchPage.tsx
import React, { useState } from 'react';
import { Stack, Box, FormGroup, Typography } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { DsSwitch } from '../components/input/DsSwitch'; // Correctly import DsSwitch

// --- Main Page Component ---
const SwitchPage = () => {
  const basicCode = `
// In your component...
const [checked, setChecked] = useState(true);

<DsSwitch
  label="Basic Switch"
  checked={checked}
  onChange={(e, newChecked) => setChecked(newChecked)}
/>
  `;

  const labelPlacementCode = `
<DsSwitch label="Top" labelPlacement="top" checked onChange={() => {}} />
<DsSwitch label="Start" labelPlacement="start" checked onChange={() => {}} />
<DsSwitch label="Bottom" labelPlacement="bottom" checked onChange={() => {}} />
<DsSwitch label="End" labelPlacement="end" checked onChange={() => {}} />
  `;

  const sizesAndColorsCode = `
// Sizes
<DsSwitch checked onChange={() => {}} size="small" />
<DsSwitch checked onChange={() => {}} size="medium" />

// Colors
<DsSwitch checked onChange={() => {}} color="primary" />
<DsSwitch checked onChange={() => {}} color="secondary" />
<DsSwitch checked onChange={() => {}} color="error" />
<DsSwitch checked onChange={() => {}} color="success" />
  `;

  const disabledCode = `
<DsSwitch label="Disabled Off" disabled checked={false} onChange={() => {}} />
<DsSwitch label="Disabled On" disabled checked={true} onChange={() => {}} />
  `;

  // Self-contained component for the interactive example
  const InteractiveSwitch = () => {
    const [checked, setChecked] = useState(true);
    return (
      <DsSwitch
        label="Basic Switch"
        checked={checked}
        onChange={(e, newChecked) => setChecked(newChecked)}
      />
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Switch는 두 가지 상태(on/off) 사이를 전환하는 토글 컴포넌트입니다.
          </Typography>
        </Box>
        <ComponentShowcase
          title="Basic Switch"
          description="A simple switch with a label."
          component={<InteractiveSwitch />}
          code={basicCode}
        />
        <ComponentShowcase
          title="Label Placement"
          description="The position of the label can be changed."
          component={
            <FormGroup>
              <DsSwitch label="Top" labelPlacement="top" checked onChange={() => {}} />
              <DsSwitch label="Start" labelPlacement="start" checked onChange={() => {}} />
              <DsSwitch label="Bottom" labelPlacement="bottom" checked onChange={() => {}} />
              <DsSwitch label="End (default)" labelPlacement="end" checked onChange={() => {}} />
            </FormGroup>
          }
          code={labelPlacementCode}
        />
        <ComponentShowcase
          title="Sizes and Colors"
          description="Switches can have different sizes and colors."
          component={
            <Stack spacing={2}>
              <Box>
                <DsSwitch checked onChange={() => {}} size="small" />
                <DsSwitch checked onChange={() => {}} size="medium" />
              </Box>
              <Box>
                <DsSwitch checked onChange={() => {}} color="primary" />
                <DsSwitch checked onChange={() => {}} color="secondary" />
                <DsSwitch checked onChange={() => {}} color="error" />
                <DsSwitch checked onChange={() => {}} color="success" />
              </Box>
            </Stack>
          }
          code={sizesAndColorsCode}
        />
        <ComponentShowcase
          title="Disabled"
          description="The switch can be disabled in either state."
          component={
            <Stack direction="row" spacing={2}>
              <DsSwitch label="Disabled Off" disabled checked={false} onChange={() => {}} />
              <DsSwitch label="Disabled On" disabled checked={true} onChange={() => {}} />
            </Stack>
          }
          code={disabledCode}
        />
      </Stack>
    </Box>
  );
};

export default SwitchPage;
