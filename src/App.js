import React, { Component } from 'react';
import { Home, Signup } from './pages';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {      
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Signup} />
            </div>
        );
    };
};

export default App;