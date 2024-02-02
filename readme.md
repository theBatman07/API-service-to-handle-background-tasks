# API Service to Handle Background Tasks

## Overview

This repository contains a TypeScript-based API service designed to manage and execute background tasks. The service is built using the Express framework for handling HTTP requests, Node.js for server-side runtime, and PostgreSQL for data storage.

## Features

- **Task Management**: Easily create, update, and delete background tasks.
- **Task Execution Queue**: Tasks are queued and executed asynchronously to avoid blocking the main application thread.
- **Persistent Storage**: Utilizes PostgreSQL for storing task-related data, ensuring durability.

## Tech Stack

- **TypeScript**: The entire codebase is written in TypeScript, providing static typing for improved code quality and developer experience.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js that simplifies the development of robust APIs.
- **Node.js**: A runtime environment that executes JavaScript code server-side, allowing the development of scalable and efficient network applications.
- **PostgreSQL**: A powerful, open-source relational database system used for storing task-related information persistently.

## Setup

#### 1. **Clone the Repository**:

```bash
git clone https://github.com/theBatman07/API-service-to-handle-background-tasks.git
```

#### 2. Install packages

```bash
npm install
```

#### 3. Run The API

```bash
npx ts-node .\src\index.ts
```

## Screenshots

![image 1](https://drive.google.com/uc?export=view&id=14g9ogJeIyE8RtaGbIXqasfJPdKRgqa8a)
![Image 2](https://drive.google.com/uc?export=view&id=10QX9s0Bz-oxQPFootQb1e1u5KSsC0GkS)
![Image 3](https://drive.google.com/uc?export=view&id=14SYvqGqXptkXqMtCyoFRvVSAk_49658-)
![Image 4](https://drive.google.com/uc?export=view&id=1pbId0Q3-Rpga9aQSK70ST58_-7q3D5UM)

## Use Postman to send POST request

#### Payload

```
{
  "endpoint": "http://localhost:3000/api/send",
  "data": {"hello": "part 3"},
  "delay": 5000,
  "method": "POST",
  "status": "queued"
}
```

```
{
  "endpoint": "http://localhost:3000/api/message",
  "data": {"hello": "message7"},
  "delay": 5000,
  "method": "POST",
  "status": "queued"
}
```

In Authorization Select Bearer Token

```
Token : 123321 //for send
Token : 123322 //for message
```
