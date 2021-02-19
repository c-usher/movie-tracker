import React, { useState, useEffect } from 'react';

export default function Movies(props) {
	// const [favorite, setFavorite] = useState([]);
	const handleAdd = async i => {
		const movie = JSON.stringify({
			poster: i.Poster,
			title: i.Title,
			type: i.Type,
			year: i.Year,
			imdbID: i.imdbID,
			review: String
		});

		try {
			const response = await fetch('/api/lists', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: movie
			});
		} catch (e) {
			console.error(e);
		} finally {
			window.location.assign('/list');
		}
	};
	return (
		<div className="movies">
			{props.movie.Search.map(i => {
				return (
					<div key={i.imdbID}>
						<h2>Title: {i.Title}</h2>
						<h3>Year Release: {i.Year}</h3>
						<div className="movie-image">
							<img src={i.Poster} />
						</div>
						<button onClick={() => handleAdd(i)}>Add to Favorites</button>
					</div>
				);
			})}
		</div>
	);
}
