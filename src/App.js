import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Page2 from './components/page2/page2';
import Page1 from './components/page1/page1';
import Layout from './hoc/Layout/Layout';

import './App.css';

class App extends React.Component {

  render() {

  return (
    <div className="App">
      <header className="App-header">
        <Layout>

        <Switch>
          <Route path="/page2" component={Page2} /> 
          <Route path="/page1" component={Page1} /> 
          <Route path="/" exact component={Home} />
        </Switch>
        </Layout>
      </header>
    </div>
  );
  }
}

export default App;
