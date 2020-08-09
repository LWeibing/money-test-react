import styled from 'styled-components';
import React from 'react';

const TypeSection = styled.section`
  > ol{
    box-shadow:rgba(0,0,0,0.25);
    background: #eee;
    display: flex;
    text-align: center;
    font-size: 24px;
     >li{
       width: 50%;
       line-height: 64px;
       display: flex;
       justify-content: center;
       align-items: center;
       position: relative;
       &.selected {
        background: rgb(255, 153, 0);
        color: white;
      }
     }
  }
`;

const Type = () => {
  return (
    <TypeSection>
      <ol>
        <li className="selected">支出</li>
        <li>收入</li>
      </ol>
    </TypeSection>
  );
};

export default Type;