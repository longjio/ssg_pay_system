import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { DsImageList, DsImageListItem } from '../components/layout/DsImageList';
import ComponentShowcase from '../components/common/ComponentShowcase';

// 예시 이미지 데이터
// 'img' URL에서 기존의 Unsplash 쿼리 파라미터를 모두 제거하여 순수한 기본 URL만 남깁니다.
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format',
        title: 'Burger',
        author: '@rollelite_dn',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=121&h=121&fit=crop&auto=format',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=121&h=121&fit=crop&auto=format',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=121&h=121&fit=crop&auto=format',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=121&h=121&fit=crop&auto=format',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=242&h=121&fit=crop&auto=format',
        title: 'Bike',
        author: '@southside_design',
    },
];

// --- Standard ImageList Example ---
const standardImageList = (
    <DsImageList cols={3} sx={{ width: 500 }} rowHeight={164}>
        {itemData.slice(0, 6).map((item) => (
            <DsImageListItem
                key={item.img}
                baseImgUrl={item.img}
                imgAlt={item.title}
            />
        ))}
    </DsImageList>
);

const standardCode = `
<DsImageList cols={3} rowHeight={164}>
    {itemData.map((item) => (
        <DsImageListItem
            key={item.img}
            baseImgUrl={item.img}
            imgAlt={item.title}
        />
    ))}
</DsImageList>
`;
// Quilted 레이아웃을 위한 패턴 정의
const quiltedPattern = [
    {
        rows: 2,
        cols: 2,
    },
    {
        rows: 1,
        cols: 1,
    },
    {
        rows: 1,
        cols: 1,
    },
    {
        rows: 1,
        cols: 2,
    },
    {
        rows: 1,
        cols: 2,
    },
    {
        rows: 2,
        cols: 2,
    },
    {
        rows: 1,
        cols: 1,
    },
    {
        rows: 1,
        cols: 1,
    },
];
// --- Quilted ImageList Example ---
const quiltedImageList = (
    <DsImageList variant="quilted" cols={4} rowHeight={121} sx={{ width: 500 }}>
        {itemData.map((item, index) => {
            // 정의된 패턴을 순환하며 적용
            const pattern = quiltedPattern[index % quiltedPattern.length];
            return (
                <DsImageListItem
                    key={item.img}
                    baseImgUrl={item.img}
                    imgAlt={item.title}
                    itemTitle={item.title}
                    itemSubtitle={item.author}
                    withBar
                    cols={pattern.cols}
                    rows={pattern.rows}
                    // --- 마우스 오버 효과를 위한 sx prop 추가 ---
                    sx={{
                        // ImageListItemBar를 기본적으로 숨김(투명 처리)
                        '.MuiImageListItemBar-root': {
                            opacity: 0,
                            transition: (theme) =>
                                theme.transitions.create('opacity', {
                                    duration: theme.transitions.duration.short,
                                }),
                        },
                        // ImageListItem에 마우스 오버 시 ImageListItemBar를 보이게 함
                        '&:hover .MuiImageListItemBar-root': {
                            opacity: 1,
                        },
                    }}
                />
            );
        })}
    </DsImageList>
);

const quiltedCode = `
const quiltedPattern = [
    { rows: 2, cols: 2 },
    { rows: 1, cols: 1 },
    { rows: 1, cols: 1 },
    { rows: 1, cols: 2 },
    // ... more patterns
];

<DsImageList variant="quilted" cols={4} rowHeight={121}>
    {itemData.map((item, index) => {
        const pattern = quiltedPattern[index % quiltedPattern.length];
        return (
            <DsImageListItem
                key={item.img}
                baseImgUrl={item.img}
                imgAlt={item.title}
                itemTitle={item.title}
                itemSubtitle={item.author}
                withBar
                cols={pattern.cols}
                rows={pattern.rows}
            />
        );
    })}
</DsImageList>
`;

// --- Masonry ImageList Example ---
const masonryImageList = (
    <DsImageList variant="masonry" cols={3} gap={8} rowHeight="auto" sx={{ width: 500 }}>
        {itemData.map((item) => (
            <DsImageListItem
                key={item.img}
                baseImgUrl={item.img}
                imgAlt={item.title}
                dynamicHeight={Math.round(Math.random() * (300 - 150) + 150)}
            />
        ))}
    </DsImageList>
);

const masonryCode = `
<DsImageList variant="masonry" cols={3} gap={8} rowHeight="auto">
    {itemData.map((item) => (
        <DsImageListItem
            key={item.img}
            baseImgUrl={item.img}
            imgAlt={item.title}
            dynamicHeight={Math.round(Math.random() * (300 - 150) + 150)}
        />
    ))}
</DsImageList>
`;

const ImageListPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
            <Stack spacing={4}>
                <Box>
                    <Typography color="text.secondary" sx={{ mb: 4 }}>
                        이미지 목록은 여러 이미지를 정돈된 격자(그리드) 형태로 깔끔하게 보여줍니다
                    </Typography>
                </Box>
                <ComponentShowcase
                    title="Standard Image List"
                    description="기본 이미지 리스트는 동일한 크기의 이미지를 격자 형태로 배치합니다."
                    component={standardImageList}
                    code={standardCode}
                />
                <ComponentShowcase
                    title="Quilted Image List"
                    description="Quilted 레이아웃은 이미지를 다양한 크기로 배치하여 퀼트 패턴을 만듭니다. 마우스 오버 시 제목과 저자 정보가 표시됩니다."
                    component={quiltedImageList}
                    code={quiltedCode}
                />
                <ComponentShowcase
                    title="Masonry Image List"
                    description="각 이미지의 가로세로 비율에 맞춰 컨테이너 높이가 자동으로 조절되므로 이미지가 잘리지 않고 원본 그대로 표시되며, 주로 다른 사용자들이 올린 콘텐츠를 탐색할 때 가장 유용합니다."
                    component={masonryImageList}
                    code={masonryCode}
                />
            </Stack>
        </Box>
    );
};

export default ImageListPage;