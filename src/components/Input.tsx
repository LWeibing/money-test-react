import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size: 14px;
    padding: 6px 16px;
    display: flex;
    align-items: center;
    > span{
      padding-right: 16px;
    }
    > input{
      height: 40px;
      padding: 18px 16px;
      flex-grow: 1;
      background: white;
      border: 1px solid rgba(255, 153, 0, 0.3);
      border-radius: 20px;
    }
`;

type Props = {
  label: string,
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;
  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest}/>
    </Label>
  );
};
export {Input};