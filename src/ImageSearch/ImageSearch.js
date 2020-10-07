import React from 'react';
import { Link } from 'react-router-dom'

import './ImageSearch.css';

const ImageSearch = ({ handleGetRequest }) => {
	// props successfully being logged
	// console.log(props);
	return (
		<div className='imageSearch'>
			<div>
				<form onSubmit={handleGetRequest} className='imageSearch_form'>
					<Link to='/image'>
						<input
							type='text'
							autoComplete='off'
							name='searchValue'
							placeholder='search for images...'
						/>
					</Link>
					<button>Search</button>
				</form>

				<button className='active-recipe_button'>
					<Link to='/'>Home</Link>
				</button>
			</div>
		</div>
	);};

export default ImageSearch;
