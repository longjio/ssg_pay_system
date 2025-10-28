// src/pages/StepperPage.tsx
import React from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import DsStepper, { StepItem } from '../components/navigation/DsStepper';

const StepperPage = () => {
  // Stepper에 공통적으로 사용할 단계 정보
  const steps: StepItem[] = [
    { label: 'Select campaign settings' },
    { label: 'Create an ad group', optional: true },
    { label: 'Create an ad' },
  ];

  // 각 단계에 공통적으로 보여줄 컨텐츠
  const stepContents: React.ReactNode[] = [
    <Box>
      <Typography>Step 1: Campaign Settings</Typography>
      <TextField label="Campaign Name" variant="outlined" fullWidth margin="normal" />
    </Box>,
    <Box>
      <Typography>Step 2: Ad Group (Optional)</Typography>
      <TextField label="Ad Group Name" variant="outlined" fullWidth margin="normal" />
    </Box>,
    <Box>
      <Typography>Step 3: Ad Creation</Typography>
      <TextField label="Ad Headline" variant="outlined" fullWidth margin="normal" />
    </Box>,
  ];

  const horizontalCode = `
const steps: StepItem[] = [
  { label: 'Select campaign settings' },
  { label: 'Create an ad group', optional: true },
  { label: 'Create an ad' },
];

const stepContents: React.ReactNode[] = [
  <div>Content for Step 1</div>,
  <div>Content for Step 2</div>,
  <div>Content for Step 3</div>,
];

<DsStepper steps={steps} stepContents={stepContents} />
  `;

  const verticalCode = `
const steps: StepItem[] = [
  { label: 'Select campaign settings' },
  { label: 'Create an ad group', optional: true },
  { label: 'Create an ad' },
];

const stepContents: React.ReactNode[] = [
  <div>Content for Step 1</div>,
  <div>Content for Step 2</div>,
  <div>Content for Step 3</div>,
];

<DsStepper
  steps={steps}
  stepContents={stepContents}
  orientation="vertical"
/>
  `;

  const alternativeLabelCode = `
const steps: StepItem[] = [
  { label: 'Select campaign settings' },
  { label: 'Create an ad group', optional: true },
  { label: 'Create an ad' },
];

const stepContents: React.ReactNode[] = [
  <div>Content for Step 1</div>,
  <div>Content for Step 2</div>,
  <div>Content for Step 3</div>,
];

<DsStepper
  steps={steps}
  stepContents={stepContents}
  alternativeLabel
/>
  `;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Stepper는 여러 단계로 이루어진 프로세스의 진행 상황을 표시하는 내비게이션 컴포넌트입니다.
          </Typography>
        </Box>
        <ComponentShowcase
          title="Horizontal Stepper"
          description="The default stepper displays progress horizontally."
          component={
            <DsStepper steps={steps} stepContents={stepContents} />
          }
          code={horizontalCode}
        />
        <ComponentShowcase
          title="Vertical Stepper"
          description="Steppers can be displayed vertically by setting the orientation prop."
          component={
            <DsStepper
              steps={steps}
              stepContents={stepContents}
              orientation="vertical"
            />
          }
          code={verticalCode}
        />
        <ComponentShowcase
          title="Alternative Label Stepper"
          description="The alternativeLabel prop positions the label below the step icon."
          component={
            <DsStepper
              steps={steps}
              stepContents={stepContents}
              alternativeLabel
            />
          }
          code={alternativeLabelCode}
        />
      </Stack>
    </Box>
  );
};

export default StepperPage;
