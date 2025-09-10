# 🛠️ Basic CRUD App (Node.js + Express + MongoDB)

[![Node.js](https://img.shields.io/badge/Node.js-v22.19.0-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18.2-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6.0.6-brightgreen)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)

A simple **CRUD (Create, Read, Update, Delete)** API built using **Node.js, Express, and MongoDB (with Mongoose)**.  
This project demonstrates the fundamentals of RESTful APIs.

---

## 🚀 Features
- ➕ Create a product  
- 📄 Read all products  
- 🔍 Read a product by ID  
- ✏️ Update a product  
- ❌ Delete a product  

---

## 📂 Project Structure
Basic-CRUD app/
- controllers/ # API logic
- models/ # Mongoose schemas
- routes/ # Express routes
- index.js # Entry point
- package.json
- .gitignore

---
## ⚙️ Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/Prachitidagale910
/basic-crud-app.git
cd basic-crud-app
```
## 🛠️ API Endpoints

| Method | Endpoint              | Description            |
|--------|----------------------|------------------------|
| POST   | `/api/products`       | Create a new product   |
| GET    | `/api/products`       | Get all products       |
| GET    | `/api/products/:id`   | Get a product by ID    |
| PUT    | `/api/products/:id`   | Update a product by ID |
| DELETE | `/api/products/:id`   | Delete a product by ID |

### Example POST Request
```json
{
  "name": "Apple iPhone 15",
  "quantity": 50,
  "price": 79999,
  "image": "https://example.com/iphone.jpg"
}
```

## 📚 Acknowledgements
This project was developed by referring to the tutorial **"RUD API Tutorial – Node, Express, MongoDB"** by [freeCodeCamp.org](https://www.youtube.com/watch?v=_7UQPve99r4&t=2610s).

## 📜 License / Usage
This project is for **educational and learning purposes only**.  
It is not intended for commercial use.

