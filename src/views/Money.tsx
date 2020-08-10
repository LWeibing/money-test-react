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
  return (
    <MyLayout>
      <TypeSection value={selected.type} onChange={(type) => {
        setSelected({
          ...selected, type: type
        });
      }}/>
      <TagsSection value={selected.tags} onChange={(tags) => setSelected({
        ...selected, tags: tags
      })}/>
      <NoteSection value={selected.note} onChange={(note) => {
        setSelected({
          ...selected, note: note
        });
      }}/>
      <NumberPadSection value={selected.amount} onChange={(amount) => {
        setSelected({
          ...selected, amount: amount
        });
      }} onOk={() => {}}/>
    </MyLayout>
  );
}

export default Money;