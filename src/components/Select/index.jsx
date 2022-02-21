import { nanoid } from 'nanoid';
import { useEffect } from 'react';

const Select = ({ label, options }) => {
    useEffect(() => console.log(options), [options]);
    return (
        <>
            <label>{label}</label>
            <select>
                {options.map((opt) => (
                    <option key={nanoid()}>{opt.value}</option>
                ))}
            </select>
        </>
    );
};

export default Select;
