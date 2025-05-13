# Exercise: Backend, Frontend, Docker

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Solution

### Project Overview
This project demonstrates a simple full-stack application with:
- Backend: Express.js REST API
- Frontend: Node.js application
- Docker containerization for both services

### Project Prerequisites
- npm
- Node.js 18
- Docker (optional)

### Ports
- Backend: 3000
- Frontend: 3001

### Backend API Service
A simple Express.js backend service providing API endpoints.

### API Endpoints
GET /api/hello
Returns a greeting message from the backend.

Response Example:
```json
{
    "message": "Hello from backend"
}
 ```
### Backend Setup
1. Navigate to backend directory:
```bash
cd backend
 ```

2. Install dependencies:
```bash
npm install
 ```

3. Start the backend server:
```bash
node main.js
 ```

The backend will run on http://localhost:3000
### Frontend Application
A Node.js frontend application running on port 3001.

### Frontend Setup
1. Navigate to frontend directory:
```bash
cd frontend
 ```

2. Install dependencies:
```bash
npm install
 ```

3. Start the frontend application:
```bash
node index.js
 ```

The frontend will run on http://localhost:3001

## Docker Setup
### Building Images
1. Build backend:
```bash
cd backend
docker build -t backend-app .
 ```

2. Build frontend:
```bash
cd frontend
docker build -t frontend-app .
 ```

### Running Containers
1. Run backend container:
```bash
docker run -p 3000:3000 backend-app
 ```

2. Run frontend container:
```bash
docker run -p 3001:3001 frontend-app
 ```


