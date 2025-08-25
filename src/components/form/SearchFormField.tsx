// /src/components/form/SearchFormField.tsx

import React from 'react';
import { Box, TextField, TextFieldProps } from '@mui/material';
import { FormField } from './FormField';
import { FormIconButton } from '../button/FormIconButton';

/**
 * SearchFormField 컴포넌트가 받을 props 타입을 정의합니다.
 */
interface SearchFormFieldProps {
    /** FormField에 표시될 라벨입니다. */
    label: string;

    /** 코드 입력 필드(첫 번째 TextField)의 값 */
    codeValue: string;
    /** 코드 입력 필드의 값이 변경될 때 호출되는 함수 */
    onCodeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** 코드 입력 필드의 placeholder */
    codePlaceholder?: string;
    /** 코드 입력 필드의 비활성화 여부 */
    codeDisabled?: boolean;

    /** 이름 표시 필드(두 번째 TextField)의 값 */
    nameValue: string;
    /** 이름 표시 필드의 값이 변경될 때 호출되는 함수 (보통 비활성화되므로 optional) */
    onNameChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** 이름 표시 필드의 placeholder */
    namePlaceholder?: string;
    /** 이름 표시 필드의 비활성화 여부 (기본값: true) */
    nameDisabled?: boolean;

    /** 검색 아이콘 버튼을 클릭했을 때 호출되는 함수 */
    onSearchClick: () => void;

    /** 첫 번째, 두 번째 TextField에 추가로 전달할 props */
    codeTextFieldProps?: Omit<TextFieldProps, 'value' | 'onChange' | 'placeholder' | 'disabled'>;
    nameTextFieldProps?: Omit<TextFieldProps, 'value' | 'onChange' | 'placeholder' | 'disabled'>;
}

/**
 * [코드 Textfield] - [검색 버튼] - [이름 TextField] 형태의 복합 입력 컴포넌트입니다.
 * FormField로 감싸져 있어 일관된 UI를 제공합니다.
 */
export const SearchFormField: React.FC<SearchFormFieldProps> = ({
                                                                    label,
                                                                    codeValue,
                                                                    onCodeChange,
                                                                    codePlaceholder = '',
                                                                    codeDisabled = false,
                                                                    nameValue,
                                                                    onNameChange,
                                                                    namePlaceholder = '',
                                                                    nameDisabled = true,
                                                                    onSearchClick,
                                                                    codeTextFieldProps,
                                                                    nameTextFieldProps,
                                                                }) => {
    // label과 input을 연결하기 위한 고유 ID 생성
    const fieldId = React.useId();

    return (
        <FormField label={label} htmlFor={fieldId}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                <TextField
                    id={fieldId}
                    value={codeValue}
                    onChange={onCodeChange}
                    placeholder={codePlaceholder}
                    disabled={codeDisabled}
                    variant="outlined"
                    size="small"
                    sx={{ width: '100px' }}
                    {...codeTextFieldProps}
                />
                {/* ★★★ 핵심 수정 사항 ★★★ */}
                <FormIconButton
                    onClick={onSearchClick}
                    aria-label="search" // 접근성을 위해 추가
                    sx={{
                        // 배경색을 MUI 테마의 grey.700으로 변경
                        bgcolor: 'grey.700',
                        // 아이콘 색상은 대비가 잘 되는 흰색으로 유지
                        color: 'common.white',
                        border: 'none', // 기존 테두리 제거
                        // 호버 시 더 어두운 회색으로 변경
                        '&:hover': {
                            bgcolor: 'grey.800',
                        },
                    }}
                />
                <TextField
                    value={nameValue}
                    onChange={onNameChange}
                    placeholder={namePlaceholder}
                    disabled={nameDisabled}
                    variant="outlined"
                    size="small"
                    sx={{ flexGrow: 1, width: '160px' }}
                    {...nameTextFieldProps}
                />
            </Box>
        </FormField>
    );
};