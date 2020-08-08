import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
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
    </Router>
  );
}


function Statistics() {
  return (
    <Layout>
      <h2>统计</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账</h2>
    </Layout>
  );
}

function Labels() {
  return (
    <Layout>
      <h2>标签</h2>
    </Layout>
  );
}

function NoMatch() {
  return <div>页面不存在，请检查地址</div>;
}

export default App;
