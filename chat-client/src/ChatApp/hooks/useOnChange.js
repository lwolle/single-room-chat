import { useState } from 'react';

export const useOnChange = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.currentTarget.value);
    };

    return { value, handleChange };
};
