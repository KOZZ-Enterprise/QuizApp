import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Carousel } from './components/Carousel';

import './custom.css'
import { UserInfo } from './components/UserInfo';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
      
      //<layout>
      //  <route exact path='/' component={home} />
      //  <route path='/counter' component={counter} />
      //  <route path='/fetch-data' component={fetchdata} />
      //</layout>
          <div>
          <Carousel />
          
              <UserInfo />
            </div>
    );
  }
}
