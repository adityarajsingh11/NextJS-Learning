

# 🚀 **Next.js Level 2 – App Router & Advanced Routing**

---

# 🔹 1. App Routing (Nested Routing)

👉 Next.js me routing **folder structure** se hoti hai

### 📂 Example:

```bash
app/
 ├── dashboard/
      ├── page.jsx
      ├── settings/
           ├── page.jsx
```

👉 URL:

* `/dashboard`
* `/dashboard/settings`

👉 Isko bolte hai:

> **Nested Routing (folder ke andar folder)**

---

## 🔹 Layout File (VERY IMPORTANT)

👉 `layout.js` ek wrapper hota hai jo **page.jsx ko wrap karta hai**

### 📌 Kaam:

* Common UI show karna (Navbar, Footer)
* Har page ke andar reuse hota hai

---

### 🔥 Flow:

```bash
layout.js → page.jsx render hota hai andar
```

👉 Final UI:

```jsx
Navbar
⬇
Page Content
⬇
Footer
```

---

# 🔹 2. Dynamic Routes

👉 Dynamic data ke liye use hota hai

---

## ✅ Type 1: Dynamic Segment

```bash
app/profile/[username]/page.jsx
```

👉 URL:

```
/profile/aditya
```

---

## ⚠️ Important (Next.js 16)

👉 `params` ab **Promise hota hai**

❌ Wrong:

```js
const username = params.username
```

❌ Wrong:

```js
await params.username
```

✅ Correct:

```js
const { username } = await params
```

---

## 🔹 Type 2: Catch-all Segment

```bash
app/docs/[...slug]/page.jsx
```

👉 URL:

```
/docs/a/b/c
```

👉 Output:

```js
slug = ["a", "b", "c"]
```

---

## 🔹 Type 3: Optional Catch-all

```bash
app/docs/[[...slug]]/page.jsx
```

👉 Works for:

```
/docs
/docs/a/b
```

---

# 🔹 3. Route Groups

👉 Folder ko `()` me wrap karte hai

```bash
app/(admin)/dashboard/page.jsx
```

👉 URL:

```
/dashboard
```

👉 `(admin)` URL me show nahi hota ❌

---

## 📌 Use Case:

* Code organize karne ke liye
* Different layouts apply karne ke liye

---

# 🔹 4. Parallel Routes

👉 Ek hi layout me **multiple pages ek sath render karna**

---

### 📂 Example:

```bash
app/
 ├── layout.js
 ├── @team/
 │     ├── page.jsx
 │     ├── default.js ✅
 ├── @analytics/
       ├── page.jsx
       ├── default.js ✅
```

---

## ⚠️ Rule:

👉 Har `@folder` ke liye:

```bash
default.js MUST ❗
```

---

## 📌 Use Case:

* Dashboard UI
* Netflix type layout (multiple panels)

---

# 🔹 5. loading.js

👉 Jab data load ho raha ho tab UI show karta hai

```bash
app/profile/loading.js
```

👉 Automatically show hota hai during loading

---

## 📌 Example:

```js
export default function Loading() {
  return <p>Loading...</p>
}
```

---

# 🔹 6. not-found.js

👉 Jab page exist nahi karta

```bash
app/not-found.js
```

👉 Custom 404 page

---

## 📌 Example:

```js
export default function NotFound() {
  return <h1>Page Not Found</h1>
}
```

---

# 🔹 7. "use client"

👉 Default Next.js = **Server Component**

👉 Agar tu React features use kare:

* useState
* useEffect
* event handlers

👉 toh likhna padega:

```js
"use client"
```

---

## 📌 Example:

```js
"use client"
import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return <button onClick={() => setCount(count+1)}>{count}</button>
}
```

