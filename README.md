# Employee Management System (Frontend Focus)

A modern **Employee Management System** built with **React + Vite** focusing heavily on frontend architecture, UI/UX, and state management. This project demonstrates how an admin can assign tasks to employees and how employees can track their task status — all without a backend, using **localStorage** as the data layer.

---
### 🌐 Live Demo (GitHub Pages)

Project ko GitHub Pages par successfully host kiya gaya hai 👇

🔗 Live URL:
👉 https://aditya-chauhan-dev.github.io/Employee-Management-System/

🔐 Demo Login Credentials

Project ko test karne ke liye niche demo credentials use karein:

👨‍💼 Admin Login

Email: admin@company.com

Password: 123

👩‍💻 Employee / User Login

Email: rahul@company.com

Password: 123

⚠️ Note: Yeh credentials sirf demo/testing purpose ke liye hain.
---
## 🚀 Live Features

### 🔐 Authentication (Frontend-based)

* Login UI with email & password
* Role-based flow (Admin / Employee)
* Session handled using localStorage

### 👨‍💼 Admin Panel

* Create new tasks
* Assign tasks to employees using dropdown (prevents typo errors)
* Categorize tasks (Design, Development, Content, Management, etc.)
* View employee-wise task summary in a table

  * Total Tasks
  * Active
  * Completed
  * Failed

### 👩‍💻 Employee Dashboard

* Personalized greeting
* Dashboard cards:

  * New Tasks
  * Active Tasks
  * Completed Tasks
  * Failed Tasks
* Task cards with:

  * Category tags
  * Due date
  * Description

### 📊 Task Management

* Tasks stored & synced via localStorage
* Real-time UI update on task creation
* Task status tracking (New → Active → Completed / Failed)

---

## 🛠️ Tech Stack

* **React (Vite)** – Frontend framework
* **Tailwind CSS** – Styling & responsive UI
* **JavaScript (ES6+)**
* **localStorage** – Data persistence (no backend)

---

## 📁 Project Structure

```
emp-management-system/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Login.jsx
│   │   ├── AdminPanel.jsx
│   │   ├── EmployeeDashboard.jsx
│   │   ├── TaskCard.jsx
│   │   └── TaskForm.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

---

## 🧠 Key Learnings

* State lifting & prop drilling
* Conditional rendering based on user role
* Form handling & validation
* Dashboard UI patterns
* Frontend-only authentication logic
* Scalable component structure

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Aditya-Chauhan-Dev/Employee-Management-System.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 🔮 Future Improvements

* Backend integration (Node.js + MongoDB)
* JWT authentication
* Role-based route protection
* Task status update actions (Complete / Fail buttons)
* Search & filter tasks
* Animations using Framer Motion
* Toast notifications

---

## 🧑‍💻 Author

**Aditya Chauhan**
Frontend Developer

* GitHub: [https://github.com/Aditya-Chauhan-Dev]

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it really helps and motivates me to build more projects like this!
