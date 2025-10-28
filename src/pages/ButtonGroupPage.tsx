// src/pages/ButtonGroupPage.tsx
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { DsButtonGroup } from '../components/button/DsButtonGroup';
import { DsButton } from '../components/button/DsButton';

const ButtonGroupPage = () => {
  const basicCode = `
<DsButtonGroup aria-label="Basic button group">
  <DsButton>One</DsButton>
  <DsButton>Two</DsButton>
  <DsButton>Three</DsButton>
</DsButtonGroup>
  `;

  const variantsCode = `
// Contained (default)
<DsButtonGroup color="primary">
  <DsButton>One</DsButton>
  <DsButton>Two</DsButton>
</DsButtonGroup>

// Outlined
<DsButtonGroup variant="outlined" color="secondary">
  <DsButton>One</DsButton>
  <DsButton>Two</DsButton>
</DsButtonGroup>

// Text
<DsButtonGroup variant="text" color="success">
  <DsButton>One</DsButton>
  <DsButton>Two</DsButton>
</DsButtonGroup>
  `;

  const sizesCode = `
<DsButtonGroup size="small">
  <DsButton>One</DsButton>
  <DsButton>Two</DsButton>
</DsButtonGroup>

<DsButtonGroup size="medium">
  <DsButton>One</DsButton>
  <DsButton>Two</DsButton>
</DsButtonGroup>

<DsButtonGroup size="large">
  <DsButton>One</DsButton>
  <DsButton>Two</DsButton>
</DsButtonGroup>
  `;

  const verticalCode = `
<DsButtonGroup orientation="vertical" color="error">
  <DsButton>One</DsButton>
  <DsButton>Two</DsButton>
  <DsButton>Three</DsButton>
</DsButtonGroup>
  `;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Button Group은 관련된 여러 버튼을 그룹화하여 일관된 UI를 제공하는 컴포넌트입니다.
          </Typography>
        </Box>
        <ComponentShowcase
        title="Basic Button Group"
        description="The default button group is 'contained' and 'primary' color."
        component={
          <DsButtonGroup aria-label="Basic button group">
            <DsButton>One</DsButton>
            <DsButton>Two</DsButton>
            <DsButton>Three</DsButton>
          </DsButtonGroup>
        }
        code={basicCode}
      />
      <ComponentShowcase
        title="Variants"
        description="ButtonGroup supports 'contained', 'outlined', and 'text' variants."
        component={
          <Stack direction="row" spacing={2}>
            <DsButtonGroup color="primary">
              <DsButton>One</DsButton>
              <DsButton>Two</DsButton>
            </DsButtonGroup>
            <DsButtonGroup variant="outlined" color="secondary">
              <DsButton>One</DsButton>
              <DsButton>Two</DsButton>
            </DsButtonGroup>
            <DsButtonGroup variant="text" color="success">
              <DsButton>One</DsButton>
              <DsButton>Two</DsButton>
            </DsButtonGroup>
          </Stack>
        }
        code={variantsCode}
      />
      <ComponentShowcase
        title="Sizes"
        description="ButtonGroup can be rendered in different sizes."
        component={
          <Stack direction="row" spacing={2} alignItems="center">
            <DsButtonGroup size="small">
              <DsButton>One</DsButton>
              <DsButton>Two</DsButton>
            </DsButtonGroup>
            <DsButtonGroup size="medium">
              <DsButton>One</DsButton>
              <DsButton>Two</DsButton>
            </DsButtonGroup>
            <DsButtonGroup size="large">
              <DsButton>One</DsButton>
              <DsButton>Two</DsButton>
            </DsButtonGroup>
          </Stack>
        }
        code={sizesCode}
      />
      <ComponentShowcase
        title="Vertical Group"
        description="ButtonGroup can be displayed vertically."
        component={
          <DsButtonGroup orientation="vertical" color="error">
            <DsButton>One</DsButton>
            <DsButton>Two</DsButton>
            <DsButton>Three</DsButton>
          </DsButtonGroup>
        }
        code={verticalCode}
      />
      </Stack>
    </Box>
  );
};

export default ButtonGroupPage;
