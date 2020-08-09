import styled from 'styled-components';
import React from 'react';

const NotesSection = styled.section`
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

const Notes = () => {
  return (
    <NotesSection>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里输入备注"/>
      </label>
    </NotesSection>
  );
};
export default Notes;