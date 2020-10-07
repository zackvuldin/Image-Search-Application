import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import ImageView from './ImageView/ImageView';

const Router = () => {
	return (
	<BrowserRouter>
		<Switch>
			<Route path='/' component={App} exact />
			<Route path='/image/:id' component={ImageView} />
		</Switch>
	</BrowserRouter>
	)
};
// renders in jsx file, not app. with router logic
export default Router;
