# 🌾 Agriculture Website – Weather, Crops & Farming Guidance

This project is a **complete agriculture-focused website** designed to help farmers access essential information such as **weather forecasting**, **crop details**, **fertilizer calculations**, and **agriculture news**.  
The goal is to support farmers with accurate, easy-to-understand, and accessible resources that improve decision-making in farming.

---

## 🚀 Live Demo  
🔗https://agriculture-website-p3k6.vercel.app/

---

## 📌 Features

### 🌦️ **Weather Forecast**
- Real-time weather data using **OpenWeatherMap API**  
- Shows:
  - Temperature  
  - Humidity  
  - Wind speed  
  - Pressure  
  - Sunrise & Sunset  
  - Weather condition icons  
- API is safely handled through **Vercel Serverless API Route**

### 🌱 **Crop Information**
Dedicated pages for:
- Wheat  
- Rice  
- Jowar  
- Turmeric  
- Potatoes  
- And more…

Each page explains:
- Soil requirements  
- Climate  
- Irrigation  
- Harvesting  
- Best practices

### 📊 **Fertilizer Calculator**
A simple calculator to help farmers determine the required nutrients based on crop needs.

### 📰 **Agriculture News**
A section to keep farmers updated with the latest farming and market updates.

---

## 🗂️ Project Structure

/
├── api/
│ └── weather.js # Serverless weather API
├── images/ # Icons & illustrations
├── index.html # Homepage
├── weather.html # Weather page
├── Calculator.html # Calculator page
├── news.html # News page
├── Agri.html # Agriculture guide page
├── *.html # Other crop pages
├── *.css # Styling files
└── app.js # Frontend logic


---

## ⚙️ **Tech Stack Used**
- **HTML5**
- **CSS3**
- **JavaScript**
- **OpenWeatherMap API**
- **Vercel (Hosting + Serverless Functions)**

---

## 🔐 Environment Variables (Vercel)
In Vercel dashboard → *Project Settings → Environment Variables*:

---

## 🛠️ Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourrepo.git
2.The frontend runs directly by opening:
index.html

3.Backend API runs only on Vercel:
/api/weather?city=pune

📤 Deployment
The project is deployed using Vercel:
Push project to GitHub
Connect GitHub repo to Vercel
Add API key as environment variable
Deploy 🎉
