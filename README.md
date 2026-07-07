# 🚀 AI Product Manager Copilot

AI Product Manager Copilot is a web-based platform that helps Product Managers collect, organize, process, and manage customer feedback from multiple sources. The application provides a structured workflow for importing feedback, validating data, preprocessing text, categorizing customer feedback, and presenting meaningful insights through an interactive dashboard.

The project is designed with a modular and scalable architecture, making it easy to extend with advanced analytics and intelligent features in the future.

---

## 📖 Overview

Managing customer feedback from multiple channels can be challenging and time-consuming. This project provides a centralized platform where product teams can upload, organize, and process customer feedback efficiently.

The application follows a complete data pipeline that starts with file upload and ends with a structured dashboard displaying processed information.

---

# ✨ Features

### 👤 User Management

- Secure User Authentication
- Project Creation & Management
- Protected Dashboard Access

### 📁 File Upload

Supports multiple file formats:

- CSV
- Excel
- JSON
- PDF

### ✅ Data Validation

Before processing, uploaded files are validated through:

- File Format Validation
- Empty File Detection
- Duplicate Upload Detection
- Schema Validation
- Data Integrity Check

### 🧹 Data Cleaning & Preprocessing

The uploaded data is processed using:

- Duplicate Removal
- Missing Value Handling
- Text Normalization
- Special Character Removal
- Tokenization
- Stop-word Removal
- Lemmatization

### 📂 Feedback Categorization

Feedback is organized into categories such as:

- 🐞 Bug Reports
- 💡 Feature Requests
- 🎨 UI/UX
- ⚡ Performance
- 🔒 Security
- 🎧 Support
- 📌 Others

### 📊 Dashboard

Displays:

- Upload Status
- File Summary
- Dataset Overview
- Category Distribution
- Project Statistics

---

# 🏗️ System Architecture

```
                     Product Manager / User
                               │
                               ▼
               React.js + Tailwind CSS Frontend
                               │
                         HTTP REST API
                               │
                               ▼
                  FastAPI Backend (Python)
                               │
        ┌──────────────┬──────────────┬──────────
        │              │              │         |
 Authentication   Project Mgmt     File Upload  |
        │              │              │         |
        _________________________________________        
                       │
                       ▼
               Data Validation Layer
                       │
                       ▼
         Data Cleaning & Preprocessing
                       │
                       ▼
         Feedback Categorization Engine
                       │
                       ▼
               MongoDB Atlas Database
                       │
                       ▼
              Dashboard & Statistics
```

---

# 🔄 Data Processing Pipeline

```
Customer Feedback
        │
        ▼
Upload Files
(CSV | Excel | JSON | PDF)
        │
        ▼
Validate Uploaded Data
        │
        ▼
Clean & Preprocess Data
        │
        ▼
Categorize Feedback
        │
        ▼
Store Raw & Processed Data
        │
        ▼
Dashboard & Statistics
```

---

# 🛠️ Technology Stack

| Layer | Technology |
|--------|------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | FastAPI (Python) |
| **Database** | MongoDB Atlas |
| **Authentication** | JWT |
| **Data Processing** | Pandas, NumPy |
| **Text Processing** | NLTK, spaCy |
| **API Communication** | REST API |
| **Version Control** | Git & GitHub |
| **Deployment** | Vercel, Render/Railway |

---

# 📁 Project Structure

```text
AI-Product-Manager-Copilot/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── assets/
│   └── App.jsx
│
├── backend/
│   ├── api/
│   ├── authentication/
│   ├── preprocessing/
│   ├── validation/
│   ├── uploads/
│   ├── models/
│   ├── database/
│   └── main.py
│
├── docs/
├── datasets/
├── README.md
└── requirements.txt
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/AI-Product-Manager-Copilot.git

cd AI-Product-Manager-Copilot
```

---

## 2️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 3️⃣ Backend Setup

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the backend:

```bash
uvicorn main:app --reload
```

Backend will run at:

```
http://localhost:8000
```

---

## 4️⃣ Configure Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGODB_URI=your_mongodb_connection_string

DATABASE_NAME=ai_product_manager

JWT_SECRET=your_secret_key
```

---

## 5️⃣ Connect MongoDB Atlas

- Create a MongoDB Atlas cluster
- Create a database
- Update the connection string in `.env`

---

# 🚀 Deployment

### Frontend

Deploy using **Vercel**

```bash
npm run build
```

---

### Backend

Deploy using:

- Render
- Railway

Run using:

```bash
uvicorn main:app
```

---

### Database

Deploy using:

- MongoDB Atlas

---

# 📋 Requirements

## Frontend

- React.js
- Tailwind CSS
- React Router
- Axios

## Backend

- Python 3.10+
- FastAPI
- Uvicorn
- Pydantic
- Python-dotenv

## Data Processing

- Pandas
- NumPy
- NLTK
- spaCy

## Database

- MongoDB Atlas

## Development Tools

- Git
- GitHub
- VS Code

---

# 🚀 Future Enhancements

- Sentiment Analysis
- Feedback Summarization
- Keyword Extraction
- Named Entity Recognition
- Feature Prioritization
- Recommendation Engine
- Product Analytics Dashboard
- Executive Reports
- Product Roadmap Generation
- Jira Integration
- GitHub Issues Integration

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to GitHub

```bash
git push origin feature/feature-name
```

5. Open a Pull Request

---

# 🙌 Acknowledgments
The technologies that make this project possible:

- React.js
- Tailwind CSS
- FastAPI
- MongoDB Atlas
- Pandas
- NumPy
- NLTK
- spaCy
- Git & GitHub

---
