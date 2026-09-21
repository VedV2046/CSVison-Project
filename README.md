# CSVision 📊

A full-stack CSV analyzer that generates instant stats, charts, and insights from any CSV file.

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

- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs

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
csvision/
├── frontend/ # React app
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── styles/
│ └── Dockerfile
├── backend/ # FastAPI app
│ ├── routes/
│ ├── main.py
│ ├── database.py
│ └── Dockerfile
└── docker-compose.yml