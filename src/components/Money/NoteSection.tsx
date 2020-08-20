import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../Input';
import dayjs from 'dayjs';

const Wrapper = styled.section`
    min-height: 60px;
    padding: 6px 0;
    background: #eeeeee;
    margin-top: -6px;
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
  type: string
  text: string
}
const NoteSection: React.FC<Props> = (props) => {
  const {value, type, text} = props;
  const day = dayjs().format('YYYY-MM-DD');
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => props.onChange(e.target.value);
  return (
    <Wrapper>
      <Input label={text} type={type} placeholder="在这里输入备注" value={value} onChange={onChange} max={day}/>
    </Wrapper>
  );
};
export {NoteSection};