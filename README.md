# CSVision 📊

A full-stack CSV analyzer that generates instant stats, charts, and insights from any CSV file.

## Live Demo

🔗 [Live App](https://your-live-url-here.com)

## Features

- 📁 Upload any CSV file
- 📊 Auto-generated bar charts for numeric columns
- 📈 Summary stats — rows, columns, mean, min, max
- 🖱️ Click any chart to expand it
- 🕓 Upload history saved to MongoDB
- 🐳 Fully dockerized

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React (Vite), CSS |
| Backend | Python, FastAPI |
| Data Analysis | Pandas, Matplotlib |
| Database | MongoDB Atlas |
| Containerization | Docker, Docker Compose |

## Getting Started

### Prerequisites
- Docker Desktop installed and running

### Run with Docker

```bash
git clone https://github.com/yourusername/csvision.git
cd csvision
docker-compose up --build
```

Once running, open http://localhost:5173 in your browser.

### Run locally (without Docker)

**Backend:**
```bash
cd backend
python -m venv venv
source venv/Scripts/activate  # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the backend folder:


## Project Structure

```
csvision/
├── backend/
│   ├── routes/
│   │   ├── __init__.py
│   │   └── analyze.py
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── main.py
│   ├── database.py
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   └── CSVison-Logo.png
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── FileUpload.jsx
│   │   │   └── Result.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── History.jsx
│   │   ├── styles/
│   │   │   ├── Navbar.css
│   │   │   ├── Home.css
│   │   │   ├── FileUpload.css
│   │   │   ├── Result.css
│   │   │   └── History.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
├── docker-compose.yml
├── .gitignore
└── README.md
```