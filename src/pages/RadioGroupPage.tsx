// src/pages/RadioGroupPage.tsx
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { DsRadioGroup } from '../components/input/DsRadioGroup';

const RadioGroupPage = () => {
  const radioItems = [
    { label: 'First Option', value: 'first' },
    { label: 'Second Option', value: 'second' },
    { label: 'Third Option', value: 'third' },
  ];

  const verticalCode = `
const radioItems = [
  { label: 'First Option', value: 'first' },
  { label: 'Second Option', value: 'second' },
  { label: 'Third Option', value: 'third' },
];

// In your component...
const [selectedValue, setSelectedValue] = useState('first');

<DsRadioGroup
  label="Vertical Group"
  items={radioItems}
  value={selectedValue}
  onChange={(e, value) => setSelectedValue(value)}
  name="vertical-group"
/>
  `;

  const horizontalCode = `
const radioItems = [
  { label: 'First Option', value: 'first' },
  { label: 'Second Option', value: 'second' },
  { label: 'Third Option', value: 'third' },
];

// In your component...
const [selectedValue, setSelectedValue] = useState('first');

<DsRadioGroup
  row
  label="Horizontal Group"
  items={radioItems}
  value={selectedValue}
  onChange={(e, value) => setSelectedValue(value)}
  name="horizontal-group"
/>
  `;

  const disabledCode = `
<DsRadioGroup
  disabled
  label="Disabled Group"
  items={radioItems}
  value="first"
  name="disabled-group"
  onChange={() => {}} // onChange is required, even when disabled
/>
  `;

  // Self-contained component for interactive examples
  const InteractiveRadioGroup = ({ row = false, name }: { row?: boolean, name: string }) => {
    const [value, setValue] = useState('first');
    return (
      <DsRadioGroup
        row={row}
        label={row ? "Horizontal Group" : "Vertical Group"}
        items={radioItems}
        value={value}
        onChange={(e, val) => setValue(val)}
        name={name}
      />
    );
  };

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Radio Group (Vertical)"
        description="The default layout for the radio group is vertical."
        component={<InteractiveRadioGroup name="vertical-group" />}
        code={verticalCode}
      />
      <ComponentShowcase
        title="Radio Group (Horizontal)"
        description="Use the 'row' prop to display the radio buttons in a single line."
        component={<InteractiveRadioGroup row name="horizontal-group" />}
        code={horizontalCode}
      />
      <ComponentShowcase
        title="Disabled Radio Group"
        description="The entire group can be disabled using the 'disabled' prop."
        component={
          <DsRadioGroup
            disabled
            label="Disabled Group"
            items={radioItems}
            value="first"
            name="disabled-group"
            onChange={() => {}}
          />
        }
        code={disabledCode}
      />
    </Stack>
  );
};

export default RadioGroupPage;
