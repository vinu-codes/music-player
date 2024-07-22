# AIMACS

<div class="row" style="display: flex; width: 100%;">
    <img width="33%" alt="profile" src="https://github.com/aima-fit/aimacs/assets/47872483/8c1c0918-868a-4ab9-9e98-ff13a25f35b0">
    <img width="33%" alt="profile" src="https://github.com/aima-fit/aimacs/assets/47872483/8c1c0918-868a-4ab9-9e98-ff13a25f35b0">
    <img width="33%" alt="profile" src="https://github.com/aima-fit/aimacs/assets/47872483/8c1c0918-868a-4ab9-9e98-ff13a25f35b0">
</div>

## Overview

AIMA is a fitness application, built with a great set of technologies like React, Styled Components, Ramda and many more.

### Background

AIMA began as a concept attempting to bridge the gap between PTs and clients by providing an easy-to-use interface that outstands its competitors. We are proud of the work we have achieved!

### Behind the Scenes

- Philip
- Amith
- Nicholas

_- AIMA Web Team_

## Completed Items

- [x] Sign in
- [x] Sign up
- [x] Sign up with google
- [x] Authentication with `auth0`
- [x] Redirect functionality
- [x] Auth implemented into redux state
- [x] View exercises library
- [x] View workouts library
- [x] Create / Delete Image via Cropper UI
- [x] Image Cropper store images and generate link to S2 Amazon bucket
- [x] Create / Update / Delete exercises
- [x] Create workout name
- [x] Create / Update workout notes
- [x] Add Section and Group within DND
- [x] Add feature to adjust names of sections and groups

## In Progress Items

- [ ] Create / Delete exercise image
- [ ] Filter exercises within workout builder via search
- [ ] Settings route and payment visualisation
- [ ] Payment get all payment methods
- [ ] Payment create pyament method
- [ ] Payment update quote apply

---

## Developing AIMACS

Navigate into your `projects` directory ideally within your `~/Home`

```.sh
cd projects
```

Clone this project locally

```.sh
git clone git@github.com:aima-fit/aimacs.git
```

Navigate into project directory

```.sh
cd aimacs
```

Open the file `.env.local.react.example` and copy the entire contents to your clipboard. Next, create a new file within the root of the project and call it `.env`. Once you have done this paste the contents from your clipboard. 4. Verify you have the contents in the `.env` file as per above step ie: search for `REACT_APP_AUTH_AUDIENCE` within `.env` and validate it has a value.

---

## Installing packages

Make sure you have `yarn` installed globally on your machine if not install `yarn` globally.

Run command to install yarn globally:

```.sh
npm install -g yarn
```

Run command to install packages:

```.sh
yarn
```

---

Run command to start the project:

```.sh
yarn run start
```

Run command to run mock API calls and start the project:

```.sh
yarn run start:mock
```

---

Additional steps for better developer experience:

- If access has not been provided, please request access from Philip Hultgren. Postman team name: `aimafit`
- Install `Visual Studio Code` on your machine
- Install `Postman App` on your machine

---

## Production

Development / CI - CD

- Navigate to: [vercel link](https://vercel.com/aimalife/aimacs) to view the application at it's current state.

---

Payment Gateway

- Navigate to: [stripe link](https://dashboard.stripe.com/apikeys) to view the application strip setup and configurations

---

## Setup

- Navigate to the `/setup` route
- View a list of links which list out some of features and components
- View a list of common UI components navigate to: [localhost system](http://localhost:3000/system)

## Development

How to change the routes

- Navigate to the following path `aimacs/src/App.js`
- Path: [github file](https://github.com/aima-fit/aimacs/blob/main/src/App.js)

How to change the navigation items connected with the routes?

- Navigate to the following path: `aimacs/src/features/Menu/MenuBody/MenuBody.js`
- Path: [github file](https://github.com/aima-fit/aimacs/blob/main/features/Menu/MenuBody/MenuBody.js)

## Authentication

- [check session](https://auth0.github.io/auth0.js/WebAuth.html#checkSession)
- [react-router-dom + auth0 + react](https://developer.auth0.com/resources/guides/spa/react/basic-authentication)
- [session auth0](https://auth0.github.io/auth0.js/WebAuth.html#checkSession)
