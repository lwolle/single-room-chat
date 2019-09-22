import styled from 'styled-components';
import { theme } from '../../../core/theme';

export const Content = styled.div`
    display: flex;
    flex-direction: ${ ({ isMine }) => (isMine ? 'row-reverse' : 'row') };
    align-items: center;
    justify-content: flex-start;
    text-align: ${ ({ isMine }) => (isMine ? 'right' : 'left') };
    background: ${ ({ isMine }) => (isMine ? theme.color.ownMessage : theme.color.foreignMessage) };
    padding: 10px 5px;
    margin-left: ${ ({ isMine }) => (isMine ? 'auto' : 'unset') };;
    margin-right: ${ ({ isMine }) => (isMine ? 'unset' : 'auto') };;
    border-radius: 8px;
    width: 75%;
`;
