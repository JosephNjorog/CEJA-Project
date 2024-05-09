import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from './Home';
import NFTDetailContainer from './NFTDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/nft/:id" component={NFTDetailContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
