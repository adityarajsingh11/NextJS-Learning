
# Level 6 - Data Fetching in NextJS

---

# 🚀 🔥 Data Fetching kya hota hai?

👉 Simple line:

> Server ya API se data lana aur usko page pe dikhana

---

# 🧠 Next.js me 4 types hote hain

| Type | Full Form                       | Kahan hota hai   |
| ---- | ------------------------------- | ---------------- |
| SSR  | Server Side Rendering           | Server Component |
| SSG  | Static Site Generation          | Server Component |
| ISR  | Incremental Static Regeneration | Server Component |
| CSR  | Client Side Rendering           | Client Component |

---

# 🚀 1. SSR (Server Side Rendering)

## 🔹 Meaning

👉 Har request pe fresh data fetch hota hai

## 🔹 Code

```js
let response = await fetch("http://localhost:3000/api/user", {
  cache: "no-store"
})
```

---

## 🧠 Samajh

👉 Har baar jab user page open kare:

* API call hogi
* fresh data milega


## 🍽️ Analogy

> Har baar naya khana banana 🍲


## 🔥 Use Case

* dashboard
* user profile
* real-time data

---

# 🚀 2. SSG (Static Site Generation)

## 🔹 Meaning

👉 Build time pe data fetch hota hai

## 🔹 Code

```js
let response = await fetch("http://localhost:3000/api/user", {
  cache: "force-cache"
})
```


## 🧠 Samajh

👉 Ek baar data fetch → save → sab users ko same


## 🍽️ Analogy

> Ek baar khana bana ke store kar diya 🍱


## 🔥 Use Case

* blogs
* landing page

---

# 🚀 3. ISR (Incremental Static Regeneration)

## 🔹 Meaning

👉 Static + auto update after some time

## 🔹 Code

```js
let response = await fetch("http://localhost:3000/api/user", {
  next: {
    revalidate: 5
  }
})
```


## 🧠 Samajh

👉 Page static hai
👉 par har 5 sec me update ho jayega


## 🍽️ Analogy

> Store kiya hua khana, par time-time pe fresh bana dete hain 🔄


## 🔥 Use Case

* news
* e-commerce
* changing content

---

# 🚀 4. CSR (Client Side Rendering)

## 🔹 Meaning

👉 Data browser me fetch hota hai

## 🔹 Example

```js
useEffect(() => {
  fetch("/api/user")
}, [])
```


## 🧠 Samajh

👉 Page load hoga → fir data aayega

👉 User ko loading dikhega


## 🍽️ Analogy

> Order diya → wait karo → khana aayega 🍔

---

## 🚀 ✅  CSR Code

```jsx id="csr002"
'use client'

import { useEffect } from 'react'

export default function Page() {

  const handleApi = async () => {
    let response = await fetch('/api/user')
    let data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    handleApi()
  }, [])

  return (
    <div>
      CSR Page (Check Console)
    </div>
  )
}
```


## 🧠 Simple Samajh

👉 Ye kya kar raha hai:

* page load hua
* `useEffect` run hua
* API call hui
* data console me print hua

---

# ⚠️ IMPORTANT RULE

👉 SSR / SSG / ISR:

❌ Client Component me nahi use kar sakte
✅ Sirf Server Component me

---

# 🚀 Next.js 15+ (Important Change)

👉 Ab ye use hota hai:

| Type | Fetch Option                  |
| ---- | ----------------------------- |
| SSR  | `{ cache: "no-store" }`       |
| SSG  | `{ cache: "force-cache" }`    |
| ISR  | `{ next: { revalidate: X } }` |



