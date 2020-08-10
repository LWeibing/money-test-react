import Layout from '../components/Layout';
import React from 'react';
import Type from '../components/Money/TypeSection';
import Notes from '../components/Money/NotesSection';
import NumberPad from '../components/Money/NumberPadSection';
import styled from 'styled-components';
import { TagsSection } from 'components/Money/TagsSection';

const MyLayout=styled(Layout)`
  display: flex;
  flex-direction: column;
`
function Money() {
  return (
    <MyLayout>
      <Type/>
      <TagsSection/>
      <Notes/>
      <NumberPad/>
    </MyLayout>
  );
}

export default Money;