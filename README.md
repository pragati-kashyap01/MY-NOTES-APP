# 📝 MY NOTES APP (MERN Stack)

This is a full-stack **Notes Application** built using the **MERN (MongoDB, Express.js, React.js, Node.js)** stack.  
It allows users to **sign up, log in, add, edit, delete, pin, and search notes**.

---

##  Features
- User Authentication (Sign up / Login)
- Add new notes
- Edit existing notes
- Delete notes
- Pin important notes
- Search notes by title or content

---

##  Tech Stack
- **Frontend:** React.js (with Tailwind CSS for styling)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (local or MongoDB Atlas)  
- **Package Manager:** npm  

---

##  Project Structure

notes-app/
│
├── backend/               # Node.js + Express
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── controllers/
│
├── frontend/              # React app
│   ├── public/
│   │   └── index.html     # Your HTML file (entry point for React)
│   └── src/
│       ├── components/    # React components (Notes, Auth, etc.)
│       ├── pages/
│       ├── App.js
│       └── index.js
│
└── README.md
