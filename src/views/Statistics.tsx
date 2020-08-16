import Layout from '../components/Layout';
import React, {useState} from 'react';
import {TypeSection} from '../components/Money/TypeSection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import dayjs from 'dayjs';

const Tab = styled.div`
  background: white;
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


function Statistics() {
  const [type, setType] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const selectedRecord = records.filter(r => r.type === type);
  const hash: { [K: string]: RecordItem[] } = {};

  selectedRecord.forEach(r => {
    const key = dayjs(r.createdAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    } else {
      hash[key].push(r);
    }
  });

  const Header = styled.div`
    .title{
      padding: 8px 16px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      color: rgb(255, 153, 0);
      border-bottom: 1px solid rgb(255, 153, 0);
      }
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
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  return (
    <Layout>
      <Tab>
        <TypeSection value={type} onChange={value => setType(value)}/>
      </Tab>
      {array.map(([date, records]) => <div key={date}>
        <Header>
          <h3 className="title">{timeTitle(date)}</h3>
        </Header>
        {records.map(r => {
          return <Item key={r.amount} className="oneLine">
            <span>{r.tagIds.map(t => getName(t))}</span>
            <span className="notes">{r.note}</span>
            <span>¥ {r.amount}</span>
          </Item>;
        })}
      </div>)}
    </Layout>
  );
}

export default Statistics;