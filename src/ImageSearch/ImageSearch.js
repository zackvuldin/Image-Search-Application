import React from 'react';

import './ImageSearch.css';

const ImageSearch = ({ handleGetRequest }) => {
	// props successfully being logged
	// console.log(props);
	return (
	<div className='imageSearch'>
		<div>
			<form onSubmit={handleGetRequest} className='imageSearch_form'>
				<input type='text' autoComplete='off' name='searchValue' placeholder='search for images...'/>
				<button>Search</button>
			</form>
		</div>
	</div>
	)};

export default ImageSearch;


	// props successfully being logged
	// console.log(props);