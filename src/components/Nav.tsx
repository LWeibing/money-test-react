import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

require('icons/money.svg');
require('icons/label.svg');
require('icons/statistics.svg');

const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  > ul {
     display:flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px 0;
      
      > a{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.selected{
        color: rgb(255,153,0);
        .icon{
          fill: rgb(255,153,0);
        }
    }
        .icon {
        width: 32px;
        height: 32px;
        }
      }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName='selected'>
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/labels" activeClassName='selected'>
            <Icon name="label"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName='selected'>
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;