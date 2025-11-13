import React from 'react';
import { Box, Stack, Typography, Paper, Button } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { PropsTable, PropDefinition } from '../components/common';
import { TitleL, BodyM } from '../components/typography';

const BoxPage = () => {
  // Box Props 정의
  const boxProps: PropDefinition[] = [
    {
      name: 'component',
      type: 'React.ElementType',
      defaultValue: "'div'",
      description: '렌더링할 HTML 태그 또는 React 컴포넌트를 지정합니다.',
    },
    {
      name: 'sx',
      type: 'SxProps<Theme>',
      description: 'MUI의 sx prop을 사용하여 스타일을 지정합니다. theme 객체에 접근 가능합니다.',
    },
    {
      name: 'display',
      type: 'string',
      description: 'CSS display 속성을 설정합니다. (flex, block, inline, grid 등)',
    },
    {
      name: 'flexDirection',
      type: "'row' | 'row-reverse' | 'column' | 'column-reverse'",
      description: 'Flexbox의 방향을 설정합니다. display="flex"일 때 유효합니다.',
    },
    {
      name: 'justifyContent',
      type: 'string',
      description: '주축(main axis) 방향 정렬을 설정합니다.',
    },
    {
      name: 'alignItems',
      type: 'string',
      description: '교차축(cross axis) 방향 정렬을 설정합니다.',
    },
    {
      name: 'gap',
      type: 'number | string',
      description: 'Flexbox 또는 Grid의 gap 속성을 설정합니다.',
    },
    {
      name: 'p / m / pt / pb / pl / pr / mt / mb / ml / mr',
      type: 'number | string',
      description: 'Padding과 Margin을 설정합니다. theme.spacing() 단위를 사용합니다.',
    },
  ];

  const basicCode = `
<Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
  Basic Box with padding and background
</Box>
  `;

  const flexCode = `
<Box
  sx={{
    display: 'flex',
    gap: 2,
    p: 2,
    bgcolor: 'action.hover',
  }}
>
  <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>Item 1</Box>
  <Box sx={{ p: 2, bgcolor: 'secondary.main', color: 'white' }}>Item 2</Box>
  <Box sx={{ p: 2, bgcolor: 'success.main', color: 'white' }}>Item 3</Box>
</Box>
  `;

  const componentCode = `
<Box component="section" sx={{ p: 2, border: '1px solid grey' }}>
  This Box renders as a section element
</Box>

<Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
  This Box renders as a span element
</Box>
  `;

  const responsiveCode = `
<Box
  sx={{
    width: {
      xs: '100%',    // 0px ~ 600px
      sm: '80%',     // 600px ~ 900px
      md: '60%',     // 900px ~ 1200px
      lg: '50%',     // 1200px ~ 1536px
    },
    p: { xs: 2, md: 4 },
    bgcolor: 'info.main',
    color: 'white',
  }}
>
  Responsive Box - Resize window to see changes
</Box>
  `;

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <TitleL>Box</TitleL>
          <BodyM sx={{ mt: 2, color: 'text.secondary' }}>
            Box는 MUI의 가장 기본적인 컴포넌트입니다. div 대신 사용하며,
            sx prop을 통해 theme 기반 스타일링을 할 수 있습니다.
            모든 MUI 컴포넌트의 기반이 되는 컴포넌트입니다.
          </BodyM>
        </Box>

        <ComponentShowcase
          title="Basic Box"
          description="sx prop을 사용하여 스타일을 적용할 수 있습니다."
          component={
            <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: 1 }}>
              Basic Box with padding and background
            </Box>
          }
          code={basicCode}
        />

        <ComponentShowcase
          title="Flexbox Layout"
          description="display='flex'와 gap, justifyContent 등을 사용하여 레이아웃을 구성합니다."
          component={
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                p: 2,
                bgcolor: 'action.hover',
                borderRadius: 1,
              }}
            >
              <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: 1 }}>Item 1</Box>
              <Box sx={{ p: 2, bgcolor: 'secondary.main', color: 'white', borderRadius: 1 }}>Item 2</Box>
              <Box sx={{ p: 2, bgcolor: 'success.main', color: 'white', borderRadius: 1 }}>Item 3</Box>
            </Box>
          }
          code={flexCode}
        />

        <ComponentShowcase
          title="Component Prop"
          description="component prop으로 렌더링할 HTML 태그를 변경할 수 있습니다."
          component={
            <Stack spacing={2}>
              <Box component="section" sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                This Box renders as a <code>&lt;section&gt;</code> element
              </Box>
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                This Box renders as a <code>&lt;span&gt;</code> element
              </Box>
            </Stack>
          }
          code={componentCode}
        />

        <ComponentShowcase
          title="Responsive Design"
          description="sx prop에서 breakpoint별로 다른 값을 지정할 수 있습니다."
          component={
            <Box
              sx={{
                width: {
                  xs: '100%',
                  sm: '80%',
                  md: '60%',
                  lg: '50%',
                },
                p: { xs: 2, md: 4 },
                bgcolor: 'info.main',
                color: 'white',
                borderRadius: 1,
              }}
            >
              Responsive Box - Resize window to see changes
            </Box>
          }
          code={responsiveCode}
        />

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            사용 사례
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 레이아웃 컨테이너
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Flexbox나 Grid를 사용한 레이아웃 구성
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 스타일 래퍼
              </Typography>
              <Typography variant="caption" color="text.secondary">
                특정 영역에 스타일을 적용하기 위한 래퍼
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 반응형 디자인
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Breakpoint별 다른 스타일 적용
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 시맨틱 HTML
              </Typography>
              <Typography variant="caption" color="text.secondary">
                component prop으로 적절한 HTML 태그 사용
              </Typography>
            </Box>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3, bgcolor: 'action.hover' }}>
          <Typography variant="h6" gutterBottom>
            💡 사용 팁
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2">
              • div 대신 Box를 사용하면 theme 기반 스타일링 가능
            </Typography>
            <Typography variant="body2">
              • sx prop은 함수형으로도 사용 가능 (theme 객체 접근 가능)
            </Typography>
            <Typography variant="body2">
              • component prop으로 시맨틱 HTML 태그 사용 권장 (section, article, nav 등)
            </Typography>
            <Typography variant="body2">
              • 성능이 중요한 경우 styled-components 대신 sx prop 사용
            </Typography>
            <Typography variant="body2">
              • Breakpoint 단축키: xs(0px), sm(600px), md(900px), lg(1200px), xl(1536px)
            </Typography>
          </Stack>
        </Paper>

        {/* API 문서 섹션 */}
        <Box>
          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
            API
          </Typography>
          <PropsTable props={boxProps} title="Box Props" />
        </Box>
      </Stack>
    </Box>
  );
};

export default BoxPage;
