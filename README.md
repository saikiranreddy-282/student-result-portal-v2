# 📘 Student Result Portal — Version 2

**Live Demo:** 👉 [Click here to view](https://student-result-portal-v2.netlify.app/)  
**GitHub Repo: 👉[Click here to View](https://github.com/saikiranreddy-282/student-result-portal-v2)

---

## 🧩 Overview
The **Student Result Portal (V2)** is a simple web application where users can enter a roll number and instantly view a student's marks, total, and percentage.

This version includes:
- An **SQL schema (`students.sql`)** that represents how the data would be stored in a real relational database  
- **JSON data (`results.json`)** used as a mock backend for demonstration  
- A **View SQL Schema** button to display the SQL structure directly from the UI  

---

## ⚙️ Tech Stack
- **HTML** – Structure of the page  
- **CSS** – Responsive and clean UI  
- **JavaScript** – Handles logic, fetching, and DOM updates  
- **JSON** – Mock database for demo  
- **SQL** – Real database schema (`students.sql`)  
- **Netlify** – Cloud hosting for live deployment  

---

## 🧠 How It Works
1. User enters a roll number (e.g., `1001`).  
2. JavaScript fetches student data from `results.json`.  
3. If found, it displays marks, total, and percentage dynamically.  
4. If not found, a **"No record found"** message appears.  
5. User can click **“View SQL Schema”** to view `students.sql` inside the browser.

---

## 🖼️ Features
- Clean, simple, and mobile-friendly UI  
- Instant result fetching using JSON  
- SQL schema included to show real backend structure  
- Error handling for invalid roll numbers  
- Fully deployed on **Netlify**  
- No backend required — works entirely on the frontend  

---

## 📂 Project Structure
student-result-portal-v2/
│── index.html          # Main UI
│── style.css           # Stylesheet
│── script.js           # JS logic for result fetching
│── results.json        # Mock database (JSON)
│── students.sql        # SQL schema (real database model)
│── README.md           # Project documentation

---

## 🚀 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/saikiranreddy-282/student-result-portal-v2.git
   
2. Open the folder in VS Code
3. Right-click index.html → Open with Live Server
4. Enter a sample roll number (e.g., 1001)
5. Click View SQL to see the SQL structure

## 💡 Future Improvements
- Add a real backend using Node.js + MySQL
- Implement student login and admin dashboard
- Create PDF download for marksheets
- Add more subjects and filters
