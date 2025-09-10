#  My Notes App (MERN Stack)

This is a full-stack **Notes Application** built using the **MERN (MongoDB, Express.js, React.js, Node.js)** stack.  
It allows users to **sign up, log in, add, edit, delete, pin, and search notes**.

------------------------------------------------------------

##  Features
- User Authentication (Sign up / Login)
- Add new notes
- Edit existing notes
- Delete notes
- Pin important notes
- Search notes by title or content

------------------------------------------------------------

##  Tech Stack
- Frontend: React.js (with CSS/Tailwind for styling)
- Backend: Node.js, Express.js
- Database: MongoDB (local or MongoDB Atlas)
- Package Manager: npm

------------------------------------------------------------

##  Project Structure
notes-app/
│
├── backend/          # Node.js + Express
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── controllers/
│
├── frontend/         # React app
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
│
└── README.md

------------------------------------------------------------

##  Installation & Setup

1. Clone the repository:
   git clone https://github.com/pragati-kashyap01/MY-NOTES-APP.git
   cd my-notes-app

------------------------------------------------------------

##  Backend Setup
   cd backend
   npm install
   npm start

------------------------------------------------------------

##  Frontend Setup
   cd frontend
   npm install
   npm start

------------------------------------------------------------

##  Environment Variables
Create a `.env` file in backend/ and add:

   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   PORT=5000

------------------------------------------------------------

##  Backup Setup
- Keep a backup of your database using MongoDB Atlas backup tools or `mongodump`.
- Always push your code changes to GitHub regularly.
- You can also export notes data to JSON for manual backup.

------------------------------------------------------------

##  How It Works
1. User signs up or logs in.
2. User creates, edits, deletes notes.
3. User can pin & search notes.
4. All data is stored securely in MongoDB.

------------------------------------------------------------

##  Contributing
Pull requests are welcome!  
For major changes, please open an issue first to discuss.

------------------------------------------------------------

## 👩 Author
Pragati Kashyap  
BSc Computer Science & Data Analytics  
IIT Patna (Graduating 2026)

