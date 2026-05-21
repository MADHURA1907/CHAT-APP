# 💬 Chatty — Realtime Chat Application

A modern full-stack realtime chat application built using the MERN stack with Socket.IO for instant messaging.

This project includes:

*  Authentication System
*  Realtime Messaging
*  Online/Offline User Status
*  Image Sharing Support
*  Multiple UI Themes
*  Socket.IO Realtime Communication
*  Cloudinary Image Uploads
*  Responsive Modern UI

---

#  Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* DaisyUI
* Zustand
* React Router DOM
* Socket.IO Client
* Axios
* React Hot Toast
* Lucide React Icons

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT Authentication
* bcryptjs
* Cloudinary
* Cookie Parser
* CORS

---

#  Project Structure

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
└── README.md
```

---

#  Features

## 1. Authentication

* User Signup
* User Login
* JWT Authentication
* Protected Routes
* Logout Functionality
* Cookie-based Authentication

## 2. Realtime Chat

* One-to-One Messaging
* Instant Message Delivery
* Online User Tracking
* Realtime Socket Communication
* Auto Scroll to Latest Message

## 3. Media Sharing

* Upload Chat Images
* Cloudinary Image Hosting
* Image Preview Support

## 4. UI Features

* Modern Dark UI
* Multiple Themes using DaisyUI
* Responsive Design
* Smooth Animations
* Skeleton Loading Screens

---

# 5. State Management

The application uses Zustand for global state management.

Stores Included:

* `useAuthStore`
* `useChatStore`
* `useThemeStore`

---

#  Socket.IO Functionality

Implemented realtime features:

* User connection tracking
* Online user list
* Realtime message broadcasting
* Socket cleanup on disconnect

---

#  Cloudinary Integration

Cloudinary is used for:

* Profile picture uploads
* Chat image uploads
* Image hosting and optimization

---


#  Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/MADHURA1907/CHAT-APP.git
cd CHAT-APP
```

---

## 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

# ▶️ Run Application

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

#  Demo Accounts

You can create multiple accounts and test:

* Realtime messaging
* Online status
* Theme switching
* Image uploads

Open:

* Chrome normal window
* Chrome incognito window

for realtime chat testing.

---


#  Important Packages Used

## Backend

```json
express
mongoose
jsonwebtoken
bcryptjs
socket.io
cloudinary
cookie-parser
dotenv
cors
```

## Frontend

```json
react
vite
tailwindcss
daisyui
zustand
socket.io-client
react-router-dom
axios
react-hot-toast
lucide-react
```

---

#  Future Improvements

* Group Chats
* Voice Messages
* Video Calling
* Message Reactions
* Typing Indicators
* Read Receipts
* Friend Requests
* Emoji Picker
* Push Notifications

---

#  Author

### Madhura Barve

GitHub:

```bash
https://github.com/MADHURA1907
```

Project Repository:

```bash
https://github.com/MADHURA1907/CHAT-APP
```

---

#  Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork the project
* 🛠️ Contribute improvements

---

#  License

This project is licensed under the ISC License.

convert this to .md format
