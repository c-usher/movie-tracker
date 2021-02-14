import React from 'react';
import App from '../pages/App';
import UpdateList from '../pages/UpdateList';
import ShowList from '../pages/ShowList';

const routes = [
	{
		Component: ShowList,
		key: 'ShowList',
		path: '/:id'
	},
	{
		Component: UpdateList,
		key: 'UpdateList',
		path: '/:id/edit'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
