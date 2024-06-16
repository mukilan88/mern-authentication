# MERN Authentication Project

This project is a simple authentication system using the MERN stack.

## Project Structure

The project is divided into two main folders:

1. `frontend`: Contains the React frontend built with Vite.
2. `backend`: Contains the Node.js backend with Express.js and MongoDB.

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

`git clone https://github.com/mukilan88/mern-authentication.git` <br />
`cd mern-authentication`

## Setup the Frontend

Navigate to the frontend directory and install the dependencies. <br />
`cd frontend` <br />
`npm install bootstrap axios  react-router-dom`

## Setup the Backend

Navigate to the backend directory using new terminal and install the dependencies. <br />
`cd backend` <br />
`npm init -y` <br />
`npm install express mongoose nodemon mongodb cors`

## Run the Application

### Running the Backend

From the backend directory terminal, we have to start the backend server. <br />
`cd backend` <br />
`nodemon app`

### Running the Frontend

From the frontend directory terminal, we have to start the frontend server. <br />
`cd frontend` <br />
`npm run dev`

## Folder Structure

mern-authentication(project-name)/ <br />
├── backend/<br />
│ ├── index.js<br />
│ ├── models/<br />
│ │ └── User.js<br />
│ └── ...<br />
├── frontend/<br />
│ ├── src/<br />
│ │ ├── components/<br />
│ │ │ ├── AuthContext.jsx<br />
│ │ │ ├── ProtectedRoute.jsx<br />
│ │ │ └── ...<br />
│ │ ├── App.jsx<br />
│ │ ├── index.jsx<br />
│ │ ├── Login.jsx<br />
│ │ ├── Signup.jsx<br />
│ │ └── ...<br />
│ ├── public/<br />
│ └── ...<br />
└── README.md<br />

## Packages Installed

### Frontend

> <h4> 1) Vite </h4>Create a React project quickly. 
> <h4> 2) Bootstrap </h4>CSS framework for styling.
> <h4> 3) Axios </h4>HTTP client for making API requests.
> <h4> 4) React-router-dom </h4>Routing library for React.

### Backend

> <h4> 1) Express </h4>Web framework for Node.js.
> <h4> 2) Mongoose</h4>ODM (Object Data Modeling) library for MongoDB and Node.js. 
> <h4> 3) Nodemon</h4>Utility that monitors for any changes in your source and automatically restarts your server. 
> <h4> 4) Mongodb</h4>MongoDB driver for Node.js.
> <h4> 5) Cors</h4>Middleware for enabling CORS (Cross-Origin Resource Sharing).

## Run the Page

### Frontend

To run the frontend server, navigate to the frontend directory and execute <br />
`npm run dev`

### Backend

To run the backend server, navigate to the backend directory and execute<br />
`nodemon index`

## Links

Here are direct links to the official documentation or websites for each technology.

React: [React Documentation](https://react.dev/reference/react)<br />
Vite: [Vite Documentation](https://vitejs.dev/guide/why)<br />
Bootstrap: [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)<br />
Node.js: [Node.js Documentation](https://nodejs.org/docs/latest/api/)<br />
npm (Node Package Manager): [npm Documentation](https://docs.npmjs.com/)

These links will take you directly to the respective documentation pages or official websites for each technology mentioned.
