import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
export default function App(props) {
	const [lists, setLists] = useState([]);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/lists');
				const data = await response.json();
				setLists(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	console.log(lists);

	const handleSubmit = async e => {
		e.preventDefault();
		const titleValue = titleInput.current.value;
		const bodyValue = bodyInput.current.value;
		try {
			const response = await fetch('/api/lists', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleValue,
					body: bodyValue
				})
			});
			const data = await response.json();
			setLists([...lists, data]);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="AppPage">
			{lists.map(list => {
				return (
					<div key={list._id}>
						<h2>
							<Link to={`/${list._id}`}>{list.title}</Link>
						</h2>
						<p>{list.body}</p>
					</div>
				);
			})}
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				<label>
					{' '}
					Title: <input type="text" ref={titleInput} />
				</label>
				<label>
					{' '}
					Body: <input type="text" ref={bodyInput} />
				</label>
				<input type="submit" value="Create List" />
			</form>
		</div>
	);
}
