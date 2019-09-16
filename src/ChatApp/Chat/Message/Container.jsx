import styled from 'styled-components';

const getMarginLeft = ({ isMine }) => isMine ? '120px' : '20px';
const getMarginRight = ({ isMine }) => isMine ? '20px' : '120px';

export const Container = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  background: ${ ({ isMine }) => isMine ? 'lightgray' : 'lightblue' };
  margin: 40px ${ getMarginLeft } 40px ${ getMarginRight };
`;
