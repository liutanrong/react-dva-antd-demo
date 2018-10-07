import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ProductPage from './routes/Products';
import Layout from './layouts/Layout'
import EnvManage from './routes/EnvManage'
import SystemManage from './routes/SystemManage'
import AccessRecord from './routes/AccessRecord'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/l" exact component={Layout} />
        <Route path="/envManage" exact component={EnvManage} />
        <Route path="/systemManage" exact component={SystemManage} />
        <Route path="/accessRecord" exact component={AccessRecord} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
