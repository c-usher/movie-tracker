import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function listPost(props) {
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
	return (
		<div>
			<h1>{list.title ? list.title : ''}</h1>
			<p>{list.body ? list.body : ''}</p>
			<Link to={`/${list._id}/edit`}>
				<button>Update this List Post</button>
			</Link>
			<ul>
				{list.comments && list.comments.length
					? list.comments.map(comment => {
							return (
								<li key={comment._id}>
									<h3>{comment.name} says...</h3>
									<p>{comment.message}</p>
									<small>{comment.createdAt}</small>
								</li>
							);
					  })
					: ''}
			</ul>
		</div>
	);
}