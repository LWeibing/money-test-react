import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../Input';

const Wrapper = styled.section`
  > label{
  background: #eeeeee;
  font-size: 14px;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  > span{
    padding-right: 16px;
  }
  > input {
      height: 40px;
      padding: 18px 16px;
      flex-grow: 1;
      background: white;
      border: 1px solid rgba(255, 153, 0, 0.3);
      border-radius: 20px;
    }
   }
`;
type Props = {
  value: string;
  onChange: (value: string) => void;
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => props.onChange(e.target.value);
  return (
    <Wrapper>
      <Input label="备注" type="text" placeholder="在这里输入备注" value={note} onChange={onChange}/>
    </Wrapper>
  );
};
export {NoteSection};