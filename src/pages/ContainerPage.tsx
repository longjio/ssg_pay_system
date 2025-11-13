import React from 'react';
import { Box, Stack, Typography, Paper, Container } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { PropsTable, PropDefinition } from '../components/common';
import { TitleL, BodyM } from '../components/typography';

const ContainerPage = () => {
  // Container Props 정의
  const containerProps: PropDefinition[] = [
    {
      name: 'maxWidth',
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | false",
      defaultValue: "'lg'",
      description: '컨테이너의 최대 너비를 결정합니다. false로 설정하면 maxWidth 제한이 없습니다.',
    },
    {
      name: 'fixed',
      type: 'boolean',
      defaultValue: 'false',
      description: 'true로 설정하면 모든 breakpoint에서 minWidth를 설정합니다.',
    },
    {
      name: 'disableGutters',
      type: 'boolean',
      defaultValue: 'false',
      description: 'true로 설정하면 좌우 padding을 제거합니다.',
    },
    {
      name: 'sx',
      type: 'SxProps<Theme>',
      description: 'MUI의 sx prop을 사용하여 추가 스타일을 지정합니다.',
    },
  ];

  const basicCode = `
<Container>
  <Paper sx={{ p: 3 }}>
    Default Container (maxWidth='lg')
  </Paper>
</Container>
  `;

  const maxWidthCode = `
<Container maxWidth="sm">
  <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'white' }}>
    maxWidth='sm' (600px)
  </Paper>
</Container>

<Container maxWidth="md">
  <Paper sx={{ p: 3, bgcolor: 'secondary.main', color: 'white' }}>
    maxWidth='md' (900px)
  </Paper>
</Container>

<Container maxWidth="lg">
  <Paper sx={{ p: 3, bgcolor: 'success.main', color: 'white' }}>
    maxWidth='lg' (1200px)
  </Paper>
</Container>
  `;

  const disableGuttersCode = `
<Container disableGutters>
  <Paper sx={{ p: 3, bgcolor: 'warning.light' }}>
    Container without padding (disableGutters)
  </Paper>
</Container>
  `;

  const fixedCode = `
<Container fixed maxWidth="md">
  <Paper sx={{ p: 3, bgcolor: 'info.light' }}>
    Fixed Container - maintains minWidth at all breakpoints
  </Paper>
</Container>
  `;

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <TitleL>Container</TitleL>
          <BodyM sx={{ mt: 2, color: 'text.secondary' }}>
            Container는 콘텐츠를 화면 중앙에 배치하고 최대 너비를 제한하는 레이아웃 컴포넌트입니다.
            반응형 디자인에서 콘텐츠가 너무 넓게 퍼지는 것을 방지하고, 읽기 좋은 폭을 유지합니다.
          </BodyM>
        </Box>

        <ComponentShowcase
          title="Basic Container"
          description="기본 Container는 maxWidth='lg' (1200px)가 적용됩니다."
          component={
            <Box sx={{ width: '100%', bgcolor: 'action.hover', p: 2 }}>
              <Container>
                <Paper sx={{ p: 3 }}>
                  Default Container (maxWidth='lg')
                </Paper>
              </Container>
            </Box>
          }
          code={basicCode}
        />

        <ComponentShowcase
          title="MaxWidth Variants"
          description="maxWidth prop으로 컨테이너의 최대 너비를 제어할 수 있습니다."
          component={
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Box sx={{ bgcolor: 'action.hover', p: 2 }}>
                <Container maxWidth="sm">
                  <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'white' }}>
                    maxWidth='sm' (600px)
                  </Paper>
                </Container>
              </Box>
              <Box sx={{ bgcolor: 'action.hover', p: 2 }}>
                <Container maxWidth="md">
                  <Paper sx={{ p: 3, bgcolor: 'secondary.main', color: 'white' }}>
                    maxWidth='md' (900px)
                  </Paper>
                </Container>
              </Box>
              <Box sx={{ bgcolor: 'action.hover', p: 2 }}>
                <Container maxWidth="lg">
                  <Paper sx={{ p: 3, bgcolor: 'success.main', color: 'white' }}>
                    maxWidth='lg' (1200px)
                  </Paper>
                </Container>
              </Box>
            </Stack>
          }
          code={maxWidthCode}
        />

        <ComponentShowcase
          title="Disable Gutters"
          description="disableGutters를 사용하면 좌우 padding을 제거할 수 있습니다."
          component={
            <Box sx={{ width: '100%', bgcolor: 'action.hover', p: 0 }}>
              <Container disableGutters maxWidth="md">
                <Paper sx={{ p: 3, bgcolor: 'warning.light', borderRadius: 0 }}>
                  Container without padding (disableGutters)
                </Paper>
              </Container>
            </Box>
          }
          code={disableGuttersCode}
        />

        <ComponentShowcase
          title="Fixed Container"
          description="fixed prop을 사용하면 모든 breakpoint에서 minWidth가 설정됩니다."
          component={
            <Box sx={{ width: '100%', bgcolor: 'action.hover', p: 2 }}>
              <Container fixed maxWidth="md">
                <Paper sx={{ p: 3, bgcolor: 'info.light' }}>
                  Fixed Container - maintains minWidth at all breakpoints
                </Paper>
              </Container>
            </Box>
          }
          code={fixedCode}
        />

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            MaxWidth 브레이크포인트
          </Typography>
          <Stack spacing={1.5}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" fontWeight="medium">xs</Typography>
              <Typography variant="body2" color="text.secondary">444px</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" fontWeight="medium">sm</Typography>
              <Typography variant="body2" color="text.secondary">600px</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" fontWeight="medium">md</Typography>
              <Typography variant="body2" color="text.secondary">900px</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" fontWeight="medium">lg</Typography>
              <Typography variant="body2" color="text.secondary">1200px</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" fontWeight="medium">xl</Typography>
              <Typography variant="body2" color="text.secondary">1536px</Typography>
            </Box>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            사용 사례
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 페이지 메인 콘텐츠
              </Typography>
              <Typography variant="caption" color="text.secondary">
                블로그 글, 기사 등 읽기 콘텐츠의 최대 너비 제한
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 폼 페이지
              </Typography>
              <Typography variant="caption" color="text.secondary">
                로그인, 회원가입 폼을 화면 중앙에 배치
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 대시보드
              </Typography>
              <Typography variant="caption" color="text.secondary">
                대시보드 콘텐츠가 너무 넓게 퍼지지 않도록 제한
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                • 랜딩 페이지 섹션
              </Typography>
              <Typography variant="caption" color="text.secondary">
                각 섹션의 콘텐츠를 중앙 정렬하고 일관된 너비 유지
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
              • 대부분의 페이지에서는 maxWidth='lg' (1200px)가 적절
            </Typography>
            <Typography variant="body2">
              • 읽기 콘텐츠(블로그, 기사)는 maxWidth='md' (900px) 권장
            </Typography>
            <Typography variant="body2">
              • 폼 페이지는 maxWidth='sm' (600px) 또는 'xs' (444px) 권장
            </Typography>
            <Typography variant="body2">
              • full-width 배경에 Container를 중첩하여 사용하면 효과적
            </Typography>
            <Typography variant="body2">
              • disableGutters는 edge-to-edge 디자인이 필요할 때만 사용
            </Typography>
          </Stack>
        </Paper>

        {/* API 문서 섹션 */}
        <Box>
          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
            API
          </Typography>
          <PropsTable props={containerProps} title="Container Props" />
        </Box>
      </Stack>
    </Box>
  );
};

export default ContainerPage;
