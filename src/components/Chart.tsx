import styled from 'styled-components';
import React, {useEffect, useRef} from 'react';
import echarts from 'echarts'

const Wrapper = styled.div`
 width: 430%;
  height: 75vh;
`;
type Props = {
  option?: {}
}
const Chart: React.FC<Props> = (props) => {
  const {option} = props;
  const container = useRef(null);
  const chart = useRef(null);
  useEffect(() => {
    // @ts-ignore
    chart.current=echarts.init(container.current)
  }, []);
  useEffect(()=>{
    // @ts-ignore
    chart.current.setOption(option)
  },[option])
  return (
    <Wrapper ref={container}/>
  );
};

export {Chart};