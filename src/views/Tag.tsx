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
const InputWrapper = styled.div`
    background: white;
    margin-top: 8px;
`;
const ButtonWrapper = styled.div`
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
`;
const Tag: React.FC = () => {
  const {findTag, updateTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <span/>
      </Topbar>
      <InputWrapper>
        <Input label="标签名" placeholder="标签名" value={tag.name} onChange={(e) => {
          updateTag(tag.id, {name: e.target.value});
        }}/>
      </InputWrapper>
      <ButtonWrapper>
        <CreatedButton>删除标签</CreatedButton>
      </ButtonWrapper>
    </Layout>
  );
};
export {Tag};