import React, { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

export default function List(props) {
	const [favorites, setFavorites] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/lists`);
				const data = await response.json();
				console.log(data);
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
					console.log(`this is favorites${favorites}`);
					console.log(movie);
					return (
						<li key={movie.imdbID}>
							<h2>{movie.title}</h2>
							<img src={movie.poster} />
							<h4>{movie.year}</h4>
							<button onClick={handleDelete}>Delete</button>
							<Link to={`/${movie._id}/edit`}>
								<button>Add Comments</button>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
