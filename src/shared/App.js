import React, {Component} from 'react';
import { Home, Signup, Mainscreen } from 'pages';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/mainscreen" component={Mainscreen}/>
                <Switch>
                    <Route path="/signup/:number" component={Signup}/>
                    <Route path="/signup" component={Signup}/>
                </Switch>
            </div>
        );
    };
};

export default App;