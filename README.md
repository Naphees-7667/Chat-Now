# ✨ Chatify - A Full Stack Realtime Chat Application ✨

## 🌟 Overview

Chatify is a feature-rich, full-stack chat application designed to provide seamless real-time communication. Built using modern technologies, Chatify ensures secure, efficient, and user-friendly interactions with a visually appealing design.

## 🛠️ Tech Stack

- **Frontend**: React.js, TailwindCSS, Daisy UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **State Management**: Zustand

## 🚀 Features

### Authentication & Authorization
- Secure user login and registration using **JWT** (JSON Web Tokens).
- Role-based authorization to restrict access where necessary.

### Real-Time Messaging
- Instant messaging powered by **Socket.io**.
- Messages update in real-time without page refresh.

### Online User Status
- View the online status of users in real time.
- Presence updates dynamically when users join or leave the app.

### Global State Management
- Efficient state management with **Zustand** for a smooth user experience.

### Error Handling
- **Client-side**: Informative error messages for better UX.
- **Server-side**: Graceful handling of errors with meaningful responses.

## 🎨 UI/UX

- **TailwindCSS**: For modern, responsive, and clean UI design.
- **Daisy UI**: Enhances components with pre-designed, customizable elements.

## 🔧 Installation

### Prerequisites
- **Node.js** (v14 or later)
- **MongoDB**


##  Project Structure

chatify/
├── client/         # React frontend
├── server/         # Node.js backend
├── .env            # Environment variables
├── package.json    # Project dependencies
└── README.md       # Project documentation


### Setup .env file

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```