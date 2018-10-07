import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ProductPage from './routes/Products';
import Layout from './layouts/Layout'
import EnvManage from './routes/EnvManage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/l" exact component={Layout} />
        <Route path="/envManage" exact component={EnvManage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
