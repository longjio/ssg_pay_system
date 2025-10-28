// D:/ssg_pay_system/src/components/input/DsDatePicker.tsx

import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';

interface DsDatePickerProps {
    value: Dayjs | null;
    onChange: (value: Dayjs | null) => void;
    width?: string | number;
    label?: string;
    disabled?: boolean;
}

export const DsDatePicker: React.FC<DsDatePickerProps> = ({
    value,
    onChange,
    width = '170px',
    label,
    disabled = false
}) => {
    return (
        <DatePicker
            value={value}
            onChange={onChange}
            label={label}
            disabled={disabled}
            slotProps={{
                textField: {
                    size: 'small',
                    variant: 'outlined',
                    sx: {
                        width: width,
                        margin: 0,
                        '& .MuiInputBase-root': {
                            height: '34px !important',
                            padding: '0 !important',
                            lineHeight: '1.4375em',
                            boxSizing: 'border-box'
                        },
                        '& .MuiOutlinedInput-input': {
                            padding: '8.5px 14px !important',
                            height: '1.4375em',
                            boxSizing: 'content-box'
                        },
                        '& .MuiPickersInputBase-sectionsContainer': {
                            padding: '5.5px 0 !important'
                        },
                        '& .MuiInputAdornment-root': {
                            height: '34px',
                            maxHeight: '34px'
                        },
                        '& .MuiIconButton-root': {
                            padding: '5px'
                        }
                    }
                }
            }}
        />
    );
};
