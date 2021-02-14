import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import ListPage from '../pages/ListPage';
const AppRouter = () => {
	const [lists, setLists] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/lists');
				const data = await response.json();
				setLists(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	return (
		<Router>
			<NavBar routes={routes} />
			<ListPage lists={lists} setLists={setLists} />

			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						component={() => <Component page={key} />}
					></Route>
				))}
			</Switch>
		</Router>
	);
};

export default AppRouter;
