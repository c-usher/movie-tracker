import React, { useState, useEffect, useRef } from 'react';
export default function UpdateList(props) {
	const [list, setList] = useState({
		title: '',
		body: ''
	});
	const [didDelete, setDidDelete] = useState(false);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);
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
	}, [list, didDelete]);

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
			window.location.assign('/');
		}
	};
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/lists/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleInput.current.value,
					body: bodyInput.current.value
				})
			});
			const data = await response.json();
			setList(data);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div>
			<h1>{list.title ? list.title : ''}</h1>
			<p>{list.body ? list.body : ''}</p>
			<button onClick={handleDelete}>Delete List</button>
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
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				<label>
					{' '}
					Title:{' '}
					<input type="text" ref={titleInput} defaultValue={list.title} />
				</label>
				<label>
					{' '}
					Body: <input type="text" ref={bodyInput} defaultValue={list.body} />
				</label>
				<input type="submit" value="Update MicroList" />
			</form>
		</div>
	);
}
