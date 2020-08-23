import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  > ol{
    box-shadow:rgba(0,0,0,0.25);
    display: flex;
    text-align: center;
    font-size: 24px;
     >li{
       width: 50%;
       display: flex;
       justify-content: center;
       align-items: center;
       position: relative;
     }
  }
`;

type Props = {
  value: '-' | '+' | 'dataImg' | 'dataList';
  onChange: (value: '-' | '+' | 'dataImg' | 'dataList') => void
  typeArray: any
}
const TypeSection: React.FC<Props> = (props) => {
  const typeMap = {'-': '支出', '+': '收入', 'dataImg': '图示', 'dataList': '列表'};
  type Keys = keyof typeof typeMap // 获取 typeMap 的key作为类型
  const typeArray = props.typeArray;
  const [typeList] = useState<Keys[]>(typeArray);
  const type = props.value;
  return (
    <Wrapper>
      <ol>
        {typeList.map(t => <li className={type === t ? 'selected' : ''}
                               onClick={() => {props.onChange(t);}} key={t}>{typeMap[t]}</li>)}
      </ol>
    </Wrapper>
  );
};

export {TypeSection};