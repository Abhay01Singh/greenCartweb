🥬 Green Cart

Green Cart is an online grocery shopping platform where users can browse, purchase, and get groceries delivered to their doorstep. It supports online payments as well as Cash on Delivery (COD) for a seamless shopping experience.

🚀 Features

🛒 Product Browsing – View grocery items by categories.

🔍 Search & Filter – Quickly find the items you need.

🛍️ Cart & Checkout – Add items to cart and place orders.

💳 Payment Options – Pay via Online Gateway or choose Cash on Delivery.

👤 Authentication – Secure login & signup with JWT.

📦 Order Management – Track orders and manage deliveries.

📱 Responsive UI – Works on desktop, tablet, and mobile.

🛠 Tech Stack
Frontend (client/)

React.js + Vite

TailwindCSS

Axios (API calls)

Context API (state management)

Backend (server/)

Node.js + Express

MongoDB + Mongoose

JWT Authentication

Multer / Cloudinary (for product images)

Other Integrations

Stripe / Razorpay (for payments)

COD mode for offline payments

⚡ Getting Started
1️⃣ Clone Repository
git clone https://github.com/yourusername/green-cart.git
cd green-cart

2️⃣ Install Dependencies
# Backend
cd server
npm install

# Frontend
cd client
npm install

3️⃣ Setup Environment Variables
Backend (server/.env)
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_url
STRIPE_SECRET_KEY=your_stripe_key

Frontend (client/.env)
VITE_API_URL=http://localhost:5000/api

4️⃣ Run the App
# Backend
cd server
npm run dev

# Frontend
cd client
npm run dev

📂 Project Structure
green-cart/
│
├── client/               # React frontend
│   ├── src/
│   │   ├── assets/       # Images, icons
│   │   ├── components/   # Reusable components
│   │   ├── context/      # Auth & Cart Context
│   │   ├── pages/        # Pages (Home, Cart, Checkout, Login, Orders)
│   │   └── App.jsx
│
├── server/               # Node.js backend
│   ├── configs/          # DB & Cloudinary configs
│   ├── controllers/      # Business logic
│   ├── middlewares/      # Auth, error handling
│   ├── models/           # Mongoose models (User, Product, Order)
│   ├── routes/           # API routes
│   └── server.js         # Main entry
│
└── README.md

🧑‍💻 Contributors

Your Name – Abhay Pratap Singh

📜 License

This project is licensed under the MIT License – free to use and modify.
