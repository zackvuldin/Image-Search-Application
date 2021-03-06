![Chitoge is my Waifu: No waifu, no laifu](https://i.pinimg.com/originals/d7/6e/4a/d76e4a9b573c62e2d9f939355c226834.gif)

# Image Search Application

## Project Links

- [github.com/zackvuldin](https://github.com/zackvuldin/Image-Search-Application)
- [netlify: zackimages](https://zackimages.netlify.app/)

---

## Project Schedule

| Day   | Deliverable                                          | Status |
| :---- | :--------------------------------------------------- | :----- |
| Day 1 | Project Approval / wire-framing / react architecture | [x]    |
| Day 2 | Making sure I can get the API recall information out | [x]    |
| Day 3 | MVP                                                  | [x]    |
| Day 4 | MVP + HTML/CSS w/ SCSS                               | [x]    |
| Day 5 | MVP/P-MVP + debugging                                | [x]    |
| Day 6 | Deadline: Presentation                               | [ ]    |

---

## Project Description

Search and browse a variety of images! I want the user to be able to enter in any keyword (Example: Fish) and it will pop up a variety of fish photos! Under the image it will have owner credit and download link. I'll call it...Vuldin Images!

---

## API Database Potentials, but didn't choose:

I spent so much time searching around the Repo for APIs and almost 90% of them were either too hard to use because it had to implement way more technologies than what I knew especially with my current time-frame. Even with all that time spent searching, I learned a lot about various of libraries and technologies. I think I spent at least 2-4 hours just reading documentation.

---

[Big ML](https://bigml.com/) - // 40min // No idea how to use the API. They want me to download or something along those lines?

Machine learning that mainly concentrates on decision trees.

---

[OpenCorporates](http://api.opencorporates.com/documentation/API-Reference) - // 15min // This API works, but kinda complicated on how to get company name out
OpenCorporates: Data on corporate entities and directors in many countries

---

[US National Vulnerability Database](https://nvd.nist.gov/vuln/Data-Feeds/JSON-feed-changelog) - // 20min // I literally have no idea how this one works.

---

[Security Trails](https://docs.securitytrails.com/docs) - Domain and IP related information such as current and historical WHOIS and DNS records

---

[IBM Watson](https://developer.ibm.com/technologies/artificial-intelligence/) - // 10 minute-works // 30min // Nevermind; it doesn’t work. You have to do a LOT more.
IBM Watson-process of preparing data and to run predictive analysis

---

[Time Door](https://timedoor.io/) - API for statistical insights into time series data

---

[OpenSource libraries](https://libraries.io/api) - OpenSource software libraries

---

[Keen](https://keen.io/) - Data analytics

---

[NASA](https://api.nasa.gov/index.html) - // 10 minutes // NASA API Works.
NASA

---

[Clarifai](https://www.clarifai.com/developer) - Clarifai, computer vision. Image and video recognition

---

[Sky Biometry](https://skybiometry.com/) - Face detection, emotional analysis, face grouping, recognition service and tagging the photo.

---

[Deep Code AI](https://www.deepcode.ai/) - AI powered, real-time semantic code analysis

---

## API

I'm using pixabay's api. It is a RESTful API for searching and retrieving free images and videos under Pixabay. This API returns JSON-encoded objects.
The documentation has a lot of utilities to use.

**EXAMPLE OF API KEY BEING USED:**

```jSON
https://pixabay.com/api/?key={ key }&q=yellow+flowers&image_type=photo
{
"total": 4692,
"totalHits": 500,
"hits": [
    {
        "id": 195893,
        "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
        "type": "photo",
        "tags": "blossom, bloom, flower",
        "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
        "previewWidth": 150,
        "previewHeight": 84,
        "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 360,
        "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
        "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
        "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
        "imageWidth": 4000,
        "imageHeight": 2250,
        "imageSize": 4731420,
        "views": 7671,
        "downloads": 6439,
        "favorites": 1,
        "likes": 5,
        "comments": 2,
        "user_id": 48777,
        "user": "Josch13",
        "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
    },
    {
        "id": 73424,
        ...
    },
    ...
]
}
```

---

## Wireframes

- [Main Page](https://res.cloudinary.com/vuldin/image/upload/v1601655749/Project%20API%20-%20WireFrames/Main_Page_wwtayb.jpg)
- [Mobile - Searched Page](https://res.cloudinary.com/vuldin/image/upload/v1601655749/Project%20API%20-%20WireFrames/mobile-searched_page_gybnhb.jpg)
- [Mobile - Destination](https://res.cloudinary.com/vuldin/image/upload/v1601655749/Project%20API%20-%20WireFrames/Mobile_Destination_ng8vry.jpg)
- [Desktop/Tablet - Searched Page](https://res.cloudinary.com/vuldin/image/upload/v1601655752/Project%20API%20-%20WireFrames/Desktop-searched_page_k5dkvh.jpg)
- [Desktop/Tablet - Destination](https://res.cloudinary.com/vuldin/image/upload/v1601655751/Project%20API%20-%20WireFrames/Desktop_Destination_wgu9cc.jpg)
- [react architecture](https://docs.google.com/drawings/d/1wEFd-Z0YbSAlLEe5Sg1_df_pZjACf_28xLhK8hvd8lA/edit?usp=sharing)

---

## MVP Time-Frame

| Component                      | Priority | Estimated Time | Actual Time |
| :----------------------------- | :------- | :------------- | :---------- |
| Making sure API link works     | H        | 1hr            | .5 hr       |
| Having the API call return     | H        | 1hr            | .5 hr       |
| Image Search going back to API | H        | 2hr            | 1 hr        |
| Image List shows images        | H        | 2hr            | 2 hr        |
| Search bar using Form          | H        | 2hr            | .5 hr       |
| Search button                  | H        | 2hr            | .5 hr       |
| Images to show                 | H        | 3hr            | 1 hr        |
| Routing                        | H        | 2hr            | 8 hr        |
| Mobile Priority                | H        | 2hr            | .5 hr       |
| Use SASS or SCSS               | H        | 2hr            | 1 hr        |
| Total                          | H        | 19hr           | 15.5 hr     |

## PostMVP Time-Frame

| Component                              | Priority | Estimated Time | Actual Time |
| :------------------------------------- | :------- | :------------- | :---------- |
| GrayScale theme                        | L        | 1hr            | .5 hr       |
| ImageView: Use modal w/ bootstrap      | L        | 3hr            | hr          |
| Vuldin Images logo                     | L        | 3hr            | hr          |
| Add API credit to Footer               | M        | 1hr            | hr          |
| Header/Footer items                    | L        | 1hr            | hr          |
| Image View w/ download and author link | H        | 2hr            | hr          |
| Total                                  | H        | 8hr            | .5 hr       |

### MVP

- Make sure API fetches the correct request
- Images show on page
- User can input and search for any image they want
- Mobile priority
- Search button and Search bar/form
- Image Search goes back to API and returns list of images
- Image List shows images and goes back to API database
- Use SASS or SCSS

### PostMVP

- Vuldin Images Logo to be created and used
- Have the entire site be a GrayScale theme
- Image View will also have download and owner credit connected
- Header/Footer components

---

## Components

| Component     |                     Description                      |
| ------------- | :--------------------------------------------------: |
| App           |    Initial data pull which includes React Router     |
| Search Bar    |        Renders the search bar for user input         |
| Search Button |      Renders search button to initialize search      |
| Images        | Renders the images when user clicks on Search button |
| Image Search  |      Will have the search bar and search button      |
| Image List    |     Renders the list of images after user input      |
| Image View    |         Will show the enlarged image at end          |
| Header        |             Renders the header -postMVP              |
| Footer        |             Renders the footer -postMVP              |
| Logo          |     Renders my Vuldin Images logo, very postMVP      |

---

## Additional Libraries

- bootstrap
- React
- fontAwesome
- pixabay
- SCSS

---

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```javaScript
function reverse(string) {
	// here is the code to reverse a string of text
}
```

---

## Issues and Resolutions

```javaScript
index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `ImageList`. See https://fb.me/react-warning-keys for more information.
    in p (at ImageList.js:6)
    in ImageList (at App.js:60)
    in div (at App.js:58)
    in App (at src/index.js:9)
    in StrictMode (at src/index.js:8)
```

```
./src/ImageView/ImageView.js
  Line 15:22:  'Link' is not defined  react/jsx-no-undef
```

cant seem to get the router to render on page

converting a function to a class?

```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

passing down function as props

```
clickMe = (event) => {
    this.props.clickMe(event.target.value)
}
```

passing a parameter to an event handler or callback

```
<button onClick={() => this.handleClick(id)} />
```

arrow function in render

```
class Foo extends Component {
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}
```

had to use setState in my App.js/ImageList.js

```
setState(stateChange[, callback])
```

nested routing trying it out

```
   <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
```

linking to an object

```
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/>
```

because i wasnt using hooks at the start and using class componenets, i had to use location cuz i wanted it to go to a function like to: function

```
<Link to={location => ({ ...location, pathname: "/courses" })} />
<Link to={location => `${location.pathname}?sort=name`}
```

didnt use useEffect()

```
function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
}
```

browserRouter as Router

```
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

had help from kenny with this issue on routers and connecting to the array and going to ImageView

```
<div className='row'>
{props.images &&
props.images.map((image) => {
return (
<div
key={image.id}
className='col-md-4'
style={{ marginBottom: '2rem' }}>
<div className='imageList_container'>
<img
className='imageList_image'
src={image.largeImageURL}
alt={image.tags}
/>
</div>
<div className='image_details'>
<Link
to={{
    pathname: `/image/${image.id}`,
}}>
<button onClick={props.handleClick}>View</button>
</Link>
```

literally went from huge amounts of ImageView code to something smaller:

```
const ImageView = (props) => {
	console.log(props);
	const singleImage = props.images.filter((image) => {
		return image.id == props.match.params.image;
	});
	console.log(singleImage);
	return (
		<div>
			<img src={singleImage[0].largeImageURL} />;
		</div>
	);
};
```

my route in App.js to connect to my ImageList and ImageView

```
<Switch>
<Route
path='/image/:image'
render={(routerProps) => (
    <ImageView {...routerProps} images={this.state.images} />
)}
/>

<Route
path='/image/'
render={(routerProps) => (
    <ImageList {...routerProps} images={this.state.images} />
)}
/>
<Route path='/'>
{this.state.error !== null ? (
    <div style={{ color: '#fff', textAlign: 'center' }}>
        {this.state.error}
    </div>
) : (
    <ImageList images={this.state.images} />
)}
</Route>
</Switch>
```
