import React from 'react';
import App from '../pages/App';
import ShowList from '../pages/ShowList';
import UpdateList from '../pages/UpdateList';
import List from '../pages/List';

const routes = [
	{
		Component: List,
		key: 'Favorites',
		path: '/list'
	},
	{
		Component: UpdateList,
		key: 'UpdateList',
		path: '/:id/edit'
	},
	{
		Component: ShowList,
		key: 'ShowList',
		path: '/:id'
	},
	{
		Component: App,
		key: 'FindMovies',
		path: '/'
	}
];

export default routes;
