import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Post from './components/post'


const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/post/:id" component={Post}/>
            <Route path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
