// src/pages/CheckboxPage.tsx
import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import DsCheckbox from '../components/input/DsCheckbox';

const CheckboxPage = () => {
  const basicCode = `
<DsCheckbox label="Unchecked" />
<DsCheckbox label="Checked" checked />
<DsCheckbox label="Disabled" disabled />
<DsCheckbox label="Checked Disabled" checked disabled />
  `;

  const colorsCode = `
<DsCheckbox label="Primary" checked color="primary" />
<DsCheckbox label="Secondary" checked color="secondary" />
<DsCheckbox label="Success" checked color="success" />
<DsCheckbox label="Error" checked color="error" />
  `;

  const sizesCode = `
<DsCheckbox label="Small" checked size="small" />
<DsCheckbox label="Medium (default)" checked size="medium" />
  `;

  const indeterminateCode = `
// You need to manage the state of children to control the parent.
const [checked, setChecked] = React.useState([true, false]);

const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked([event.target.checked, checked[1]]);
};

const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked([checked[0], event.target.checked]);
};

const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked([event.target.checked, event.target.checked]);
};

return (
  <div>
    <DsCheckbox
      label="Parent"
      checked={checked[0] && checked[1]}
      indeterminate={checked[0] !== checked[1]}
      onChange={handleParentChange}
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <DsCheckbox
        label="Child 1"
        checked={checked[0]}
        onChange={handleChange1}
      />
      <DsCheckbox
        label="Child 2"
        checked={checked[1]}
        onChange={handleChange2}
      />
    </Box>
  </div>
);
  `;

  // A self-contained component for the indeterminate example
  const IndeterminateExample = () => {
    const [checked, setChecked] = useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>, newChecked: boolean) => {
      setChecked([newChecked, checked[1]]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>, newChecked: boolean) => {
      setChecked([checked[0], newChecked]);
    };

    const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>, newChecked: boolean) => {
      setChecked([newChecked, newChecked]);
    };

    return (
      <div>
        <DsCheckbox
          label="Parent"
          checked={checked[0] && checked[1]}
          indeterminate={checked[0] !== checked[1]}
          onChange={handleParentChange}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <DsCheckbox
            label="Child 1"
            checked={checked[0]}
            onChange={handleChange1}
          />
          <DsCheckbox
            label="Child 2"
            checked={checked[1]}
            onChange={handleChange2}
          />
        </Box>
      </div>
    );
  };


  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Basic Checkboxes"
        description="Checkboxes can be checked, unchecked, or disabled."
        component={
          <Stack direction="row" spacing={2} alignItems="center">
            <DsCheckbox label="Unchecked" />
            <DsCheckbox label="Checked" checked />
            <DsCheckbox label="Disabled" disabled />
            <DsCheckbox label="Checked Disabled" checked disabled />
          </Stack>
        }
        code={basicCode}
      />
      <ComponentShowcase
        title="Colors"
        description="Checkboxes can have different colors from the theme palette."
        component={
          <Stack direction="row" spacing={2} alignItems="center">
            <DsCheckbox label="Primary" checked color="primary" />
            <DsCheckbox label="Secondary" checked color="secondary" />
            <DsCheckbox label="Success" checked color="success" />
            <DsCheckbox label="Error" checked color="error" />
          </Stack>
        }
        code={colorsCode}
      />
      <ComponentShowcase
        title="Sizes"
        description="Checkboxes support 'small' and 'medium' sizes."
        component={
          <Stack direction="row" spacing={2} alignItems="center">
            <DsCheckbox label="Small" checked size="small" />
            <DsCheckbox label="Medium (default)" checked size="medium" />
          </Stack>
        }
        code={sizesCode}
      />
      <ComponentShowcase
        title="Indeterminate State"
        description="A checkbox can be in an indeterminate state, which is useful for 'select all' functionality."
        component={<IndeterminateExample />}
        code={indeterminateCode}
      />
    </Stack>
  );
};

export default CheckboxPage;
