import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import PageOne from './components/page_one';
import PageTwo from './components/page_two';
import FileNotFound from './components/file_not_found';

export default (
<Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="one" component={PageOne} />
    <Route path="two" component={PageTwo} />
    <Route path="*" component={FileNotFound} />
</Route>
);
