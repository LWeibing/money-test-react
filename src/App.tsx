import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
`;
const Main = styled.div`
 flex-grow: 1;
 overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/labels">
              <Labels/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
            <Redirect exact from="/" to="/money"/>
          </Switch>
        </Main>
      <Nav/>
      </Wrapper>
    </Router>
  );
}


function Statistics() {
  return <h2>Home</h2>;
}

function Money() {
  return <h2>About</h2>;
}

function Labels() {
  return <h2>Users</h2>;
}

function NoMatch() {
  return <div>页面不存在，请检查地址</div>;
}

export default App;
