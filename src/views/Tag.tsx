import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {CreatedButton} from 'components/CreatedButton';
import styled from 'styled-components';
import {Input} from 'components/Input';

type Params = {
  id: string
}
const Topbar = styled.header`
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <span/>
      </Topbar>
      <div>
        <Input label="标签名" placeholder={tag.name}/>
      </div>
      <div>
        <CreatedButton>删除标签</CreatedButton>
      </div>
    </Layout>
  );
};
export {Tag};