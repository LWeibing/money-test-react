import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
  tagIds: number[]
  note: string
  type: '-' | '+' | 'dataImg' | 'dataList'
  amount: number
  createdAt: string
}
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);
  const addRecord = (Record: RecordItem) => {
    if (Record.tagIds.length === 0) {
      alert('至少选择一个标签');
      return false;
    }
    setRecords([...records, Record]);
    return true;
  };
  return {records, addRecord};
};