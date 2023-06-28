# Streamerank API

> REST API written in Node.js and used to interact with streamers' data stored in MongoDB Atlas.

## Table of Contents

- [General Info](#general-information)
- [Setup](#setup)
- [Usage](#usage)
- [Schemas](#schemas)
- [Resources](#resources)

## General Information

This project was created to connect [streamer ranking app](https://stgran66.github.io/streamerank/) with MongoDB Atlas. It is a REST API written in Node.js to store streamers' data in MongoDB Atlas. Its purpose is  to make a list of streamers from different platforms and rank them with upvotes or downvotes.
For now, there is an option to add new streamers and vote for any of them.


## [Host address](https://streamerank-api.onrender.com/)
## Setup

To set up the project just download the repository and install dependencies. Example configuration file .env.example is in route directory. Your configuration should be stored in .env file in the project route directory.

- PORT - can be omitted, by default will use 8000.
- DB_HOST - here should be a link with a username and password to connect to MongoDB Atlas. Is provided by the MongoDB Atlas control panel


## Usage

Endpoints to use

### Streamers

#### GET method /streamers

Get the list of streamers.
- Parameters:
  No parameters
- Request body:
  No request body
- Responses:
  - 200 - Streamers found
  - 404 - Collection not found
  - 500 - Server error

#### GET method /streamers/:id

Get one streamer data by id

- Parameters:
  id: streamer id
- Responses:
  - 200 - Streamer found
  - 404 - Streamer not found
  - 500 - Server error

#### POST method /streamers

Add a streamer to  the collection

- Parameters:
  No parameters
- Request body:
  ```javascript
  {
  "name": "streamer name",
  "platform" : "streamer platform",
  "desctiption" : "description"
  }
  ```
- Responses:
  - 201 - Streamer created
  - 400 - Validation error
  - 500 - Server error

#### PUT method /streamers/:id/vote

Update streamers' votes

- Parameters:
  id: streamer id
- Request body:
  ```javascript
  {
  "vote":"upvote | downvote"
  }
  ```
- Responses:
  - 200 - Vote updated
  - 400 - Validation error
  - 500 - Server error
## Schemas

### Streamer

```javascript
  {
    name: {
      type: String,
      required: [true, "Set streamer's name"],
    },
    platform: {
      type: String,
      enum: platforms,
      required: [true, "Set streamer's platform"],
    },
    description: { type: String },
    upvote: {
      type: Number,
      default: 0,
    },
    downvote: {
      type: Number,
      default: 0,
    },
    avatar: {
      type: String,
      default: 'https://i.pravatar.cc/300',
    },
  },
```

## Resources

Node version: v18.12.1  
NPM version: 8.19.2

Libraries:

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Joi](https://joi.dev/)
- [Nodemon](https://nodemon.io/)



