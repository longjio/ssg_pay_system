// src/pages/GridPage.tsx

import React from 'react';
import { Box, Stack, Typography, Paper } from '@mui/material';
import DsGrid, { DsGridItemStyled } from '../components/layout/DsGrid';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { PropsTable, PropDefinition } from '../components/common';
import { TitleL, BodyM } from '../components/typography';

const DsGridPage = () => {
    // Grid Props 정의
    const gridProps: PropDefinition[] = [
        {
            name: 'container',
            type: 'boolean',
            defaultValue: 'false',
            description: 'true로 설정하면 그리드 컨테이너가 됩니다. 자식 그리드 아이템을 포함할 수 있습니다.',
        },
        {
            name: 'size',
            type: 'number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number }',
            description: '그리드 아이템의 크기를 지정합니다. 1~12 사이의 값 또는 breakpoint별 객체를 사용합니다.',
        },
        {
            name: 'spacing',
            type: 'number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number }',
            defaultValue: '0',
            description: '그리드 아이템 간의 간격을 지정합니다. 0~10 사이의 값 (각 단위는 8px).',
        },
        {
            name: 'columns',
            type: 'number',
            defaultValue: '12',
            description: '그리드의 총 컬럼 수를 지정합니다. 기본값은 12입니다.',
        },
        {
            name: 'direction',
            type: "'row' | 'row-reverse' | 'column' | 'column-reverse'",
            defaultValue: "'row'",
            description: '그리드 아이템의 배치 방향을 지정합니다.',
        },
        {
            name: 'wrap',
            type: "'nowrap' | 'wrap' | 'wrap-reverse'",
            defaultValue: "'wrap'",
            description: '그리드 아이템의 줄바꿈 방식을 지정합니다.',
        },
        {
            name: 'offset',
            type: 'number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number }',
            description: '그리드 아이템의 왼쪽 여백(offset)을 지정합니다.',
        },
    ];

    const basicGrid = (
        <DsGrid container spacing={2}>
            <DsGrid size={{ xs: 8}}>
                <DsGridItemStyled>xs=8</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 4}}>
                <DsGridItemStyled>xs=4</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 4}}>
                <DsGridItemStyled>xs=4</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 8}}>
                <DsGridItemStyled>xs=8</DsGridItemStyled>
            </DsGrid>
        </DsGrid>
    );

    const basicGridCode = `
<DsGrid container spacing={2}>
    <DsGrid size={{ xs: 8}}>
        <DsGridItemStyled>xs=8</DsGridItemStyled>
    </DsGrid>
    <DsGrid size={{ xs: 4}}>
        <DsGridItemStyled>xs=4</DsGridItemStyled>
    </DsGrid>
    <DsGrid size={{ xs: 4}}>
        <DsGridItemStyled>xs=4</DsGridItemStyled>
    </DsGrid>
    <DsGrid size={{ xs: 8}}>
        <DsGridItemStyled>xs=8</DsGridItemStyled>
    </DsGrid>
</DsGrid>
`;

    const spacingGrid = (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <Box>
                    <Typography variant="body2" gutterBottom>spacing={0}</Typography>
                    <DsGrid container spacing={0}>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                    </DsGrid>
                </Box>
                <Box>
                    <Typography variant="body2" gutterBottom>spacing={1}</Typography>
                    <DsGrid container spacing={1}>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                    </DsGrid>
                </Box>
                <Box>
                    <Typography variant="body2" gutterBottom>spacing={2}</Typography>
                    <DsGrid container spacing={2}>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                    </DsGrid>
                </Box>
                <Box>
                    <Typography variant="body2" gutterBottom>spacing={3}</Typography>
                    <DsGrid container spacing={3}>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                        <DsGrid size={{ xs: 3}}>
                            <DsGridItemStyled>xs=3</DsGridItemStyled>
                        </DsGrid>
                    </DsGrid>
                </Box>
            </Stack>
        </Box>
    );

    const spacingGridCode = `
<DsGrid container spacing={0}>
    <DsGrid size={{ xs: 3}}><DsGridItemStyled>xs=3</DsGridItemStyled></DsGrid>
    <DsGrid size={{ xs: 3}}><DsGridItemStyled>xs=3</DsGridItemStyled></DsGrid>
    <DsGrid size={{ xs: 3}}><DsGridItemStyled>xs=3</DsGridItemStyled></DsGrid>
    <DsGrid size={{ xs: 3}}><DsGridItemStyled>xs=3</DsGridItemStyled></DsGrid>
</DsGrid>

<DsGrid container spacing={2}>
    <DsGrid size={{ xs: 3}}><DsGridItemStyled>xs=3</DsGridItemStyled></DsGrid>
    <DsGrid size={{ xs: 3}}><DsGridItemStyled>xs=3</DsGridItemStyled></DsGrid>
    <DsGrid size={{ xs: 3}}><DsGridItemStyled>xs=3</DsGridItemStyled></DsGrid>
    <DsGrid size={{ xs: 3}}><DsGridItemStyled>xs=3</DsGridItemStyled></DsGrid>
</DsGrid>
`;

    const responsiveGrid = (
        <DsGrid container spacing={2}>
            <DsGrid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <DsGridItemStyled>xs=12 sm=6 md=4 lg=3</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <DsGridItemStyled>xs=12 sm=6 md=4 lg=3</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <DsGridItemStyled>xs=12 sm=6 md=4 lg=3</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <DsGridItemStyled>xs=12 sm=6 md=4 lg=3</DsGridItemStyled>
            </DsGrid>
        </DsGrid>
    );

    const responsiveGridCode = `
<DsGrid container spacing={2}>
    <DsGrid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <DsGridItemStyled>xs=12 sm=6 md=4 lg=3</DsGridItemStyled>
    </DsGrid>
    <DsGrid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <DsGridItemStyled>xs=12 sm=6 md=4 lg=3</DsGridItemStyled>
    </DsGrid>
    <DsGrid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <DsGridItemStyled>xs=12 sm=6 md=4 lg=3</DsGridItemStyled>
    </DsGrid>
    <DsGrid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <DsGridItemStyled>xs=12 sm=6 md=4 lg=3</DsGridItemStyled>
    </DsGrid>
</DsGrid>
`;

    const columnGrid = (
        <DsGrid container spacing={2}>
            <DsGrid size={{ xs: 12 }}>
                <DsGridItemStyled>xs=12 (전체 너비)</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 6 }}>
                <DsGridItemStyled>xs=6 (절반)</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 6 }}>
                <DsGridItemStyled>xs=6 (절반)</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 4 }}>
                <DsGridItemStyled>xs=4 (1/3)</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 4 }}>
                <DsGridItemStyled>xs=4 (1/3)</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 4 }}>
                <DsGridItemStyled>xs=4 (1/3)</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 3 }}>
                <DsGridItemStyled>xs=3 (1/4)</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 3 }}>
                <DsGridItemStyled>xs=3 (1/4)</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 3 }}>
                <DsGridItemStyled>xs=3 (1/4)</DsGridItemStyled>
            </DsGrid>
            <DsGrid size={{ xs: 3 }}>
                <DsGridItemStyled>xs=3 (1/4)</DsGridItemStyled>
            </DsGrid>
        </DsGrid>
    );

    const columnGridCode = `
<DsGrid container spacing={2}>
    <DsGrid size={{ xs: 12 }}>
        <DsGridItemStyled>xs=12 (전체 너비)</DsGridItemStyled>
    </DsGrid>
    <DsGrid size={{ xs: 6 }}>
        <DsGridItemStyled>xs=6 (절반)</DsGridItemStyled>
    </DsGrid>
    <DsGrid size={{ xs: 6 }}>
        <DsGridItemStyled>xs=6 (절반)</DsGridItemStyled>
    </DsGrid>
    <DsGrid size={{ xs: 4 }}>
        <DsGridItemStyled>xs=4 (1/3)</DsGridItemStyled>
    </DsGrid>
    <DsGrid size={{ xs: 4 }}>
        <DsGridItemStyled>xs=4 (1/3)</DsGridItemStyled>
    </DsGrid>
    <DsGrid size={{ xs: 4 }}>
        <DsGridItemStyled>xs=4 (1/3)</DsGridItemStyled>
    </DsGrid>
</DsGrid>
`;

    const nestedGrid = (
        <DsGrid container spacing={2}>
            <DsGrid size={{ xs: 12, md: 5, lg: 4 }}>
                <DsGridItemStyled>왼쪽 사이드바</DsGridItemStyled>
            </DsGrid>
            <DsGrid container size={{ xs: 12, md: 7, lg: 8 }} spacing={2}>
                <DsGrid size={{ xs: 12 }}>
                    <DsGridItemStyled>중첩 그리드 - 상단</DsGridItemStyled>
                </DsGrid>
                <DsGrid size={{ xs: 6 }}>
                    <DsGridItemStyled>중첩 - 좌</DsGridItemStyled>
                </DsGrid>
                <DsGrid size={{ xs: 6 }}>
                    <DsGridItemStyled>중첩 - 우</DsGridItemStyled>
                </DsGrid>
            </DsGrid>
        </DsGrid>
    );

    const nestedGridCode = `
<DsGrid container spacing={2}>
    <DsGrid size={{ xs: 12, md: 5, lg: 4 }}>
        <DsGridItemStyled>왼쪽 사이드바</DsGridItemStyled>
    </DsGrid>
    <DsGrid container size={{ xs: 12, md: 7, lg: 8 }} spacing={2}>
        <DsGrid size={{ xs: 12 }}>
            <DsGridItemStyled>중첩 그리드 - 상단</DsGridItemStyled>
        </DsGrid>
        <DsGrid size={{ xs: 6 }}>
            <DsGridItemStyled>중첩 - 좌</DsGridItemStyled>
        </DsGrid>
        <DsGrid size={{ xs: 6 }}>
            <DsGridItemStyled>중첩 - 우</DsGridItemStyled>
        </DsGrid>
    </DsGrid>
</DsGrid>
`;

    return (
        <Box sx={{ p: 3 }}>
            <Stack spacing={4}>
                <Box>
                    <TitleL>Grid</TitleL>
                    <BodyM sx={{ mt: 2, color: 'text.secondary' }}>
                        Grid는 반응형 레이아웃을 구성하기 위한 컴포넌트로, 12등분 시스템을 기반으로 화면 크기에 따라 유연하게 배치됩니다.
                    </BodyM>
                </Box>
                <ComponentShowcase
                    title="Basic Grid"
                    description="Grid 컴포넌트는 12등분 시스템을 사용합니다. 각 항목의 너비는 1~12 사이의 값으로 지정할 수 있습니다."
                    component={basicGrid}
                    code={basicGridCode}
                />
                <ComponentShowcase
                    title="Grid Spacing"
                    description="spacing prop으로 그리드 항목 간의 간격을 조절할 수 있습니다. 값은 0~10 사이로 지정하며, 각 단위는 8px입니다."
                    component={spacingGrid}
                    code={spacingGridCode}
                />
                <ComponentShowcase
                    title="Responsive Grid"
                    description="브레이크포인트별로 다른 너비를 지정하여 반응형 레이아웃을 구성합니다. xs(모바일), sm(태블릿), md(데스크톱), lg(큰 화면) 등을 사용합니다."
                    component={responsiveGrid}
                    code={responsiveGridCode}
                />
                <ComponentShowcase
                    title="Column Layouts"
                    description="12등분 시스템을 활용한 다양한 컬럼 레이아웃입니다. 12(전체), 6(절반), 4(1/3), 3(1/4) 등으로 균등 분할이 가능합니다."
                    component={columnGrid}
                    code={columnGridCode}
                />
                <ComponentShowcase
                    title="Nested Grid"
                    description="Grid 안에 Grid를 중첩하여 복잡한 레이아웃을 구성할 수 있습니다. 부모 Grid에 container prop을 추가합니다."
                    component={nestedGrid}
                    code={nestedGridCode}
                />

                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        사용 사례
                    </Typography>
                    <Stack spacing={2}>
                        <Box>
                            <Typography variant="body2" fontWeight="medium">
                                • 대시보드 레이아웃
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                카드와 위젯을 반응형 그리드로 배치
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" fontWeight="medium">
                                • 제품 목록
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                상품 카드를 균등하게 배치
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" fontWeight="medium">
                                • 폼 레이아웃
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                입력 필드를 여러 컬럼으로 구성
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" fontWeight="medium">
                                • 콘텐츠 섹션
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                사이드바와 메인 콘텐츠 영역 구성
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
                            • 12등분 시스템: 12는 2, 3, 4, 6으로 나누어떨어져 유연한 레이아웃 구성 가능
                        </Typography>
                        <Typography variant="body2">
                            • Breakpoint: xs(0px), sm(600px), md(900px), lg(1200px), xl(1536px)
                        </Typography>
                        <Typography variant="body2">
                            • container와 item을 동시에 사용하여 중첩 그리드 구성 가능
                        </Typography>
                        <Typography variant="body2">
                            • spacing 값 하나로 row와 column 간격 모두 조절 (각 단위 8px)
                        </Typography>
                        <Typography variant="body2">
                            • 반응형 디자인 시 모바일 우선(xs부터) 접근 권장
                        </Typography>
                    </Stack>
                </Paper>

                {/* API 문서 섹션 */}
                <Box>
                    <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        API
                    </Typography>
                    <PropsTable props={gridProps} title="Grid Props" />
                </Box>
            </Stack>
        </Box>
    );
};

export default DsGridPage;
