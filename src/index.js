import './styles/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import Header from './components/header';
import Footer from './components/footer';

const App = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.querySelector('.target')
);
