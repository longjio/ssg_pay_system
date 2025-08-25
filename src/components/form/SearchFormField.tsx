// D:/ssg_pay_system/src/components/form/SearchFormField.tsx

import React from 'react';
import { Box, TextField, TextFieldProps } from '@mui/material';
import { FormField } from './FormField';
import { FormIconButton } from '../button/FormIconButton';

interface SearchFormFieldProps {
    label: string;
    labelWidth?: number | string;

    /**
     * true일 경우, 코드 입력 필드와 검색 버튼을 숨깁니다.
     */
    hideCodeField?: boolean;
    /**
     * true일 경우, 이름 입력 필드(두 번째 TextField)를 숨깁니다.
     */
    hideNameField?: boolean;

    codeValue: string;
    onCodeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    codePlaceholder?: string;
    codeDisabled?: boolean;
    nameValue: string;
    onNameChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    namePlaceholder?: string;
    nameDisabled?: boolean;
    onSearchClick: () => void;
    codeTextFieldProps?: Omit<TextFieldProps, 'value' | 'onChange' | 'placeholder' | 'disabled'>;
    nameTextFieldProps?: Omit<TextFieldProps, 'value' | 'onChange' | 'placeholder' | 'disabled'>;
}

export const SearchFormField: React.FC<SearchFormFieldProps> = ({
                                                                    label,
                                                                    labelWidth,
                                                                    hideCodeField = false,
                                                                    hideNameField = false,
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
    const fieldId = React.useId();

    return (
        <FormField label={label} htmlFor={fieldId} labelWidth={labelWidth}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                {/* hideCodeField가 false일 때만 코드 필드와 검색 버튼을 렌더링 */}
                {!hideCodeField && (
                    <>
                        <TextField
                            id={fieldId}
                            value={codeValue}
                            onChange={onCodeChange}
                            placeholder={codePlaceholder}
                            disabled={codeDisabled}
                            variant="outlined"
                            size="small"
                            sx={{
                                flexGrow: hideNameField ? 1 : 0,
                                width: hideNameField ? 'auto' : '90px',
                            }}
                            {...codeTextFieldProps}
                        />
                        <FormIconButton
                            onClick={onSearchClick}
                            aria-label="search"
                            sx={{
                                bgcolor: 'grey.700',
                                color: 'common.white',
                                border: 'none',
                                '&:hover': {
                                    bgcolor: 'grey.800',
                                },
                            }}
                        />
                    </>
                )}
                {/* hideNameField가 false일 때만 이름 필드를 렌더링 */}
                {!hideNameField && (
                    <TextField
                        value={nameValue}
                        onChange={onNameChange}
                        placeholder={namePlaceholder}
                        disabled={nameDisabled}
                        variant="outlined"
                        size="small"
                        sx={{
                            flexGrow: 1,
                            // 코드 필드가 숨겨지면 전체 너비를 차지하도록 설정
                            width: hideCodeField ? '100%' : '150px',
                        }}
                        {...nameTextFieldProps}
                    />
                )}
            </Box>
        </FormField>
    );
};
