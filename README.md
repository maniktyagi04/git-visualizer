# Git Working Tree Visualizer

A Git repository visualization tool built using **React**, **Node.js**, **Express**, **Electron**, and **Simple-Git**.

The application allows users to visualize Git repository information such as:

- Current Branch
- All Branches
- Commit History
- Commit Author
- Commit Timestamp
- Commit Hash

---

## Project WireFrame 

```
https://app.eraser.io/workspace/VY7I0TU8HY11OcdXhUFs?origin=share
```


## 🚀 Problem Statement

Developers often use terminal commands such as:

```bash
git log
git branch
git status
```

to inspect repositories.

For beginners, understanding repository history through terminal commands can be difficult.

This project provides a visual interface that fetches repository data and displays it in an easy-to-understand format.

---

## ✨ Features

- Select a local Git repository
- Display current branch
- Display all available branches
- Display commit history
- Show commit details:
  - Commit Message
  - Author Name
  - Commit Date
  - Commit Hash
- React frontend
- Express backend
- Electron desktop support
- Git integration using Simple-Git

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- React Flow

### Backend

- Node.js
- Express.js

### Desktop

- Electron

### Git Integration

- Simple-Git

---

## 📁 Project Structure

```text
git-visualizer/
│
├── backend/
│   ├── server.js
│   └── Services-Git.js
│
├── electron/
│   └── main.js
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   │
│   └── components/
│       ├── RepoSelector.jsx
│       └── GitGraph.jsx
│
├── public/
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ How It Works

### Step 1

User enters the path of a local Git repository.

Example:

```text
/Users/username/Desktop/MyProject
```

### Step 2

Frontend sends the repository path to the backend.

Example:

```javascript
fetch(`http://localhost:8000/git?path=${path}`)
```

### Step 3

Backend reads Git data using Simple-Git.

Example:

```javascript
const git = simpleGit(repoPath);

const log = await git.log();
const branches = await git.branch();
```

### Step 4

Backend returns repository information.

```javascript
{
  commits,
  branches,
  currentBranch
}
```

### Step 5

Frontend renders the repository data.

---

## 🔧 Installation

Clone the repository:

```bash
git clone https://github.com/maniktyagi04/git-visualizer.git
```

Move into the project folder:

```bash
cd git-visualizer
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Frontend

```bash
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## ▶️ Run Backend

```bash
npm run server
```

Runs on:

```text
http://localhost:8000
```

---

## ▶️ Run Electron Desktop App

```bash
npm run electron
```

or

```bash
npm start
```

(depending on project configuration)

---

## 📊 Sample Output

### Current Branch

```text
main
```

### Branches

```text
main
feature/auth
feature/dashboard
```

### Commit

```text
Message : Added Login Page
Author  : Manik Tyagi
Date    : 2026-05-30
Hash    : a1b2c3d
```

---

## 🔮 Future Improvements

- Interactive Git Graph
- Branch Visualization
- Merge Tracking
- Commit Search
- Commit Filters
- Repository Statistics Dashboard
- Dark Mode
- Drag & Drop Repository Selection

---

## 📚 Learning Outcomes

This project helped me learn:

- React Components
- State Management
- API Integration
- Express Backend Development
- Git Automation with Simple-Git
- Electron Desktop Development
- Frontend-Backend Communication
- Repository Data Visualization
