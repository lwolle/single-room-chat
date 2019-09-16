import React, { useState } from 'react';
import { Layout } from './Layout';
import { InputContainer } from './InputContainer';
import { Button } from '../../core/Button/Button';
import { Input } from '../../core/InputField/InputField';

const useOnChange = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.currentTarget.value);
    };

    return { value, handleChange };
};

// @todo memoize?
export const Login = ({ login }) => {
    const { value, handleChange } = useOnChange();

    return (
        <Layout>
            <InputContainer>
                <Input value={ value } onChange={ handleChange } />
            </InputContainer>
            { /* eslint-disable react/jsx-no-bind */ }
            <Button onClick={ login.bind(null, value) }>
                Login
            </Button>
        </Layout>
    );
};
