// src/pages/ButtonPage.tsx
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { PropsTable, PropDefinition } from '../components/common';
import { DsButton } from '../components/button/DsButton';

const ButtonPage = () => {
  // DsButton Props 정의
  const buttonProps: PropDefinition[] = [
    {
      name: 'variant',
      type: "'contained' | 'outlined' | 'text'",
      defaultValue: "'contained'",
      description: '버튼의 시각적 스타일을 결정합니다.',
    },
    {
      name: 'color',
      type: "'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'",
      defaultValue: "'primary'",
      description: '버튼의 색상을 결정합니다. 테마 색상 팔레트를 사용합니다.',
    },
    {
      name: 'size',
      type: "'small' | 'medium' | 'large' | 'xlarge'",
      defaultValue: "'medium'",
      description: "버튼의 크기를 결정합니다. 'xlarge'는 커스텀 크기입니다.",
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      description: '버튼을 비활성화 상태로 만듭니다.',
    },
    {
      name: 'loading',
      type: 'boolean',
      defaultValue: 'false',
      description: 'true로 설정하면 버튼 내부에 로딩 스피너를 표시하고 버튼을 비활성화합니다.',
    },
    {
      name: 'loadingPosition',
      type: "'start' | 'end' | 'center'",
      defaultValue: "'start'",
      description: '로딩 스피너의 위치를 결정합니다.',
    },
    {
      name: 'loadingIndicator',
      type: 'ReactNode',
      description: '로딩 상태일 때 표시될 커스텀 인디케이터입니다.',
    },
    {
      name: 'disableElevation',
      type: 'boolean',
      defaultValue: 'true',
      description: '버튼의 elevation(그림자)을 제거합니다.',
    },
    {
      name: 'href',
      type: 'string',
      description: '링크 버튼으로 사용할 때 연결할 URL입니다.',
    },
    {
      name: 'onClick',
      type: '(event: React.MouseEvent) => void',
      description: '버튼 클릭 시 호출되는 함수입니다.',
    },
  ];


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
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Button은 사용자가 클릭하여 작업을 수행하거나 선택을 할 수 있게 하는 기본적인 인터랙션 컴포넌트입니다.
          </Typography>
        </Box>
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

        {/* API 문서 섹션 */}
        <Box>
          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
            API
          </Typography>
          <PropsTable props={buttonProps} title="DsButton Props" />
        </Box>
      </Stack>
    </Box>
  );
};

export default ButtonPage;
