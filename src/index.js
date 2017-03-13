import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import routes from './routes';
import './styles/style.css';

import App from './components/app';
import Home from './components/home';
import PageOne from './components/page_one';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store} >
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="one" component={PageOne} />
            </Route>
        </Router>    
    </Provider>,
    document.querySelector('.target')
);
