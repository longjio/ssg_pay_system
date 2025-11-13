import React from 'react';
import { Box, Stack, Typography, Paper } from '@mui/material';
import { DsImageList, DsImageListItem } from '../components/layout/DsImageList';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { PropsTable, PropDefinition } from '../components/common';
import { TitleL, BodyM } from '../components/typography';

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
    // ImageList Props 정의
    const imageListProps: PropDefinition[] = [
        {
            name: 'variant',
            type: "'masonry' | 'quilted' | 'standard' | 'woven'",
            defaultValue: "'standard'",
            description: '이미지 리스트의 레이아웃 유형을 지정합니다.',
        },
        {
            name: 'cols',
            type: 'number',
            defaultValue: '2',
            description: '그리드의 컬럼 수를 지정합니다.',
        },
        {
            name: 'rowHeight',
            type: "number | 'auto'",
            defaultValue: "'auto'",
            description: '각 행의 높이를 지정합니다. "auto"면 콘텐츠에 맞춰 자동 조절됩니다.',
        },
        {
            name: 'gap',
            type: 'number',
            defaultValue: '4',
            description: '이미지 간의 간격(px)을 지정합니다.',
        },
        {
            name: 'sx',
            type: 'SxProps<Theme>',
            description: 'MUI의 sx prop을 사용하여 스타일을 지정합니다.',
        },
    ];

    const imageListItemProps: PropDefinition[] = [
        {
            name: 'baseImgUrl',
            type: 'string',
            required: true,
            description: '표시할 이미지의 URL입니다.',
        },
        {
            name: 'imgAlt',
            type: 'string',
            description: '이미지의 대체 텍스트(alt)입니다.',
        },
        {
            name: 'cols',
            type: 'number',
            defaultValue: '1',
            description: '이미지 아이템이 차지할 컬럼 수입니다.',
        },
        {
            name: 'rows',
            type: 'number',
            defaultValue: '1',
            description: '이미지 아이템이 차지할 행 수입니다.',
        },
        {
            name: 'withBar',
            type: 'boolean',
            defaultValue: 'false',
            description: 'true로 설정하면 이미지 하단에 정보 바를 표시합니다.',
        },
        {
            name: 'itemTitle',
            type: 'string',
            description: '정보 바에 표시될 제목입니다. withBar가 true일 때 사용됩니다.',
        },
        {
            name: 'itemSubtitle',
            type: 'string',
            description: '정보 바에 표시될 부제목입니다. withBar가 true일 때 사용됩니다.',
        },
        {
            name: 'dynamicHeight',
            type: 'number',
            description: 'Masonry 레이아웃에서 이미지의 동적 높이를 지정합니다.',
        },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Stack spacing={4}>
                <Box>
                    <TitleL>Image List</TitleL>
                    <BodyM sx={{ mt: 2, color: 'text.secondary' }}>
                        이미지 목록은 여러 이미지를 정돈된 격자(그리드) 형태로 깔끔하게 보여줍니다.
                        Standard, Quilted, Masonry 등 다양한 레이아웃을 지원합니다.
                    </BodyM>
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

                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        레이아웃 유형
                    </Typography>
                    <Stack spacing={2}>
                        <Box>
                            <Typography variant="body2" fontWeight="medium">
                                • Standard
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                동일한 크기의 이미지를 균등한 그리드로 배치
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" fontWeight="medium">
                                • Quilted
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                rows와 cols를 지정하여 다양한 크기의 이미지를 퀼트 패턴으로 배치
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" fontWeight="medium">
                                • Masonry
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                이미지의 원본 비율을 유지하며 벽돌 쌓기 패턴으로 배치
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" fontWeight="medium">
                                • Woven
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                이미지를 직조 패턴으로 배치 (교차 배열)
                            </Typography>
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
                                • 포토 갤러리
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                작품, 여행 사진 등을 그리드로 정돈하여 표시
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" fontWeight="medium">
                                • 제품 이미지
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                쇼핑몰 상품 이미지를 균등하게 배치
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" fontWeight="medium">
                                • 포트폴리오
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                작업물을 시각적으로 매력적인 레이아웃으로 구성
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" fontWeight="medium">
                                • 소셜 미디어 피드
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                사용자 업로드 이미지를 Masonry 레이아웃으로 표시
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
                            • Standard: 일관된 크기의 이미지에 적합 (제품 카탈로그 등)
                        </Typography>
                        <Typography variant="body2">
                            • Quilted: 특정 이미지를 강조하고 싶을 때 유용 (rows, cols 조절)
                        </Typography>
                        <Typography variant="body2">
                            • Masonry: 다양한 비율의 이미지에 최적 (Pinterest 스타일)
                        </Typography>
                        <Typography variant="body2">
                            • gap prop으로 이미지 간격을 조절하여 밀도 조정 가능
                        </Typography>
                        <Typography variant="body2">
                            • ImageListItemBar를 활용하여 제목, 설명, 액션 버튼 추가 가능
                        </Typography>
                    </Stack>
                </Paper>

                {/* API 문서 섹션 */}
                <Box>
                    <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        API
                    </Typography>
                    <PropsTable props={imageListProps} title="ImageList Props" />
                    <Box sx={{ mt: 3 }}>
                        <PropsTable props={imageListItemProps} title="ImageListItem Props" />
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default ImageListPage;