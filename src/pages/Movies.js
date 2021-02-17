import React, { useState } from 'react';
import App from './App';

export default function Movies(props) {
	const [favorite, setFavorite] = useState({});
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
						<button
							onClick={() => {
								setFavorite(i);
								<MovieContext.Provider value={{ favorite: favorite }}>
									<App />
								</MovieContext.Provider>;
							}}
						>
							Add to List
						</button>

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
