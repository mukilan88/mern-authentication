# MERN Authentication Project

This project is a simple authentication system using the MERN stack.

## Project Structure

The project is divided into two main folders:

- `frontend`: Contains the React frontend built with Vite.
- `backend`: Contains the Node.js backend with Express.js and MongoDB.

## Features

- Login & Signup pages using MongoDB, React.js, Node.js, and Express.js.
- Uses local storage to store authentication state.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Getting Started

### 1. Clone the Repository

`git clone https://github.com/mukilan88/mern-authentication.git`
`cd mern-authentication`

## Setup the Frontend

Navigate to the frontend directory and install the dependencies.
`cd frontend`
`npm install bootstrap axios react-router-dom`

## Setup the Backend

Navigate to the backend directory using new terminal and install the dependencies.
`cd backend`
`npm init -y`
`npm install express mongoose nodemon mongodb cors`

## Run the Application

### Running the Backend

From the backend directory terminal, we have to start the backend server.
`cd backend`
`nodemon app`

### Running the Frontend

From the frontend directory terminal, we have to start the frontend server.
`cd frontend`
`npm run dev`

## Folder Structure

mern-authentication(project-name)/
├── backend/
│ ├── index.js
│ ├── models/
│ │ └── User.js
│ └── ...
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── AuthContext.jsx
│ │ │ ├── ProtectedRoute.jsx
│ │ │ └── ...
│ │ ├── App.jsx
│ │ ├── index.jsx
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ └── ...
│ ├── public/
│ └── ...
└── README.md

## Packages Installed

### Frontend

<ul>
<li> `vite`: Create a React project quickly. </li>
<li> `bootstrap`: CSS framework for styling. </li>
<li> `axios`: HTTP client for making API requests. </li>
<li> `react-router-dom`: Routing library for React. </li>
</ul>

### Backend

<ul>
<li> `express`: Web framework for Node.js. </li>
<li> `mongoose`: ODM (Object Data Modeling) library for MongoDB and Node.js. </li>
<li> `nodemon`: Utility that monitors for any changes in your source and automatically restarts your server. </li>
<li> `mongodb`: MongoDB driver for Node.js. </li>
<li> `cors`: Middleware for enabling CORS (Cross-Origin Resource Sharing). </li>
</ul>

## Run the Page

### Frontend

To run the frontend server, navigate to the frontend directory and execute:
`npm run dev`

### Backend

To run the backend server, navigate to the backend directory and execute:
`nodemon index`

## Links

Here are direct links to the official documentation or websites for each technology.

React: [React Documentation](https://react.dev/reference/react)
Vite: [Vite Documentation](https://vitejs.dev/guide/why)
Bootstrap: [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
Node.js: [Node.js Documentation](https://nodejs.org/docs/latest/api/)
npm (Node Package Manager): [npm Documentation](https://docs.npmjs.com/)

These links will take you directly to the respective documentation pages or official websites for each technology mentioned.
