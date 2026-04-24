

# 🚀 **Next.js Level 3 – Navigation & Optimization**

---

# 🔹 1. Navigation in Next.js

👉 Next.js me page change karne ke liye `<a>` tag nahi, balki `<Link>` use hota hai

## 🔹 Use:

```jsx
import Link from "next/link"

<Link href="/about">Go to About</Link>
```

---

## 🧠 Why `<Link>`?

* Page reload nahi hota ❌
* Fast navigation (SPA behavior) ✅
* Background me page prefetch hota hai ✅

---

## ⚡ Example

```jsx
<Link href="/profile/aditya">Profile</Link>
```

👉 Ye automatically:

* `/profile/[username]` route hit karega
* page fast load karega

---

# 🔹 2. Image Optimization

👉 Next.js me normal `<img>` ki jagah `<Image>` use hota hai

## 🔹 Import:

```jsx
import Image from "next/image"
```

---

## 🔹 Example:

```jsx
<Image 
  src="/profile.png" 
  alt="profile"
  width={200}
  height={200}
/>
```

---

## 🧠 Benefits:

* Automatic resizing ✅
* Lazy loading (scroll pe load) ✅
* Fast performance ✅
* Optimized format (WebP etc.) ✅

---

# 🔹 3. Font Optimization

👉 Next.js fonts ko **optimize karke locally serve karta hai**

## 🔹 Import Google Font:

```jsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

---

## 🔹 Use:

```jsx
<body className={inter.className}>
```

---

## 🧠 Benefits:

* Font pehle hi load ho jata hai ✅
* External request nahi lagta (Google pe hit nahi hota) ✅
* Faster rendering ✅

---

# 🔹 4. `display: 'swap'`

👉 Ye font loading strategy hai

---

## 🧠 Meaning:

> Jab tak font load nahi hota, tab tak fallback font show karo
> aur load hone ke baad replace kar do

---

## 🔹 Example (conceptual CSS):

```css
font-display: swap;
```

---

## ⚡ Result:

| Situation         | Behavior           |
| ----------------- | ------------------ |
| Font load slow    | fallback text show |
| Font load ho gaya | replace ho jayega  |

---

## 🧠 Simple Hinglish

👉 Blank text dikhane ke bajaye
👉 pehle koi normal font dikhao
👉 fir actual font load hone pe replace karo

