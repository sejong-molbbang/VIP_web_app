import React from 'react';
import App from 'shared/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
//<Provider store={store}><App/></Provider>

const Root = () => (
    <BrowserRouter>
        <Provider store={store}><App/></Provider>
    </BrowserRouter>
)

export default Root;