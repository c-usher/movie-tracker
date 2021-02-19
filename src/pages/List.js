import React, { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

export default function List(props) {
	const [favorites, setFavorites] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/lists`);
				const data = await response.json();
				setFavorites(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleDelete = async evt => {
		try {
			const response = await fetch(`/api/lists/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
		} catch (e) {
			console.error(e);
		} finally {
			window.location.assign('/list');
		}
	};
	return (
		<div>
			<ul>
				{favorites.map(movie => {
					return (
						<li key={movie.imdbID}>
							<h2>{movie.title}</h2>
							<Link to={`/${movie._id}`}>
								<img src={movie.poster} />
							</Link>
							<h4>{movie.year}</h4>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
