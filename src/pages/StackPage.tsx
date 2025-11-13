import React from 'react';
import { Box, Stack, Typography, Paper, Divider, Button } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { PropsTable, PropDefinition } from '../components/common';
import { TitleL, BodyM } from '../components/typography';

const StackPage = () => {
  // Stack Props 정의
  const stackProps: PropDefinition[] = [
    {
      name: 'direction',
      type: "'row' | 'row-reverse' | 'column' | 'column-reverse'",
      defaultValue: "'column'",
      description: 'Stack의 방향을 정의합니다.',
    },
    {
      name: 'spacing',
      type: 'number | string',
      defaultValue: '0',
      description: '자식 요소 간의 간격을 지정합니다. theme.spacing() 단위를 사용합니다.',
    },
    {
      name: 'divider',
      type: 'ReactNode',
      description: '자식 요소 사이에 표시될 구분선을 지정합니다.',
    },
    {
      name: 'alignItems',
      type: "'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'",
      description: '교차축(cross axis)에서의 정렬 방식을 지정합니다.',
    },
    {
      name: 'justifyContent',
      type: "'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'",
      description: '주축(main axis)에서의 정렬 방식을 지정합니다.',
    },
    {
      name: 'useFlexGap',
      type: 'boolean',
      defaultValue: 'false',
      description: 'CSS gap 속성을 사용할지 여부를 지정합니다. true면 flex gap 사용.',
    },
  ];

  const basicCode = `
<Stack spacing={2}>
  <Paper sx={{ p: 2 }}>Item 1</Paper>
  <Paper sx={{ p: 2 }}>Item 2</Paper>
  <Paper sx={{ p: 2 }}>Item 3</Paper>
</Stack>
  `;

  const directionCode = `
<Stack direction="row" spacing={2}>
  <Paper sx={{ p: 2 }}>Item 1</Paper>
  <Paper sx={{ p: 2 }}>Item 2</Paper>
  <Paper sx={{ p: 2 }}>Item 3</Paper>
</Stack>
  `;

  const dividerCode = `
<Stack
  spacing={2}
  divider={<Divider orientation="horizontal" flexItem />}
>
  <Paper sx={{ p: 2 }}>Item 1</Paper>
  <Paper sx={{ p: 2 }}>Item 2</Paper>
  <Paper sx={{ p: 2 }}>Item 3</Paper>
</Stack>
  `;

  const alignCode = `
<Stack
  direction="row"
  spacing={2}
  alignItems="center"
  justifyContent="space-between"
  sx={{ width: '100%', p: 2, bgcolor: 'action.hover' }}
>
  <Button variant="contained">Left</Button>
  <Button variant="outlined">Center</Button>
  <Button variant="text">Right</Button>
</Stack>
  `;

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <TitleL>Stack</TitleL>
          <BodyM sx={{ mt: 2, color: 'text.secondary' }}>
            Stack은 1차원 레이아웃을 위한 컴포넌트입니다. Flexbox를 기반으로 하며,
            direction, spacing, divider 등을 통해 간편하게 레이아웃을 구성할 수 있습니다.
          </BodyM>
        </Box>

        <ComponentShowcase
          title="Basic Stack (Vertical)"
          description="기본 Stack은 세로(column) 방향으로 요소를 배치합니다."
          component={
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Stack spacing={2}>
                <Paper sx={{ p: 2 }}>Item 1</Paper>
                <Paper sx={{ p: 2 }}>Item 2</Paper>
                <Paper sx={{ p: 2 }}>Item 3</Paper>
              </Stack>
            </Box>
          }
          code={basicCode}
        />

        <ComponentShowcase
          title="Horizontal Stack"
          description="direction='row'를 사용하면 가로로 배치됩니다."
          component={
            <Stack direction="row" spacing={2}>
              <Paper sx={{ p: 2 }}>Item 1</Paper>
              <Paper sx={{ p: 2 }}>Item 2</Paper>
              <Paper sx={{ p: 2 }}>Item 3</Paper>
            </Stack>
          }
          code={directionCode}
        />

        <ComponentShowcase
          title="Stack with Divider"
          description="요소 사이에 구분선을 추가할 수 있습니다."
          component={
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Stack
                spacing={2}
                divider={<Divider orientation="horizontal" flexItem />}
              >
                <Paper sx={{ p: 2 }}>Item 1</Paper>
                <Paper sx={{ p: 2 }}>Item 2</Paper>
                <Paper sx={{ p: 2 }}>Item 3</Paper>
              </Stack>
            </Box>
          }
          code={dividerCode}
        />

        <ComponentShowcase
          title="Alignment"
          description="alignItems와 justifyContent로 정렬을 제어할 수 있습니다."
          component={
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
              sx={{ width: '100%', p: 2, bgcolor: 'action.hover' }}
            >
              <Button variant="contained">Left</Button>
              <Button variant="outlined">Center</Button>
              <Button variant="text">Right</Button>
            </Stack>
          }
          code={alignCode}
        />

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            사용 사례
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 버튼 그룹
              </Typography>
              <Typography variant="caption" color="text.secondary">
                여러 버튼을 일정한 간격으로 배치
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 폼 레이아웃
              </Typography>
              <Typography variant="caption" color="text.secondary">
                입력 필드를 세로로 나열
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 카드 리스트
              </Typography>
              <Typography variant="caption" color="text.secondary">
                카드들을 간격을 두고 배치
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 네비게이션 메뉴
              </Typography>
              <Typography variant="caption" color="text.secondary">
                메뉴 항목을 가로로 나열
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
              • Grid는 2차원 레이아웃, Stack은 1차원 레이아웃에 사용
            </Typography>
            <Typography variant="body2">
              • spacing은 theme.spacing() 단위 (예: spacing=2 → 8px)
            </Typography>
            <Typography variant="body2">
              • direction="row-reverse"나 "column-reverse"로 순서 반전 가능
            </Typography>
            <Typography variant="body2">
              • useFlexGap=true로 설정하면 CSS gap 속성 사용 (성능 향상)
            </Typography>
          </Stack>
        </Paper>

        {/* API 문서 섹션 */}
        <Box>
          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
            API
          </Typography>
          <PropsTable props={stackProps} title="Stack Props" />
        </Box>
      </Stack>
    </Box>
  );
};

export default StackPage;
