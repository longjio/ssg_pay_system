import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

/**
 * Form 내에서 TextField와 함께 사용하기 위한 범용 아이콘 버튼입니다.
 * 테두리가 있어 시각적으로 구분되며, TextField(size="small")와 높이가 같습니다.
 */
export const FormIconButton: React.FC<IconButtonProps> = ({ children, sx, ...rest }) => {
    return (
        <IconButton
            size="small"
            {...rest}
            sx={{
                // TextField (size="small")의 높이(34px)와 동일하게 설정
                height: '34px',
                width: '34px',
                // 테두리 스타일
                border: 1,
                borderColor: 'divider',
                borderRadius: 1, // theme.shape.borderRadius
                // 호버 효과
                '&:hover': {
                    bgcolor: 'action.hover',
                },
                // 외부에서 전달된 sx를 마지막에 적용하여 덮어쓰기 허용
                ...sx,
            }}
        >
            {/*
              기본 아이콘으로 SearchIcon을 제공하지만,
              children prop을 통해 다른 아이콘으로 교체할 수 있습니다.
            */}
            {children ?? <SearchIcon fontSize="small" />}
        </IconButton>
    );
};