import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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

const TypeSection: React.FC = () => {
  const typeMap = {'-': '支出', '+': '收入'};
  type Keys =  keyof typeof typeMap // 获取 typeMap 的key作为类型
  const [typeList] = useState<Keys[]>(['-', '+']);
  const [type, setType] = useState('-');

  return (
    <Wrapper>
      <ol>
        {typeList.map(t => <li className={type === t ? 'selected' : ''}
                               onClick={() => {setType(t);}}>{typeMap[t]}</li>)}
      </ol>
    </Wrapper>
  );
};

export {TypeSection};