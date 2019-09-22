import styled from 'styled-components';
import { theme } from '../../core/theme';

export const Layout = styled.div`
    height: 100%;
    width: 100%;
    background: ${ theme.color.secondary };
`;

export const Inner = styled.div`
    height: 100%;
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    padding: 40px 0;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: center;
`;
