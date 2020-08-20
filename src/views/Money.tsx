import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from 'components/Money/TagsSection';
import {NoteSection} from 'components/Money/NoteSection';
import {TypeSection} from 'components/Money/TypeSection';
import {NumberPadSection} from 'components/Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';
import {Qrcord} from '../components/Qrcode';
import dayjs from 'dayjs';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Type = '-' | '+';

const defaultFormData = {
  type: '-' as Type,
  tagIds: [] as number[],
  note: '',
  amount: 0,
  createdAt: dayjs().format('YYYY-MM-DD')
};

function Money(this: any) {
  const metaWidth = document.documentElement.clientWidth;
  const [selected, setSelected] = useState(defaultFormData);
  type Selected = typeof selected
  const onChange = (obj: Partial<Selected>) => {  //Partial 可以使用部分类型
    setSelected({...selected, ...obj});
  };
  const {addRecord} = useRecords();
  const submit = () => {

    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };
  return (
    <MyLayout scrollTop={9999}>
      <TypeSection value={selected.type} onChange={(type) => onChange({type})}/>
      <TagsSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds})}/>
      <NoteSection value={selected.note} text="备注" type="text" onChange={(note) => onChange({note})}/>
      <NoteSection value={selected.createdAt} text="日期" type="date" onChange={(createdAt) => onChange({createdAt})}/>
      <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount})}
                        onOk={submit} key={Math.random()}/>
      {metaWidth > 500 ? <Qrcord/> : ''}
    </MyLayout>
  );
}

export default Money;