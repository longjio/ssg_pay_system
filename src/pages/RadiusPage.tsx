import React from 'react';
import { Box, Paper, Typography, Stack, Grid as MuiGrid, useTheme } from '@mui/material';
import { TitleL, BodyM } from '../components/typography';

const Grid: any = MuiGrid;

interface RadiusBoxProps {
  radius: number | string;
  label: string;
  description: string;
}

const RadiusBox: React.FC<RadiusBoxProps> = ({ radius, label, description }) => {
  return (
    <Grid xs={12} sm={6} md={4}>
      <Box sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            width: '100%',
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: radius,
          }}
        >
          <Typography variant="body2">
            {typeof radius === 'number' ? `${radius}px` : radius}
          </Typography>
        </Box>
        <Typography variant="body2" fontWeight="medium">
          {label}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};

const RadiusPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <TitleL>Border Radius</TitleL>
          <BodyM sx={{ mt: 2, color: 'text.secondary' }}>
            Border Radius는 요소의 모서리를 둥글게 만들어 부드러운 시각적 효과를 제공합니다.
            MUI는 theme.shape.borderRadius를 통해 일관된 radius 값을 제공합니다.
          </BodyM>
        </Box>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            기본 Radius 값
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            MUI 테마의 기본 borderRadius: <strong>{theme.shape.borderRadius}px</strong>
          </Typography>
          <Grid container spacing={3}>
            <RadiusBox radius={0} label="Sharp" description="borderRadius: 0" />
            <RadiusBox radius={2} label="Subtle" description="borderRadius: 2" />
            <RadiusBox radius={4} label="Small (기본)" description="borderRadius: 4" />
            <RadiusBox radius={8} label="Medium" description="borderRadius: 8" />
            <RadiusBox radius={12} label="Large" description="borderRadius: 12" />
            <RadiusBox radius={16} label="Extra Large" description="borderRadius: 16" />
            <RadiusBox radius={24} label="2XL" description="borderRadius: 24" />
            <RadiusBox radius="50%" label="Circle" description="borderRadius: 50%" />
          </Grid>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            MUI Shape 시스템
          </Typography>
          <Box
            sx={{
              p: 2,
              bgcolor: 'action.hover',
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" gutterBottom>
              theme.shape.borderRadius를 사용하면 테마 전체에 일관된 radius를 적용할 수 있습니다.
            </Typography>
            <Box sx={{ mt: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem' }}>
              <code>
                shape: &#123;<br />
                &nbsp;&nbsp;borderRadius: {theme.shape.borderRadius} // 픽셀 단위<br />
                &#125;
              </code>
            </Box>
          </Box>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            사용 예제
          </Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="body2" fontWeight="medium" gutterBottom>
                1. sx prop으로 직접 지정
              </Typography>
              <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 1 }}>
                  borderRadius: 1
                </Box>
                <Box sx={{ p: 2, bgcolor: 'secondary.main', color: 'secondary.contrastText', borderRadius: 2 }}>
                  borderRadius: 2
                </Box>
                <Box sx={{ p: 2, bgcolor: 'success.main', color: 'success.contrastText', borderRadius: 3 }}>
                  borderRadius: 3
                </Box>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                <code>sx=&#123;&#123; borderRadius: 1 &#125;&#125;</code> - 1은 {theme.shape.borderRadius}px를 의미
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" fontWeight="medium" gutterBottom>
                2. 픽셀 단위로 직접 지정
              </Typography>
              <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: '8px' }}>
                  8px
                </Box>
                <Box sx={{ p: 2, bgcolor: 'secondary.main', color: 'secondary.contrastText', borderRadius: '16px' }}>
                  16px
                </Box>
                <Box sx={{ p: 2, bgcolor: 'success.main', color: 'success.contrastText', borderRadius: '24px' }}>
                  24px
                </Box>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                <code>sx=&#123;&#123; borderRadius: '16px' &#125;&#125;</code>
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" fontWeight="medium" gutterBottom>
                3. 방향별 Radius
              </Typography>
              <Stack spacing={2}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                >
                  상단만 둥글게
                </Box>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                  }}
                >
                  하단만 둥글게
                </Box>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'success.main',
                    color: 'success.contrastText',
                    borderTopLeftRadius: 24,
                    borderBottomRightRadius: 24,
                  }}
                >
                  대각선으로 둥글게
                </Box>
              </Stack>
            </Box>

            <Box>
              <Typography variant="body2" fontWeight="medium" gutterBottom>
                4. 원형 (Circle)
              </Typography>
              <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" alignItems="center">
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    borderRadius: '50%',
                  }}
                >
                  A
                </Box>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                    borderRadius: '50%',
                  }}
                >
                  B
                </Box>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'success.main',
                    color: 'success.contrastText',
                    borderRadius: '50%',
                  }}
                >
                  C
                </Box>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                <code>sx=&#123;&#123; borderRadius: '50%' &#125;&#125;</code> - 완전한 원형
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" fontWeight="medium" gutterBottom>
                5. Pill 형태
              </Typography>
              <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                <Box
                  sx={{
                    px: 3,
                    py: 1,
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    borderRadius: 999,
                  }}
                >
                  Primary Tag
                </Box>
                <Box
                  sx={{
                    px: 3,
                    py: 1,
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                    borderRadius: 999,
                  }}
                >
                  Secondary Tag
                </Box>
                <Box
                  sx={{
                    px: 3,
                    py: 1,
                    bgcolor: 'success.main',
                    color: 'success.contrastText',
                    borderRadius: 999,
                  }}
                >
                  Success Tag
                </Box>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                <code>sx=&#123;&#123; borderRadius: 999 &#125;&#125;</code> - 양 끝이 완전히 둥근 형태
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
              • 일반 카드/버튼: borderRadius 1-2 (4-8px) 권장
            </Typography>
            <Typography variant="body2">
              • 강조 요소: borderRadius 2-3 (8-12px)
            </Typography>
            <Typography variant="body2">
              • 아바타/아이콘: borderRadius 50% (원형)
            </Typography>
            <Typography variant="body2">
              • 태그/배지: borderRadius 999 (pill 형태)
            </Typography>
            <Typography variant="body2">
              • 모달/다이얼로그: borderRadius 2-4 (8-16px)
            </Typography>
            <Typography variant="body2">
              • theme.shape.borderRadius를 사용하면 전체 테마 일관성 유지
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};

export default RadiusPage;
