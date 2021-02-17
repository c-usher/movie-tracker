import React from 'react';
import App from '../pages/App';
import ShowList from '../pages/ShowList';
import UpdateList from '../pages/UpdateList';
import MovieSearch from '../pages/MovieSearch';

const routes = [
	{
		Component: MovieSearch,
		key: 'MovieSearch',
		path: '/:id'
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
		key: 'App',
		path: '/'
	}
];

export default routes;
