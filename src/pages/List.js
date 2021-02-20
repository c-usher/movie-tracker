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
		<div className="container">
			<ul className="row">
				{favorites.map(movie => {
					return (
						<li className="four columns" key={movie.imdbID}>
							<Link to={`/${movie._id}`}>
								<img className="poster" src={movie.poster} />
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
