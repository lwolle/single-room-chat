import React, {useState} from 'react';
import styled from 'styled-components'
import {Button} from './core/Button/Button'
import {Input} from "./core/InputField/Button";

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

const onChange = (event, callback) => {
    callback(event.currentTarget.value)
}

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.currentTarget)
}

const useChangeHandler = (event) => {
    const userName = event.currentTarget.value
    useState()
}

// @todo memoize?
export const Login = () => {
    const [userName, setUserName] = useState('');

    return (<Layout>
            <InputContainer>
                <form onSubmit={handleSubmit}>
                    <Input/>
                </form>
            </InputContainer>
            <Button>Login</Button>
        </Layout>
    )
}
