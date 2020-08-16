import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
  tagIds: number[]
  note: string
  type: '-' | '+'
  amount: number
  createdAt: string
}
type newRecordItem = Omit<RecordItem, 'createdAt'> //排除 createdAt

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);
  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.tagIds.length === 0) {
      alert('至少选择一个标签');
      return false;
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    return true;
  };
  return {records, addRecord};
};