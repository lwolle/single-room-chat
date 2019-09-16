import React from 'react';

import { Content } from './Content';
import { Container } from './Container';

export const Message = ({ isMine, text }) => (
    <Container isMine={ isMine }>
        <Content>
            { text }
        </Content>
    </Container>
);
