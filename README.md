# Backend_first_Task - stage 0: Description Profile API

## Description
A simple API endpoint that returns my profile information and a random cat fact.

## Endpoint
GET /me

## Response Example
: json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:00:00.000Z",
  "fact": "The little tufts of hair in a cat’s ear that help keep out dirt direct sounds into the ear, and insulate the ears are called “ear furnishings.”"
}


## Setup

git clone https://github.com/ebukadev08/Backend_first_Task.git
cd backend_first_Task
npm install
npm start


## Dependencies
epress
axios
cors
dotenv

