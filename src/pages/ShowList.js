import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function ShowList(props) {
	const [list, setList] = useState({});
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/lists/${props.match.params.id}`);
				const data = await response.json();
				setList(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	console.log(list);

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/lists/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			setDidDelete(!didDelete);
		} catch (err) {
			console.error(err);
		} finally {
			window.location.assign('/list');
		}
	};
	return (
		<div>
			<h1>{list.title}{list.year}</h1>
			<img src={list.poster} />
			<h3>{list.comments}</h3>
			<Link to={`/${list._id}/edit`}>
				<button>Edit Comments</button>
			</Link>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
}
