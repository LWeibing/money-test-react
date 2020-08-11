import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from 'components/Money/TagsSection';
import {NoteSection} from 'components/Money/NoteSection';
import {TypeSection} from 'components/Money/TypeSection';
import {NumberPadSection} from 'components/Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Type = '-' | '+';

function Money() {
  const [selected, setSelected] = useState({
    type: '-' as Type,
    tags: [] as string[],
    note: '',
    amount: 0
  });
  type Selected = typeof selected
  const onChange = (obj: Partial<Selected>) => {  //Partial 可以使用部分类型
    setSelected({...selected, ...obj});
  };
  return (
    <MyLayout>
      <TypeSection value={selected.type} onChange={(type) => onChange({type})}/>
      <TagsSection value={selected.tags} onChange={(tags) => onChange({tags})}/>
      <NoteSection value={selected.note} onChange={(note) => onChange({note})}/>
      <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount})} onOk={() => {}}/>
    </MyLayout>
  );
}

export default Money;