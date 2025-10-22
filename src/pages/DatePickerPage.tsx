import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import DsDatePicker from '../components/mui_x/date/DsDatePicker';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DsDateRangePicker from '../components/mui_x/date/DsDateRangePicker';
import ComponentShowcase from '../components/common/ComponentShowcase';

export default function DsDatePickerPage() {
    const [controlledValue, setControlledValue] = useState<Dayjs | null>(dayjs());
    const [disabledValue, setDisabledValue] = useState<Dayjs | null>(dayjs('2023-01-15'));
    const [selectedRangeStartDate, setSelectedRangeStartDate] = useState<Dayjs | null>(null);
    const [selectedRangeEndDate, setSelectedRangeEndDate] = useState<Dayjs | null>(null);

    const handleRangeChange = (startDate: Dayjs | null, endDate: Dayjs | null) => {
        setSelectedRangeStartDate(startDate);
        setSelectedRangeEndDate(endDate);
    };

    const controlledCode = `
<DsDatePicker
    label="날짜 선택"
    value={controlledValue}
    onChange={(newValue: Dayjs | null) => {
        setControlledValue(newValue);
    }}
/>
    `;

    const disabledCode = `
<DsDatePicker
    label="비활성화된 날짜"
    value={disabledValue}
    onChange={(newValue: Dayjs | null) => setDisabledValue(newValue)}
    disabled
/>
    `;

    const readOnlyCode = `
<DsDatePicker
    label="초기값 설정"
    value={dayjs('2024-03-01')}
    onChange={() => { }}
    readOnly
/>
    `;

    const dateRangeCode = `
<DsDateRangePicker
    label="기간 선택"
    onChange={handleRangeChange}
    initialStartDate={selectedRangeStartDate}
    initialEndDate={selectedRangeEndDate}
/>
    `;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={4} sx={{ p: 3 }}>
                <Box>
                    <Typography color="text.secondary" sx={{ mb: 4 }}>
                        Date Picker는 달력 UI를 통해 날짜를 시각적으로 선택하는 데 중점을 둔 컴포넌트입니다.
                    </Typography>
                </Box>

                <ComponentShowcase
                    title="Controlled"
                    description="value와 onChange prop을 통해 제어되는 Date Picker입니다."
                    component={
                        <Stack spacing={1}>
                            <DsDatePicker
                                label="날짜 선택"
                                value={controlledValue}
                                onChange={(newValue: Dayjs | null) => {
                                    setControlledValue(newValue);
                                }}
                            />
                            <Typography variant="body2">
                                선택된 날짜: {controlledValue ? controlledValue.format('YYYY.MM.DD') : '없음'}
                            </Typography>
                        </Stack>
                    }
                    code={controlledCode}
                />

                <ComponentShowcase
                    title="Disabled"
                    description="disabled prop을 사용하여 Date Picker를 비활성화할 수 있습니다."
                    component={
                        <DsDatePicker
                            label="비활성화된 날짜"
                            value={disabledValue}
                            onChange={(newValue: Dayjs | null) => setDisabledValue(newValue)}
                            disabled
                        />
                    }
                    code={disabledCode}
                />

                <ComponentShowcase
                    title="Read Only"
                    description="readOnly prop을 사용하여 사용자가 날짜를 수정할 수 없도록 설정합니다."
                    component={
                        <DsDatePicker
                            label="읽기 전용"
                            value={dayjs('2024-03-01')}
                            onChange={() => {}}
                            readOnly
                        />
                    }
                    code={readOnlyCode}
                />

                <ComponentShowcase
                    title="Date Range Picker"
                    description="DsDateRangePicker를 사용하여 기간을 선택할 수 있습니다."
                    component={
                        <Box sx={{ width: '400px' }}>
                            <DsDateRangePicker
                                label="기간 선택"
                                onChange={handleRangeChange}
                                initialStartDate={selectedRangeStartDate}
                                initialEndDate={selectedRangeEndDate}
                            />
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                선택된 기간: {selectedRangeStartDate ? selectedRangeStartDate.format('YYYY.MM.DD') : '없음'} ~ {selectedRangeEndDate ? selectedRangeEndDate.format('YYYY.MM.DD') : '없음'}
                            </Typography>
                        </Box>
                    }
                    code={dateRangeCode}
                />
            </Stack>
        </LocalizationProvider>
    );
}
