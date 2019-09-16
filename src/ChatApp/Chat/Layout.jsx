import styled from 'styled-components';
import { theme } from '../../core/theme';

export const Layout = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: center;
    background: ${ theme.color.secondary };
`;
