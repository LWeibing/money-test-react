import React from 'react';
import {useTags} from 'hooks/useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
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
    > .TagIcon{
    width: 24px;
    height: 24px;
    }
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
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number, name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名" placeholder="标签名" value={tag.name} onChange={(e) => {
          updateTag(tag.id, {name: e.target.value});
        }}/>
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={() => {
          deleteTag(tag.id);
        }}>删除标签</Button>
      </ButtonWrapper>
    </div>
  );
  const onClickBack = () => {
    window.history.back();
  };
  return (
    <Layout>
      <Topbar>
        <Icon name="left" className="TagIcon" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon className="TagIcon"/>
      </Topbar>
      {tag ? tagContent(tag) : <p>tag 不存在</p>}
    </Layout>
  );
};
export {Tag};