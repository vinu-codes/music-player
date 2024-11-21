# **Music Player App** 🎵

## **Overview**

The **Music Player App** is a web application built to interact with the **Spotify API**

---

## **Features**

- **User Authentication:** Secure Spotify login using OAuth 2.0 Authorization Code Flow.
- **Token Management:** A Node.js server handles the exchange and refreshing of access tokens for API access.
- **User Profile Integration:** Fetch and display Spotify user profiles with details such as the user’s display name.
- **Browse New Releases:** Explore and view details about the latest albums on Spotify.

---

## **Tech Stack**

- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **State Management:** Context API
- **Styling:** Styled Components
- **HTTP Client:** Axios
- **API:** Spotify Web API

---

## **Authentication Flow**

The app implements Spotify's **OAuth 2.0 Authorization Code Flow** with support from a custom Node.js server:

1. Users are redirected to Spotify’s login page.
2. Upon successful authentication, Spotify redirects back to the app with a **code** in the URL.
3. The app sends this code to the Node.js server, which exchanges it for an **access token** and **refresh token**.
4. The server stores and manages tokens, refreshing the access token as needed, while the client securely accesses the Spotify API.

---

### **Token Management**

The server handles:

- Exchanging authorization codes for tokens.
- Refreshing expired tokens to ensure seamless user sessions.

---

## **Challenges and Bottlenecks**

### **Premium-only Playback**

- **Issue:** Spotify restricts music playback via the Web Playback SDK to **Premium users only**.
- **Impact:** Free-tier users cannot play music directly within the app, which limits accessibility.

---

## Learnings

- Token management / token lifecycle with server set up.
- OAuth Integration: Gained hands-on experience with implementing and debugging the OAuth 2.0 flow.
