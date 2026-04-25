# 🚀 DevProfile Hub

A modern developer profile platform built using **Next.js** where users can explore and showcase developer profiles with a clean UI.

---

## 📌 Features

* ⚡ App Router (Next.js 13+)
* 🔁 Dynamic Routing (`/profile/[username]`)
* 🎨 Modern UI with Tailwind CSS
* 🌓 Light / Dark Mode
* 🖼️ Image Optimization (Next.js Image)
* 🔍 Profile Search (username based)
* 📱 Responsive Design

---

## 🛠️ Tech Stack

* **Frontend:** Next.js, React
* **Styling:** Tailwind CSS
* **Routing:** Next.js App Router

---

## 📂 Project Structure

```
app/
 ├── page.jsx                # Home Page
 ├── about/
 │     └── page.jsx         # About Page
 ├── profile/
 │     ├── page.jsx         # Username Input Page
 │     └── [username]/
 │           └── page.jsx   # Dynamic Profile Page
 ├── components/
 │     ├── Navbar.jsx
 │     ├── Footer.jsx
 │
 ├── layout.jsx             # Global Layout
```

---

## 🚀 Getting Started



### Install dependencies

```bash
npm install
```

###  Run the project

```bash
npm run dev
```

👉 Open: http://localhost:3000

---

## 🧠 Concepts Used

* Layout System (Navbar + Footer)
* Dynamic Routing
* Client vs Server Components
* useState & useRouter
* Tailwind Styling
* Dark Mode Toggle

---

## Notes 

For the working of tailwind css globalcss must inside layout.jsx
