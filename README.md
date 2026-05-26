# Chatty — Realtime Chat Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-black?style=for-the-badge&logo=socketdotio&badgeColor=010101)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

Chatty is a modern full-stack realtime chat application built with the MERN stack and Socket.IO, designed to provide a seamless and interactive messaging experience.

The platform supports secure authentication, realtime one-to-one messaging, online/offline presence tracking, image sharing with Cloudinary integration, customizable UI themes, and responsive modern design — showcasing scalable full-stack development and realtime communication architecture.

---

# Table of Contents

- Features
- Tech Stack
- Live Demo
- Screenshots
- Project Structure
- Authentication
- Realtime Chat
- Media Sharing
- UI Features
- State Management
- Socket.IO Functionality
- Cloudinary Integration
- Environment Variables
- Installation
- Run Application
- Demo Testing
- Future Improvements
- Author
- License

---

# Live Demo

[Visit Live Application](https://chat-app-cw4r.onrender.com)

---

# Features

✅ Authentication System  
✅ Realtime Messaging  
✅ Online/Offline User Status  
✅ Image Sharing Support  
✅ Multiple UI Themes  
✅ Socket.IO Realtime Communication  
✅ Cloudinary Image Uploads  
✅ Responsive Modern UI  
✅ Secure JWT Authentication  
✅ Zustand State Management  

---

# Screenshots

## Login Page
![Login Page](images/login_page.png)

## Signup Page
![Signup Page](images/signup_page.png)

## Chat Interface
![Chat Interface](images/chat_interface.png)

## Realtime Messaging
![Realtime Messaging](images/realtime_chat.png)

## Theme Customization
![Themes](images/themes.png)

## Online User Status
![Online Status](images/online_status.png)

## Mobile Responsive Design
![Mobile View](images/mobile_view.png)

---

# Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- DaisyUI
- Zustand
- React Router DOM
- Socket.IO Client
- Axios
- React Hot Toast
- Lucide React Icons

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- bcryptjs
- Cloudinary
- Cookie Parser
- CORS

---

# Project Structure

```bash
ChatApp/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   ├── seeds/
│   │   └── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── lib/
│   │   ├── constants/
│   │   └── App.jsx
│   └── package.json
│
├── images/
│
└── README.md
```

---

# Authentication

- User Signup
- User Login
- JWT Authentication
- Protected Routes
- Logout Functionality
- Cookie-based Authentication

---

# Realtime Chat

- One-to-One Messaging
- Instant Message Delivery
- Online User Tracking
- Realtime Socket Communication
- Auto Scroll to Latest Message

---

# Media Sharing

- Upload Chat Images
- Cloudinary Image Hosting
- Image Preview Support

---

# UI Features

- Modern Dark UI
- Multiple Themes using DaisyUI
- Responsive Design
- Smooth Animations
- Skeleton Loading Screens

---

# State Management

The application uses Zustand for global state management.

## Stores Included

- `useAuthStore`
- `useChatStore`
- `useThemeStore`

---

# Socket.IO Functionality

Implemented realtime features:

- User connection tracking
- Online user list
- Realtime message broadcasting
- Socket cleanup on disconnect

---

# Cloudinary Integration

Cloudinary is used for:

- Profile picture uploads
- Chat image uploads
- Image hosting and optimization

---

# Environment Variables

Create `.env` file in backend directory and add:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/MADHURA1907/CHAT-APP.git
cd CHAT-APP
```

---

## Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

# Run Application

## Start Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```bash
http://localhost:5001
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Demo Testing

You can create multiple accounts and test:

- Realtime messaging
- Online status
- Theme switching
- Image uploads

Use:
- Chrome normal window
- Chrome incognito window

for realtime chat testing.

---

# Future Improvements

- Group Chats
- Voice Messages
- Video Calling
- Typing Indicators
- Read Receipts
- Push Notifications
- Emoji Picker
- Message Encryption
- File Sharing
- AI Chat Features

---

# Author

## Madhura Barve

Full Stack & AI/ML Developer passionate about building scalable realtime applications and modern web experiences.

### Connect With Me

[LinkedIn](https://www.linkedin.com/in/madhura-barve-216629308/) •
[GitHub](https://github.com/MADHURA1907) •
[Email](mailto:barvemadhura19@gmail.com)

---

# Support

If you like this project:

- Star the repository
- Fork the project
- Contribute improvements

---

# License

This project is licensed under the ISC License.
