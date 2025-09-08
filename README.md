# Todo Application Project

A backend REST API for managing tasks and users, built with **Node.js**, **Express**, **Mongoose**, **JWT authentication**, **Cloudinary** for file uploads, and **Multer** for handling attachments. Deployed on **Render.com**.


## Features

- User registration, login, and logout  
- JWT authentication & protected routes  
- CRUD operations for tasks  
- Attachments for tasks (uploaded to Cloudinary)  
- Error handling middleware for consistent responses  


## Technologies Used

- Node.js  
- Express.js  
- MongoDB & Mongoose  
- JSON Web Tokens (JWT)  
- Cloudinary for file uploads  
- Multer for handling multipart/form-data  
- Render.com for deployment  



## Getting Started

### **Clone the repo**
```bash
git clone https://github.com/JoyceeHUB/TODO-APPLICATION-AXIA-PROJECT.git
cd TODO-APPLICATION-AXIA-PROJECT

# Install dependencies
npm install

# Start server in development mode with nodemon
npm run dev

# Start server in production mode
npm start


# Environment Variables (.env)

PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret


# User Routes (Base URL: /users)

# Register new user
POST /users/register
Body: { "name": "John Doe", "email": "john@example.com", "password": "Password123" }

# Login user
POST /users/login
Body: { "email": "john@example.com", "password": "Password123" }

# Logout user
POST /users/logout


# Task Routes (Base URL: /tasks)


# Get all tasks for logged-in user
GET /tasks
Headers: { "Cookie": "token=<JWT_TOKEN>" }

# Create task with optional attachments
POST /tasks
Headers: { "Cookie": "token=<JWT_TOKEN>" }
Body (multipart/form-data):
  - title: "Task title"
  - description: "Task description"
  - category: "Work"
  - deadline: "2025-09-15T00:00:00.000Z"

# Get task by ID
GET /tasks/:id
Headers: { "Cookie": "token=<JWT_TOKEN>" }

# Update task by ID
PUT /tasks/:id
Headers: { "Cookie": "token=<JWT_TOKEN>" }
Body: { "title": "Updated title", "completed": true }

# Delete task by ID
DELETE /tasks/:id
Headers: { "Cookie": "token=<JWT_TOKEN>" }

# Deployment

# Deployed on Render.com
# URL: https://todo-application-axia-project.onrender.com
# Make sure .env variables are correctly configured on Render.