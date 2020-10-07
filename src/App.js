import React from 'react';
import './App.css';
import ImageSearch from './ImageSearch/ImageSearch'
import ImageList from './ImageList/ImageList'
import { Link, Route, Switch } from 'react-router-dom'

const API_KEY = '18550778-11774fb291f3a731ce9063d4e';

class App extends React.Component {
	state = {
		images: [],
		error: null
	};

	handleGetRequest = async (event) => {
	event.preventDefault()

		const searchTerm = event.target.elements.searchValue.value
		const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`;

		const request = await fetch(url);

		const response = await request.json();

		if (!searchTerm) {
			this.setState({ error: "Please provide a value."})
		} else {
			this.setState({ images: response.hits, error: null })
		}
	};

	render() {
		return (
			<div>
				<ImageSearch handleGetRequest={this.handleGetRequest} />
				<Switch>
					<Route>
					{this.state.error !== null ? (
						<div style={{ color: '#fff', textAlign: 'center' }}>
							{this.state.error}
						</div>
					) : (
						<ImageList images={this.state.images} />
					)}
					</Route>
					<Route>

					</Route>
				</Switch>


				{/* { this.state.images.length > 0 && this.state.images.map((image) => {
					return <p key={image.id}>{ image.tags }</p>
				})} */}
			</div>
		);
	}
}


export default App;
