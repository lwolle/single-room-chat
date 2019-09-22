import styled from 'styled-components';
import { theme } from '../../core/theme';

export const MessageListContainer = styled.div`
    max-width: 650px;
    width: 100%;
    margin: 20px auto;
    overflow-y: auto;    
    background-color: ${theme.color.white};
    box-shadow: ${theme.elevation.z2};
`



