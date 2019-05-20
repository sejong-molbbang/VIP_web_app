import React, {Component} from 'react';
import { Home, Signup, Main } from 'pages';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/signup/:number" component={Signup}/>
                    <Route path="/signup" component={Signup}/>
                </Switch>
            </div>
        );
    };
};

export default App;