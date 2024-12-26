# Web App Template

This is a basic web app template using a Vite frontend with React, and a Node.js backend.

## Prerequisites

-   Node
-   npm

## Setup

### Frontend

1. Navigate inside the `frontend` directory
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173/` to confirm it is up and running

### Backend

1. Navigate inside the `backend` directory
2. Run `npm install`
3. Run `npm run start`
4. Check the console to confirm the server is running

## Basic Info and Next Steps

-   This template follows a layered architecture with 2 or 3 layers: frontend, backend, and datastore. Each layer should only interact with those next to it.
-   No database is currently set up for this template, but can be configured by following the steps in your database's documentation
-   I'd recommend using Tailwind CSS for a simpler and less cluttered experience
-   Edit `App.jsx` to begin editing your front end
-   Define API routes using the `app.js` file, the `routes` directory, and the `controllers` directory.
