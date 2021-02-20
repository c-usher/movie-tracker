import React, { useState, useEffect } from 'react';
import Movies from './Movies';

export default function App(props) {
	const [query, updateQuery] = useState({
		baseURL: 'https://www.omdbapi.com/?',
		apiKey: 'apikey=' + '2d475191',
		option: '&s=',
		title: '',
		searchURL: ''
	});
	const [movie, setMovie] = useState({});
	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					await setMovie(data);
				} catch (error) {
					console.error(error);
				}
			}
		})();
	}, [query]);

	const handleChange = event => {
		updateQuery({
			...query,
			...{
				[event.target.id]: event.target.value
			}
		});
	};
	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.apiKey + query.option + query.title
		});
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<label htmlFor="title"> Title</label>
				<input
					id="title"
					type="text"
					value={query.title}
					onChange={handleChange}
				/>
				<input
					className="button-primary"
					type="submit"
					value="Find Movie Info"
				/>
			</form>
			<div>{Object.keys(movie).length ? <Movies movie={movie} /> : ''}</div>
		</div>
	);
}
