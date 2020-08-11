import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: rgb(255,153,0);
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
`;
const CreatedButton:React.FC = (props) => {
  return (
    <Button>
      {props.children}
    </Button>
  );
};
export {CreatedButton};