// src/pages/GridPage.tsx

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import DsGrid, { DsGridItemStyled } from '../components/layout/DsGrid';
import ComponentShowcase from '../components/common/ComponentShowcase';

const DsGridPage = () => {
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
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
            <Stack spacing={4}>
                <Box>
                    <Typography color="text.secondary" sx={{ mb: 4 }}>
                        Grid는 반응형 레이아웃을 구성하기 위한 컴포넌트로, 12등분 시스템을 기반으로 화면 크기에 따라 유연하게 배치됩니다.
                    </Typography>
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
            </Stack>
        </Box>
    );
};

export default DsGridPage;
