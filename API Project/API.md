![Chitoge is my Waifu: No waifu, no laifu](https://i.pinimg.com/originals/d7/6e/4a/d76e4a9b573c62e2d9f939355c226834.gif)

# Image Search Application

## Project Links

- [github.com/zackvuldin](https://github.com/zackvuldin/Image-Search-Application)
- [deployment link](https://github.com/zackvuldin/Image-Search-Application)

## Project Schedule

| Day   | Deliverable                                          | Status |
| :---- | :--------------------------------------------------- | :----- |
| Day 1 | Project Approval / wire-framing / react architecture | [ ]    |
| Day 2 | Making sure I can get the API recall information out | [ ]    |
| Day 3 | MVP                                                  | [ ]    |
| Day 4 | MVP + HTML/CSS                                       | [ ]    |
| Day 5 | MVP/P-MVP + debugging                                | [ ]    |
| Day 6 | Deadline: Presentation                               | [ ]    |

---

## Project Description

Search and browse a variety of images! I want the user to be able to enter in any keyword (Example: Fish) and it will pop up a variety of fish photos! I'll call it...Vuldin Images!

## API Database Potentials, but didn't choose:

I spent so much time searching around the Repo for APIs and almost 90% of them were either too hard to use because it had to implement way more technologies than what I knew especially with my current time-frame. Even with all that time spent searching, I learned a lot about various of libraries and technologies. I think I spent at least 2-4 hours just reading documentation.

---

[Big ML](https://bigml.com/)

// 40min // No idea how to use the API. They want me to download or something along those lines?

Machine learning that mainly concentrates on decision trees.

---

[OpenCorporates](http://api.opencorporates.com/documentation/API-Reference)

// 15min // This API works, but kinda complicated on how to get company name out
OpenCorporates: Data on corporate entities and directors in many countries

---

[US National Vulnerability Database](https://nvd.nist.gov/vuln/Data-Feeds/JSON-feed-changelog)

// 20min // I literally have no idea how this one works.

---

[Security Trails](https://docs.securitytrails.com/docs)

Domain and IP related information such as current and historical WHOIS and DNS records

---

[IBM Watson](https://developer.ibm.com/technologies/artificial-intelligence/)

// 10 minute-works // 30min // Nevermind; it doesn’t work. You have to do a LOT more.
IBM Watson-process of preparing data and to run predictive analysis

---

[Time Door](https://timedoor.io/)

API for statistical insights into time series data

---

[OpenSource libraries](https://libraries.io/api)

OpenSource software libraries

---

[Keen](https://keen.io/)

Data analytics

---

[NASA](https://api.nasa.gov/index.html)

// 10 minutes // NASA API Works.
NASA

---

[Clarifai](https://www.clarifai.com/developer)

Clarifai, computer vision. Image and video recognition

---

[Sky Biometry](https://skybiometry.com/)

Face detection, emotional analysis, face grouping, recognition service and tagging the photo.

---

[Deep Code AI](https://www.deepcode.ai/)

AI powered, real-time semantic code analysis

---

## API

I'm using pixabay's api. It is a RESTful API for searching and retrieving free images and videos under Pixabay. This API returns JSON-encoded objects.
The documentation has a lot of utilities to use.

**EXAMPLE OF API KEY BEING USED:**

```
https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo
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

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()

## MVP Time-Frame

| Component                  | Priority | Estimated Time | Actual Time |
| :------------------------- | :------- | :------------- | :---------- |
| Making sure API link works | H        | 2hr            | hr          |
| Having the API call return | H        | 2hr            | hr          |
| Search bar using Form      | H        | 2hr            | hr          |
| Search button              | H        | 2hr            | hr          |
| Images to show             | H        | 3hr            | hr          |
| Header/Footer items        | L        | 1hr            | hr          |
| Footer items               | L        | 1hr            | hr          |
| Mobile Priority            | H        | 2hr            | hr          |
| Total                      | H        | 15hr           | hr          |

## PostMVP

| Component          | Priority | Estimated Time | Actual Time |
| :----------------- | :------- | :------------- | :---------- |
| GrayScale theme    | L        | 1hr            | hr          |
| Vuldin Images logo | L        | 3hr            | hr          |
| Total              | H        | 4hr            | hr          |

#### MVP Time-Frame

- Make sure API fetches the correct request
- Images show on page
- User can input and search for any image they want
- Header/Footer components
- Mobile priority
- Search button and Search bar/form

#### PostMVP

- Vuldin Images Logo to be created and used
- Have the entire site be a GrayScale theme

## Components

| Component     |                     Description                      |
| ------------- | :--------------------------------------------------: |
| App           |    Initial data pull which includes React Router     |
| Header        |                  Renders the header                  |
| Footer        |                  Renders the footer                  |
| Search Bar    |        Renders the search bar for user input         |
| Search Button |      Renders search button to initialize search      |
| Images        | Renders the images when user clicks on Search button |
| Logo          |     Renders my Vuldin Images logo, very postMVP      |

## Time Frame

| Component         | Priority | Estimated Time | Time Invetsted | Actual Time |
| ----------------- | :------: | :------------: | :------------: | :---------: |
| Adding Search Bar |    H     |      3hrs      |      hrs       |     hrs     |
| Working with API  |    H     |      3hrs      |      hrs       |     hrs     |
| Total             |    H     |      6hrs      |      hrs       |     hrs     |

## Additional Libraries

- bootstrap
- React
- fontAwesome
- pixabay

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions