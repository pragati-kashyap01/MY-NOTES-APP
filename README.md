# MY NOTES APP (MERN Stack)


A full-stack **Notes Application** built with the **MERN (MongoDB, Express.js, React.js, Node.js)** stack.  
Easily create, edit, delete, pin, and search your notes with a clean UI.

---

##  Features
1. User Authentication (Sign Up / Login)  
2. Create, Edit, Delete Notes  
3. Pin Important Notes  
4. Search Notes by Title or Content  

---

##  Tech Stack
- **Frontend:** React.js (Tailwind CSS for styling)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Package Manager:** npm

---

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
⚡ Installation & Setup
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/pragati-kashyap01/MY-NOTES-APP.git
cd my-notes-app
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
npm start
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
4️⃣ Environment Variables
Create a .env file in backend/:

env
Copy code
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000
🎯 How It Works
User signs up or logs in

User creates/edit/delete notes

User can pin & search notes

Data is stored securely in MongoDB

📸 Screenshots

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first.

🧑‍💻 Author
👩 Pragati Kashyap
