import Layout from '../components/Layout';
import React from 'react';
import Tag from '../components/Money/TagSection';
import Type from '../components/Money/TypeSection';
import Notes from '../components/Money/NotesSection';
import NumberPad from '../components/Money/NumberPadSection';
import styled from 'styled-components';

const MyLayout=styled(Layout)`
  display: flex;
  flex-direction: column;
`
function Money() {
  return (
    <MyLayout>
      <Type/>
      <Tag/>
      <Notes/>
      <NumberPad/>
    </MyLayout>
  );
}

export default Money;