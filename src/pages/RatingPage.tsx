// src/pages/RatingPage.tsx
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import DsRating from '../components/input/DsRating';

const RatingPage = () => {
  const basicCode = `
// Controlled component
const [value, setValue] = useState<number | null>(2);

<DsRating
  label="Controlled"
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
  `;

  const readOnlyCode = `
<DsRating label="Read Only" name="read-only" value={3.5} readOnly precision={0.5} />
  `;

  const disabledCode = `
<DsRating label="Disabled" name="disabled" value={3} disabled />
  `;

  const sizesCode = `
<DsRating label="Small" name="size-small" defaultValue={3} size="small" />
<DsRating label="Medium (default)" name="size-medium" defaultValue={3} />
<DsRating label="Large" name="size-large" defaultValue={3} size="large" />
  `;

  // Self-contained component for the interactive example
  const InteractiveRating = () => {
    const [value, setValue] = useState<number | null>(2);
    return (
      <DsRating
        label="Controlled"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    );
  };

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Basic Rating"
        description="A controlled rating component."
        component={<InteractiveRating />}
        code={basicCode}
      />
      <ComponentShowcase
        title="Read Only"
        description="The rating can be set to read-only."
        component={
          <DsRating label="Read Only" name="read-only" value={3.5} readOnly precision={0.5} />
        }
        code={readOnlyCode}
      />
      <ComponentShowcase
        title="Disabled"
        description="The rating can be disabled."
        component={
          <DsRating label="Disabled" name="disabled" value={3} disabled />
        }
        code={disabledCode}
      />
      <ComponentShowcase
        title="Sizes"
        description="The rating component can have different sizes."
        component={
          <Stack spacing={2}>
            <DsRating label="Small" name="size-small" defaultValue={3} size="small" />
            <DsRating label="Medium (default)" name="size-medium" defaultValue={3} />
            <DsRating label="Large" name="size-large" defaultValue={3} size="large" />
          </Stack>
        }
        code={sizesCode}
      />
    </Stack>
  );
};

export default RatingPage;
