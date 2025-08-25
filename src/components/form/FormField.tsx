// D:/ssg_pay_system/src/components/form/FormField.tsx

import React from 'react';
import { Stack, StackProps, TypographyProps, Typography } from '@mui/material';
// BodyM 컴포넌트가 없을 경우를 대비해 Typography를 직접 사용하도록 수정할 수 있습니다.
// import { BodyM } from '../typography';

interface ExtendedBodyMProps extends TypographyProps {
    htmlFor?: string;
}

interface FormFieldProps extends Omit<StackProps, 'direction' | 'spacing'> {
    label: string;
    htmlFor: string;
    /**
     * 라벨의 고정 너비를 설정합니다. (e.g., 100, '100px')
     */
    labelWidth?: number | string;
}

export const FormField: React.FC<FormFieldProps> = ({
                                                        label,
                                                        htmlFor,
                                                        labelWidth = 90, // ★ 1. 기본 너비를 110px로 설정
                                                        children,
                                                        sx,
                                                        ...rest
                                                    }) => {
    // BodyM이 없을 경우 Typography를 사용합니다.
    const LabelComponent = Typography as React.FC<ExtendedBodyMProps>;

    return (
        <Stack
            direction="row"
            alignItems="center"
            sx={{
                gap: '12px',
                '& .MuiInputBase-root': {
                    height: '34px',
                },
                '& .MuiInputBase-multiline': {
                    height: 'auto',
                },
                ...sx,
            }}
            {...rest}
        >
            <LabelComponent
                component="label"
                htmlFor={htmlFor}
                sx={{
                    flexShrink: 0,
                    fontWeight: 500,
                    width: labelWidth, // ★ 2. labelWidth prop 적용
                    // 추가: 텍스트가 길어질 경우를 대비
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                {label}
            </LabelComponent>
            {children}
        </Stack>
    );
};