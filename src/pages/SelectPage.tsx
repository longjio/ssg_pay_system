// src/pages/SelectPage.tsx
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { DsSelect, DsSelectItem } from '../components/input/DsSelect';

const SelectPage = () => {
  const selectItems: DsSelectItem[] = [
    { label: 'Ten', value: 10 },
    { label: 'Twenty', value: 20 },
    { label: 'Thirty', value: 30 },
    { label: 'Forty (Disabled)', value: 40, disabled: true },
  ];

  const basicCode = `
const selectItems: DsSelectItem[] = [
  { label: 'Ten', value: 10 },
  { label: 'Twenty', value: 20 },
  // ...
];

// In your component...
const [age, setAge] = useState<string | number>(10);

<DsSelect
  label="Age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
  items={selectItems}
  formControlSx={{ minWidth: 120 }}
/>
  `;

  const variantsCode = `
<DsSelect
  variant="outlined"
  label="Outlined"
  value={10}
  onChange={() => {}}
  items={selectItems}
  formControlSx={{ minWidth: 120 }}
/>
<DsSelect
  variant="standard"
  label="Standard"
  value={10}
  onChange={() => {}}
  items={selectItems}
  formControlSx={{ minWidth: 120 }}
/>
  `;

  const statesCode = `
<DsSelect
  label="Error"
  value={10}
  onChange={() => {}}
  items={selectItems}
  error
  helperText="Incorrect entry."
  formControlSx={{ minWidth: 220 }}
/>
<DsSelect
  label="Disabled"
  value={10}
  onChange={() => {}}
  items={selectItems}
  disabled
  formControlSx={{ minWidth: 120 }}
/>
  `;

  const sizesCode = `
<DsSelect
  label="Small"
  value={10}
  onChange={() => {}}
  items={selectItems}
  size="small"
  formControlSx={{ minWidth: 120 }}
/>
<DsSelect
  label="Medium"
  value={10}
  onChange={() => {}}
  items={selectItems}
  size="medium"
  formControlSx={{ minWidth: 120 }}
/>
  `;

  // Self-contained component for the interactive example
  const InteractiveSelect = () => {
    const [value, setValue] = useState<string | number>(10);
    return (
      <DsSelect
        label="Age"
        value={value}
        onChange={(e: SelectChangeEvent<string | number>) => setValue(e.target.value)}
        items={selectItems}
        formControlSx={{ minWidth: 120 }}
      />
    );
  };

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Basic Select"
        description="A controlled select component."
        component={<InteractiveSelect />}
        code={basicCode}
      />
      <ComponentShowcase
        title="Variants"
        description="The Select component supports 'outlined' and 'standard' variants."
        component={
          <Stack direction="row" spacing={2}>
            <DsSelect
              variant="outlined"
              label="Outlined"
              value={10}
              onChange={() => {}}
              items={selectItems}
              formControlSx={{ minWidth: 120 }}
            />
            <DsSelect
              variant="standard"
              label="Standard"
              value={10}
              onChange={() => {}}
              items={selectItems}
              formControlSx={{ minWidth: 120 }}
            />
          </Stack>
        }
        code={variantsCode}
      />
      <ComponentShowcase
        title="States (Error, Disabled)"
        description="The Select component can be set to an error or disabled state."
        component={
          <Stack direction="row" spacing={2}>
            <DsSelect
              label="Error"
              value={10}
              onChange={() => {}}
              items={selectItems}
              error
              helperText="Incorrect entry."
              formControlSx={{ minWidth: 220 }}
            />
            <DsSelect
              label="Disabled"
              value={10}
              onChange={() => {}}
              items={selectItems}
              disabled
              formControlSx={{ minWidth: 120 }}
            />
          </Stack>
        }
        code={statesCode}
      />
      <ComponentShowcase
        title="Sizes"
        description="The Select component supports 'small' and 'medium' sizes."
        component={
          <Stack direction="row" spacing={2} alignItems="center">
            <DsSelect
              label="Small"
              value={10}
              onChange={() => {}}
              items={selectItems}
              size="small"
              formControlSx={{ minWidth: 120 }}
            />
            <DsSelect
              label="Medium"
              value={10}
              onChange={() => {}}
              items={selectItems}
              size="medium"
              formControlSx={{ minWidth: 120 }}
            />
          </Stack>
        }
        code={sizesCode}
      />
    </Stack>
  );
};

export default SelectPage;
