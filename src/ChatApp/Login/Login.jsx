import React from 'react';
import { Layout } from './Layout';
import { InputContainer } from './InputContainer';
import { Button } from '../../core/Button/Button';
import { Input } from '../../core/InputField/InputField';
import { useOnChange } from '../hooks/useOnChange';

export const Login = ({ login }) => {
    const { value, handleChange } = useOnChange();

    return (
        <Layout>
            <InputContainer>
                <Input placeholder="Enter your Username" value={ value } onChange={ handleChange } />
            </InputContainer>
            { /* eslint-disable react/jsx-no-bind */ }
            <Button onClick={ login.bind(null, value) }>
                Login
            </Button>
        </Layout>
    );
};
