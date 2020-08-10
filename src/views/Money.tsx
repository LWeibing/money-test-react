import Layout from '../components/Layout';
import React from 'react';
import NumberPad from '../components/Money/NumberPadSection';
import styled from 'styled-components';
import { TagsSection } from 'components/Money/TagsSection';
import { NoteSection } from 'components/Money/NoteSection';
import { TypeSection } from 'components/Money/TypeSection';

const MyLayout=styled(Layout)`
  display: flex;
  flex-direction: column;
`
function Money() {
  return (
    <MyLayout>
      <TypeSection/>
      <TagsSection/>
      <NoteSection/>
      <NumberPad/>
    </MyLayout>
  );
}

export default Money;