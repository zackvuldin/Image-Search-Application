import React from 'react';
import './App.css';

// my API key
const API_KEY = '18550778-11774fb291f3a731ce9063d4e';

// backticks for template literal
// replace api key with the const
const url = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`;


// function App() {
//   return (
//     <div className="App">
//       <h1> hello world </h1>
//     </div>
//   );
// }

// stackoverflow with extends react.component
class App extends React.Component {
  state = {
    images: []
  }
  // not using the traditional function b/c i dont want the keyword to bind itself to its parent method instead of its parent class
  // i want this keyword to always refer back to the app component. arrow function lets it free 
  // async = make the function return a promise and also resolve the promise automatically if its successful!
  handleGetRequest = async() => {
		// console.log to make sure its working.
		console.log('working!!!');
    // await = only turns in sync function. only works when the promise is resolved. simplifies promises.
    // fetch method = responsible for making the request
    const request = await fetch(url)
    const response = await request.json()
    this.setState({ images: response.hits })
    // console.log(response.hits)
    console.log(this.state.images)
	}
  // this method only runs first and its when the component first runs on the web browser.
  componentDidMount() {
    // "this" is referring to the app component and then in the app component we have a method called "handleGetRequest"
    this.handleGetRequest()
  }
  render () {
    return (
      <div>App Component</div>
    )
  }
}


export default App;
