import React, { useState, useEffect, useRef } from 'react';
import Movie from './Movie';

export default function App(props) {
	const [query, updateQuery] = useState({
		baseURL: 'http://www.omdbapi.com/?',
		apiKey: 'apikey=' + '2d475191',
		option: '&t=',
		title: '',
		searchURL: ''
	});
	const titleInput = useRef(null);
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
				} finally {
					updateQuery({
						baseURL: 'http://www.omdbapi.com/?',
						apiKey: 'apikey=' + '2d475191',
						option: '&t=',
						title: '',
						searchURL: ''
					});
				}
			}
		})();
	}, [query]);

	const handleSubmit = e => {
		e.preventDefault();
		const title = titleInput.current.value;
		query.title = title;
		updateQuery({
			...query,
			searchURL: query.baseURL + query.apiKey + query.option + query.title
		});
	};

	return (
		<div>
			<div>{Object.keys(movie).length ? <Movie movie={movie} /> : ''}</div>
			<form onSubmit={handleSubmit}>
				<label>
					Enter Movie Title: <input type="text" ref={titleInput} />
				</label>
				<input type="submit" value="Search" />
			</form>
		</div>
	);
}
