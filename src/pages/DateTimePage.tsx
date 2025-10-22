import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ComponentShowcase from '../components/common/ComponentShowcase';

export default function DateTimePage() {

    const dateTimePickerCode = `
<LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateTimePicker label="날짜 및 시간 선택" />
</LocalizationProvider>
    `;

    return (
        <Stack spacing={4} sx={{ p: 3 }}>
            <Box>
                <Typography color="text.secondary">
                    MUI X DateTime Picker를 사용하면 사용자가 날짜와 시간을 한 번에 선택할 수 있습니다.
                </Typography>
            </Box>

            <ComponentShowcase
                title="기본 Date Time Picker"
                description="날짜와 시간을 함께 선택할 수 있는 기본 피커입니다."
                component={
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker label="날짜 및 시간 선택" />
                    </LocalizationProvider>
                }
                code={dateTimePickerCode}
            />
        </Stack>
    );
}
