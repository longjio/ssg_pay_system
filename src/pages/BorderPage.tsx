import React from 'react';
import { Box, Paper, Typography, Stack, Grid as MuiGrid, useTheme } from '@mui/material';
import { TitleL, BodyM } from '../components/typography';

const Grid: any = MuiGrid;

interface BorderBoxProps {
  borderWidth: number;
  label: string;
}

const BorderBox: React.FC<BorderBoxProps> = ({ borderWidth, label }) => {
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
            bgcolor: 'background.paper',
            border: `${borderWidth}px solid`,
            borderColor: 'primary.main',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {borderWidth}px
          </Typography>
        </Box>
        <Typography variant="body2" fontWeight="medium">
          {label}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.7rem' }}>
          border: {borderWidth}px solid
        </Typography>
      </Box>
    </Grid>
  );
};

const BorderPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <TitleL>Border</TitleL>
          <BodyM sx={{ mt: 2, color: 'text.secondary' }}>
            Border는 요소의 경계를 정의하고 시각적 구분을 제공합니다.
            이 프로젝트는 그림자(shadow) 대신 border 기반 디자인을 사용합니다.
          </BodyM>
        </Box>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Border Width
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            다양한 두께의 border를 사용할 수 있습니다.
          </Typography>
          <Grid container spacing={3}>
            <BorderBox borderWidth={1} label="1px (기본)" />
            <BorderBox borderWidth={2} label="2px (강조)" />
            <BorderBox borderWidth={3} label="3px" />
            <BorderBox borderWidth={4} label="4px (두껍게)" />
          </Grid>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Border Style
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            다양한 스타일의 border를 사용할 수 있습니다.
          </Typography>
          <Stack spacing={2}>
            <Box
              sx={{
                p: 2,
                border: '2px solid',
                borderColor: 'primary.main',
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="body2">Solid (기본)</Typography>
              <Typography variant="caption" color="text.secondary">
                border: 2px solid
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                border: '2px dashed',
                borderColor: 'primary.main',
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="body2">Dashed</Typography>
              <Typography variant="caption" color="text.secondary">
                border: 2px dashed
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                border: '2px dotted',
                borderColor: 'primary.main',
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="body2">Dotted</Typography>
              <Typography variant="caption" color="text.secondary">
                border: 2px dotted
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                border: '4px double',
                borderColor: 'primary.main',
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="body2">Double</Typography>
              <Typography variant="caption" color="text.secondary">
                border: 4px double
              </Typography>
            </Box>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            프로젝트 기본 설정
          </Typography>
          <Box
            sx={{
              p: 2,
              bgcolor: 'action.hover',
              borderRadius: 1,
              fontFamily: 'monospace',
              fontSize: '0.85rem',
            }}
          >
            <Typography variant="body2" component="div" gutterBottom>
              이 프로젝트의 Paper 컴포넌트는 기본적으로 1px solid border를 사용합니다:
            </Typography>
            <Box sx={{ mt: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
              <code>
                MuiPaper: &#123;<br />
                &nbsp;&nbsp;styleOverrides: &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;root: &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boxShadow: 'none',<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border: `1px solid $&#123;theme.palette.divider&#125;`<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                &nbsp;&nbsp;&#125;<br />
                &#125;
              </code>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              theme.palette.divider는 light 모드에서 rgba(0,0,0,0.12), dark 모드에서 rgba(255,255,255,0.12)입니다.
            </Typography>
          </Box>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            사용 예제
          </Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="body2" fontWeight="medium" gutterBottom>
                1. 전체 Border
              </Typography>
              <Box
                sx={{
                  p: 2,
                  border: 1,
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                }}
              >
                border: 1
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                <code>sx=&#123;&#123; border: 1, borderColor: 'divider' &#125;&#125;</code>
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" fontWeight="medium" gutterBottom>
                2. 방향별 Border
              </Typography>
              <Stack spacing={2}>
                <Box
                  sx={{
                    p: 2,
                    borderTop: 2,
                    borderColor: 'primary.main',
                    bgcolor: 'background.paper',
                  }}
                >
                  borderTop: 2
                </Box>
                <Box
                  sx={{
                    p: 2,
                    borderBottom: 2,
                    borderColor: 'secondary.main',
                    bgcolor: 'background.paper',
                  }}
                >
                  borderBottom: 2
                </Box>
                <Box
                  sx={{
                    p: 2,
                    borderLeft: 4,
                    borderColor: 'success.main',
                    bgcolor: 'background.paper',
                  }}
                >
                  borderLeft: 4 (강조 효과)
                </Box>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                borderTop, borderRight, borderBottom, borderLeft 속성 사용
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" fontWeight="medium" gutterBottom>
                3. 색상별 Border
              </Typography>
              <Grid container spacing={2}>
                {[
                  { color: 'primary.main', label: 'Primary' },
                  { color: 'secondary.main', label: 'Secondary' },
                  { color: 'success.main', label: 'Success' },
                  { color: 'error.main', label: 'Error' },
                  { color: 'warning.main', label: 'Warning' },
                  { color: 'info.main', label: 'Info' },
                ].map((item) => (
                  <Grid xs={6} sm={4} key={item.label}>
                    <Box
                      sx={{
                        p: 2,
                        border: 2,
                        borderColor: item.color,
                        bgcolor: 'background.paper',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="caption">{item.label}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box>
              <Typography variant="body2" fontWeight="medium" gutterBottom>
                4. Hover 효과
              </Typography>
              <Box
                sx={{
                  p: 2,
                  border: 1,
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    borderWidth: 2,
                  },
                }}
              >
                마우스를 올려보세요
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                <code>'&:hover': &#123; borderColor: 'primary.main', borderWidth: 2 &#125;</code>
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
              • 기본 구분선: border: 1, borderColor: 'divider' 사용
            </Typography>
            <Typography variant="body2">
              • 강조 효과: borderWidth를 2-4로 설정하고 색상 지정
            </Typography>
            <Typography variant="body2">
              • 왼쪽 강조선: borderLeft만 사용하여 Card나 Alert 강조
            </Typography>
            <Typography variant="body2">
              • 상태별 색상: primary(기본), success(성공), error(오류), warning(경고)
            </Typography>
            <Typography variant="body2">
              • border와 borderRadius를 함께 사용하면 둥근 테두리 생성
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};

export default BorderPage;
