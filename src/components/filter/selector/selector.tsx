import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { SelectStyle } from 'src/shared/const';

type Options = {
    label: string;
    value?: string;
    id: string | number;
};

type SelectorProps = {
    options: Options[];
    defaultValue: string | undefined;
    onChange: (value: string) => void;
};

const Selector = ({ options, defaultValue, onChange }: SelectorProps) => {
    const [selectValue, setSelectValue] = useState(defaultValue);

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
        setSelectValue(event.target.value);
    };

    return (
        <FormControl fullWidth size='small'>
            <Select
                value={selectValue}
                onChange={handleChange}
                sx={SelectStyle}
            >
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.value || option.id}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Selector;
