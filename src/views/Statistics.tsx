import Layout from '../components/Layout';
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {TypeSection} from '../components/Money/TypeSection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import dayjs from 'dayjs';
import {Chart} from '../components/Chart';
import _ from 'lodash';

const ShowTabWrapper = styled.div`
  background: white;
  line-height: 46px;
   /deep/ li.selected {
      color: inherit;
      border-bottom: 2px solid rgb(255, 153, 0);
    }
`;
const TabWrapper = styled.div`
  line-height: 64px;
  /deep/ li.selected{
    background: rgb(255, 153, 0);
    color: white;
  }
`;
const ChartWrapper = styled.div`
  overflow:auto;
`;
const timeTitle = (string: string) => {
  const day = dayjs(string);
  const now = dayjs();
  if (day.isSame(now, 'day')) {
    return '今天';
  } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
    return '昨天';
  } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
    return '前天';
  } else if (day.isSame(now, 'year')) {
    return day.format('MM月D日');
  } else {
    return day.format('YYYY年MM月D日');
  }
};

const Header = styled.div`
      padding: 8px 16px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      color: rgb(255, 153, 0);
      border-bottom: 1px solid rgb(255, 153, 0);
  `;
const Item = styled.div`
      padding: 8px 16px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      background: white;
      .notes {
      margin-right: auto;
      margin-left: 16px;
      color: #999;
      }
`;
const NoRecord = styled.div`
  padding: 16px;
  text-align: center;
  color: #999;
`;

function Statistics() {
  const [type, setType] = useState<'-' | '+' | 'dataImg' | 'dataList'>('-');
  const [type1, setType2] = useState<'-' | '+' | 'dataImg' | 'dataList'>('dataImg');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [k: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.type === type);
  const chartWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chartWrapper.current) {
      chartWrapper.current.scrollLeft = chartWrapper.current.scrollWidth;
    }
  }, [type1]);
  const groupList = () => {
    type Result = {
      title: string; total?: number; items: RecordItem[];
    }[];
    const newList = records.filter(r => r.type === type).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    if (newList.length === 0) {return [];}
    const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.forEach(group => {
      group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
    });
    return result;
  };
  const group = groupList();
  const getOption = () => {
    const today = new Date();
    const array = [];
    for (let i = 0; i <= 29; i++) {
      const key = dayjs(today).subtract(i, 'day').format('YYYY-MM-DD');
      const found = _.find(group, {title: key});
      array.push({key: key, value: (found && found.total) || 0});
    }
    array.reverse();
    const keys = array.map(item => item.key);
    const values = array.map(item => item.value);
    return {
      tooltip: {
        show: true,
        triggerOn: 'click',
        formatter: '{c}',
        position: 'top'
      },
      grid: {
        left: 0,
        right: 0
      },
      xAxis: {
        axisTick: {alignWithLabel: true},
        type: 'category',
        data: keys,
        axisLabel: {
          formatter: function (value: string) {
            return value.substr(5);
          }
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [{
        itemStyle: {color: 'rgb(255, 153, 0)'},
        symbolSize: 8,
        data: values,
        type: 'line'
      }]
    };
  };

  selectedRecords.forEach(r => {
    const key = r.createdAt;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  const dataList = (
    <div>
      {array.length > 0 ? array.map(([date, records]) => <div key={date}>
        <Header>
          {timeTitle(date)}
          <span>¥ {group.map(r => r.title === date ? r.total : '')}</span>
        </Header>
        <div>
          {records.map(r => {
            return <Item key={Math.random()}>
              <div className="oneLine">
                {r.tagIds.map(tagId => <span
                  key={tagId}>{getName(tagId)}</span>)
                  .reduce((result, span, index, array) => result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])}
              </div>
              {r.note && <div className="notes">{r.note}</div>}
              <div>¥ {r.amount}</div>
            </Item>;
          })}
        </div>
      </div>) : <NoRecord>目前没有相关记录</NoRecord>}
    </div>
  );
  const dataImg = (
    <ChartWrapper ref={chartWrapper}>
      <Chart option={getOption()}/>
    </ChartWrapper>
  );
  return (
    <Layout>
      <TabWrapper>
        <TypeSection typeArray={['-', '+']} value={type} onChange={value => setType(value)}/>
      </TabWrapper>
      <ShowTabWrapper>
        <TypeSection typeArray={['dataImg', 'dataList']} value={type1} onChange={value => setType2(value)}/>
      </ShowTabWrapper>
      {type1 === 'dataImg' ? dataImg : dataList}
    </Layout>
  );
}

export default Statistics;