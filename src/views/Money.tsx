import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Tag from '../components/Money/TagSection';
import Type from '../components/Money/TypeSection';
import Notes from '../components/Money/NotesSection';



const NumberPadSection = styled.section`
  
`
function Money() {
  return (
    <Layout>
      <Type/>
      <Tag/>
      <Notes/>
      <NumberPadSection>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清除</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>ok</button>
        <button>0</button>
        <button>.</button>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;