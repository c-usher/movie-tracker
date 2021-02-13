import React from 'react';

export default function Movies(props) {
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
						{/* <select value="Add To List">
							<option>List 1</option>
							<option>List 2</option>
							<option>List 3</option>
						</select> */}
					</div>
				);
			})}
		</div>
	);
}
