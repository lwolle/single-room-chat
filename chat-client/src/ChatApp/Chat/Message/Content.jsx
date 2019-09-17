import styled from 'styled-components';
import { theme } from '../../../core/theme';

export const Content = styled.div`
  text-align: ${ ({ isMine }) => isMine ? 'right' : 'left' };
  background: ${ ({ isMine }) => isMine ? theme.color.ownMessage : theme.color.foreignMessage };
  padding: 20px 50px;
  margin-left: ${ ({ isMine }) => isMine ? 'auto' : 'unset' };;
  margin-right: ${ ({ isMine }) => isMine ? 'unset' : 'auto' };;
  border-radius: 8px;
  width: 75%;
`;
