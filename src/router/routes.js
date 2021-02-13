import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
import ListsPage from '../pages/ListPage';
import ListPost from '../pages/ListPost';

const routes = [
	{
		Component: ListsPage,
		key: 'ListsPage',
		path: '/listpage'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},

	{
		Component: ListPost,
		key: 'ListPost',
		path: '/:id'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
