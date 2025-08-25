
import React from 'react';
// DsButton이 정의된 파일 경로가 올바른지 확인해주세요.
import { DsButton, DsButtonProps } from './DsButton';

/**
 * @description '조회' 텍스트를 가진 표준 버튼입니다.
 */
export const SearchButton: React.FC<DsButtonProps> = (props) => {
    return (
        <DsButton variant="contained" {...props}>
            조회
        </DsButton>
    );
};