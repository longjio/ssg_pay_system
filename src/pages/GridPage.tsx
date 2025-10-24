// src/pages/GridPage.tsx

import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// ✅ FIX: DsGridItemStyled를 올바르게 import 합니다.
import DsGrid, { DsGridItemStyled } from '../components/layout/DsGrid';
import ComponentShowcase from '../components/common/ComponentShowcase';

const DsGridPage = () => {
    const basicGrid = (
        <DsGrid container spacing={2}>
            {/* ✅ FIX: 'size' prop 대신 xs, sm, md 등의 breakpoint prop을 사용합니다. */}
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
import DsGrid, { DsGridItemStyled } from '../components/layout/DsGrid';

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

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <ComponentShowcase
                title="Basic Grid"
                description="Material-UI의 Grid 컴포넌트를 사용하여 반응형 레이아웃을 구성합니다. 너비는 12등분 시스템을 기반으로 합니다."
                component={basicGrid}
                code={basicGridCode}
            />
        </Container>
    );
};

export default DsGridPage;