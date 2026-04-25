

# Level 5 - API Routes
---

# 🚀 🔥 1. Simple API Route (GET & POST)

## 📂 Route:

```bash
/api/user
```

---

## 🔹 GET API

```ts
export async function GET() {
    return NextResponse.json({
        name: "aditya",
        age: 21
    })
}
```

### 🧠 Samajh:

👉 Browser ya frontend jab request karega:

```bash
GET /api/user
```

👉 Response milega:

```json
{
  "name": "aditya",
  "age": 21
}
```

👉 Use:

* data fetch karna

---

## 🔹 POST API

```ts
export async function POST(request: NextRequest) {
    let { name, age } = await request.json()

    return NextResponse.json({
        name,
        age
    })
}
```

### 🧠 Samajh:

👉 POST me data bhejte hain:

```json
{
  "name": "rahul",
  "age": 22
}
```

👉 API usko receive karega → response dega

---

## 🔥 Important:

| Method | Use         |
| ------ | ----------- |
| GET    | data lena   |
| POST   | data bhejna |

---

# 🚀 🔥 2. Dynamic Route API

## 📂 Route:

```bash
/api/post/[id]
```

👉 Example:

```bash
/api/post/67
```

---

## 🔹 Code

```ts
export async function GET(request: NextRequest, { params }: any) {

    const { id } = await params

    return NextResponse.json({
        postId: id
    })
}
```

---

## 🧠 Samajh:

👉 URL:

```bash
/api/post/67
```

👉 Output:

```json
{
  "postId": "67"
}
```

---

## ⚠️ Important (Next.js 16)

👉 params ab Promise hai:

```ts
const { id } = await params ✅
```

---

## 🔥 Use Case

* user id fetch
* product id
* post id

---

# 🚀 🔥 3. Query Parameter API

## 📂 Route:

```bash
/api/search?q=nextjs
```

---

## 🔹 Code

```ts
export async function GET(request: NextRequest) {
    let query = request.nextUrl.searchParams.get("q")

    return NextResponse.json({ query })
}
```

---

## 🧠 Samajh:

👉 URL:

```bash
/api/search?q=nextjs
```

👉 Output:

```json
{
  "query": "nextjs"
}
```

---

## 🔥 Use Case

* search functionality
* filters
* pagination

---

# 🧠 Final Concept Difference

| Type          | Example               | Use           |
| ------------- | --------------------- | ------------- |
| Static API    | `/api/user`           | fixed data    |
| Dynamic Route | `/api/post/67`        | ID based data |
| Query Param   | `/api/search?q=react` | search/filter |

---

# 🚀 Real Flow (Project Level)

```text
Frontend → API → Response → UI update
```



