import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';

function Labels() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      {tags.map(tag => <li key={tag}>{tag}</li>)}
    </Layout>
  );
}

export default Labels;