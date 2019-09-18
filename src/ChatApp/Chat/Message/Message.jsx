import React from 'react';

import { Content } from './Content';
import { Container } from './Container';

export const Message = ({ isMine, text }) => (
    <Container>
        <Content isMine={ isMine }>
            { text }
        </Content>
    </Container>
);
