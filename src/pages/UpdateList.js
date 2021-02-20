import React, { useState, useEffect, useRef } from 'react';
export default function UpdatePost(props) {
	const [list, setList] = useState({
		comments: ''
	});

	const input = useRef(null);

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

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/lists/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					comments: input.current.value
				})
			});
			const data = await response.json();
			setList(data);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign(`/${props.match.params.id}`);
		}
	};

	return (
		<div>
			<img src={list.poster} />
			<h3>Current Comments: {list.comments}</h3>
			<form onSubmit={handleSubmit}>
				<label>
					{' '}
					Comments:{' '}
					<input type="text" ref={input} defaultValue={list.comments} />
				</label>
				<input type="submit" value="Update Comments" />
			</form>
		</div>
	);
}
