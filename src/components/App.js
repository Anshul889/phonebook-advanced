import React from 'react';
import NumberList from './NumberList';
import history from '../history';
import Header from './Header';
import ContactCreate from './streams/ContactCreate';
import { Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={NumberList}></Route>
            <Route path="/contacts/new" exact component={ContactCreate}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
};

export default App;
