import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './core/Button/Button';
import { Input } from './core/InputField/Button';

const Layout = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    background: rgb(14,74,163);
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const InputContainer = styled.div`
    height: 50px;
`;

const useOnChange = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.currentTarget.value);
    };

    return { value, handleChange };
};

// @todo memoize?
export const Login = (props) => {
    const { value, handleChange } = useOnChange();

    return (
        <Layout>
            <InputContainer>
                <Input value={ value } onChange={ handleChange } />
            </InputContainer>
            <Button onClick={ props.login.bind(null, value) }>
                Login
            </Button>
        </Layout>
    );
};
