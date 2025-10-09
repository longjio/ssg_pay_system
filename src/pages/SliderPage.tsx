// src/pages/SliderPage.tsx
import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { DsSlider } from '../components/input/DsSlider';

const SliderPage = () => {
  const continuousCode = `
// In your component...
const [value, setValue] = useState<number>(30);

<DsSlider
  aria-label="Volume"
  value={value}
  onChange={(e, newValue) => setValue(newValue as number)}
/>
  `;

  const stepsCode = `
<DsSlider
  aria-label="Temperature"
  value={30}
  onChange={() => {}}
  step={10}
  marks
  min={10}
  max={110}
  valueLabelDisplay="auto"
/>
  `;

  const rangeCode = `
// In your component...
const [value, setValue] = useState<number[]>([20, 37]);

<DsSlider
  aria-label="Temperature range"
  value={value}
  onChange={(e, newValue) => setValue(newValue as number[])}
  valueLabelDisplay="auto"
/>
  `;

  const disabledCode = `
<DsSlider aria-label="Disabled slider" disabled value={30} onChange={() => {}} />
  `;

  // Self-contained components for interactive examples
  const InteractiveContinuousSlider = () => {
    const [value, setValue] = useState<number>(30);
    return (
      <DsSlider
        aria-label="Volume"
        value={value}
        onChange={(e, newValue) => setValue(newValue as number)}
      />
    );
  };

  const InteractiveRangeSlider = () => {
    const [value, setValue] = useState<number[]>([20, 37]);
    return (
      <DsSlider
        aria-label="Temperature range"
        value={value}
        onChange={(e, newValue) => setValue(newValue as number[])}
        valueLabelDisplay="auto"
      />
    );
  };

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Continuous Slider"
        description="A slider for selecting a value from a continuous range."
        component={
          <Box sx={{ width: 300 }}>
            <InteractiveContinuousSlider />
          </Box>
        }
        code={continuousCode}
      />
      <ComponentShowcase
        title="Slider with Steps"
        description="The slider can be forced to snap to discrete values using the 'step' and 'marks' props."
        component={
          <Box sx={{ width: 300 }}>
            <DsSlider
              aria-label="Temperature"
              value={30}
              onChange={() => {}}
              step={10}
              marks
              min={10}
              max={110}
              valueLabelDisplay="auto"
            />
          </Box>
        }
        code={stepsCode}
      />
      <ComponentShowcase
        title="Range Slider"
        description="The slider can be used to set a range of values."
        component={
          <Box sx={{ width: 300 }}>
            <InteractiveRangeSlider />
          </Box>
        }
        code={rangeCode}
      />
      <ComponentShowcase
        title="Disabled Slider"
        description="The slider can be disabled."
        component={
          <Box sx={{ width: 300 }}>
<DsSlider aria-label="Disabled slider" disabled value={30} onChange={() => {}} />
          </Box>
        }
        code={disabledCode}
      />
    </Stack>
  );
};

export default SliderPage;
