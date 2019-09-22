import styled from 'styled-components';
import { theme } from '../../core/theme';

export const Layout = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    background: ${ theme.color.primary };
    height: 100%;
    align-items: center;
    justify-content: center;
`;
