import styled from 'styled-components';
import React from 'react';

const TagSection = styled.section`
    background: white;
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    > ol {
      display: flex;
      flex-wrap: wrap;
      
      > li {
        background: #f5f5f5;
        height: 24px;
        line-height: 24px;
        border-radius: 12PX;
        padding: 0 1.3em;
        margin-right: 12px;
        margin-top: 6px;
        &.selected {
          background: rgb(255, 153, 0);
          color: white;
        }
      }
    }
    > button {
        margin-top: 16px;
        background: transparent;
        border: none;
        color: rgba(255,153,0,0.5);
        border-bottom: 1px solid;
        padding: 0 4px;
      }
`;
const Tag = () => {
  return (
    <TagSection>
      <ol>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ol>
      <button>新增标签</button>
    </TagSection>
  );
};

export default Tag;