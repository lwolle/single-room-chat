import styled from 'styled-components';
import { theme } from '../../core/theme';

export const MessageListContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px auto;
    overflow-y: auto;    
    background-color: ${ theme.color.white };
    box-shadow: ${ theme.elevation.z2 };
`;
