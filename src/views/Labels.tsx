import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {CreatedButton} from '../components/CreatedButton';
import {Link} from 'react-router-dom';

const TagsList = styled.div`
    background: white;
    font-size: 16px;
    padding:0 16px;
    > ol{
      > li {
        border-bottom: 1px solid #e6e6e6;
       > a{
       min-height: 44px;
       display: flex;
        align-items: center;
        justify-content: space-between;
       }
      }
    }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 28px;
`;


function Labels() {
  const {tags} = useTags();
  return (
    <Layout>
      <TagsList>
        <ol>
          {tags.map(tag => <li key={tag}>
            <Link to={'/labels/' + tag}>
              <span className="oneLine">{tag}</span>
              <Icon name="right"/>
            </Link>
          </li>)}
        </ol>
        <ButtonWrapper>
          <CreatedButton>新增标签</CreatedButton>
        </ButtonWrapper>
      </TagsList>
    </Layout>
  );
}

export default Labels;