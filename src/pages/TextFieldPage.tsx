// src/pages/TextFieldPage.tsx
import React from 'react';
import { Stack, Box } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { DsTextField } from '../components/input/DsTextField';

const TextFieldPage = () => {
  const variantsCode = `
<DsTextField label="Outlined" />
<DsTextField label="Filled" variant="filled" />
<DsTextField label="Standard" variant="standard" />
  `;

  const formPropsCode = `
<DsTextField label="Required" required />
<DsTextField label="Error" error helperText="Incorrect entry." />
<DsTextField label="Disabled" disabled defaultValue="Hello World" />
<DsTextField label="Read Only" InputProps={{ readOnly: true }} defaultValue="Hello World" />
  `;

  const sizesCode = `
<DsTextField label="Small" size="small" />
<DsTextField label="Medium (default)" size="medium" />
  `;

  const multilineCode = `
<DsTextField
  label="Multiline"
  multiline
  rows={4}
  defaultValue="Default Value"
/>
  `;

  const typesCode = `
<DsTextField label="Password" type="password" />
<DsTextField label="Number" type="number" />
  `;

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Variants"
        description="TextField supports 'outlined', 'filled', and 'standard' variants."
        component={
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <DsTextField label="Outlined" />
            <DsTextField label="Filled" variant="filled" />
            <DsTextField label="Standard" variant="standard" />
          </Box>
        }
        code={variantsCode}
      />
      <ComponentShowcase
        title="Form Properties"
        description="Showcasing required, error, disabled, and read-only states."
        component={
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <DsTextField label="Required" required />
            <DsTextField label="Error" error helperText="Incorrect entry." />
            <DsTextField label="Disabled" disabled defaultValue="Hello World" />
            <DsTextField label="Read Only" InputProps={{ readOnly: true }} defaultValue="Hello World" />
          </Box>
        }
        code={formPropsCode}
      />
      <ComponentShowcase
        title="Sizes"
        description="TextField supports 'small' and 'medium' sizes."
        component={
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <DsTextField label="Small" size="small" />
            <DsTextField label="Medium (default)" size="medium" />
          </Box>
        }
        code={sizesCode}
      />
      <ComponentShowcase
        title="Multiline"
        description="The 'multiline' prop transforms the text field into a textarea."
        component={
          <DsTextField
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            sx={{ width: '300px' }}
          />
        }
        code={multilineCode}
      />
      <ComponentShowcase
        title="Input Types"
        description="The 'type' prop can be used to configure the input for different data types."
        component={
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <DsTextField label="Password" type="password" />
            <DsTextField label="Number" type="number" />
          </Box>
        }
        code={typesCode}
      />
    </Stack>
  );
};

export default TextFieldPage;
