import Layout from '../components/Layout';
import React from 'react';
import Tag from '../components/Money/TagSection';
import Type from '../components/Money/TypeSection';
import Notes from '../components/Money/NotesSection';
import NumberPad from '../components/Money/NumberPadSection';




function Money() {
  return (
    <Layout>
      <Type/>
      <Tag/>
      <Notes/>
      <NumberPad/>
    </Layout>
  );
}

export default Money;