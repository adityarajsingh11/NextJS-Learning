
# Level 4 - Typescript


# 🚀 1. Introduction (TypeScript kya hai?)

👉 TypeScript = JavaScript + Types

* Strongly typed language
* Microsoft ne banaya
* JavaScript ka superset hai

👉 Simple line:

> TypeScript errors ko **compile time pe pakad leta hai** (run hone se pehle)

---

# 🚀 2. Basic Types

## 🔹 Types list:

| Type           | Meaning          |
| -------------- | ---------------- |
| string         | text             |
| number         | number           |
| boolean        | true/false       |
| array          | list             |
| tuple          | fixed type array |
| enum           | named constants  |
| any            | anything allowed |
| void           | no return        |
| null/undefined | empty values     |

---

# 🚀 3. Arrays & Tuples

## 🔹 Array (simple language)

👉 Same type ke multiple values

```ts
let arr: number[] = [1, 2, 3]
```

---

## 🔹 Tuple

👉 Fixed size + fixed types

```ts
let user: [string, number] = ["Aditya", 20]
```

---

# 🚀 4. Functions

```ts
function add(a: number, b: number): number {
  return a + b
}
```

👉 Meaning:

* a, b → number
* return → number

---

# 🚀 5. Type Declaration & Type Inference

## 🔹 Declaration

```ts
let name: string = "Aditya"
```

## 🔹 Inference (auto detect)

```ts
let name = "Aditya"
```

👉 TypeScript khud samajh gaya → string

---

# 🚀 6. Type Aliases

👉 Custom type banana

```ts
type User = {
  name: string
  age: number
}

let u1: User = {
  name: "Aditya",
  age: 20
}
```

---

# 🚀 7. Interface

👉 Object ka structure define karta hai

```ts
interface User {
  name: string
  age: number
}

let u1: User = {
  name: "Aditya",
  age: 20
}
```

---

# 🚀 8. Difference: Type vs Interface

| Feature  | Type    | Interface        |
| -------- | ------- | ---------------- |
| Object   | ✅       | ✅                |
| Extend   | limited | better           |
| Use case | general | object structure |

👉 Example:

```ts
type A = { name: string }
type B = {b: string};
type AB = A & B;



interface B {
  name: string
}
interface B;extends A {
  age: number
}

```

---

# 🚀 9. Generics

👉 Reusable code banane ke liye

```ts
function identity<T>(value: T): T {
  return value
}

identity<string>("Hello")
identity<number>(10)
```

👉 Same function multiple types handle karega

---

# 🚀 10. Global Declaration (`type.d.ts`)

👉 Global types define karte hain

```ts
declare global {
  interface User {
    name: string
  }
}
```

👉 Poore project me use ho sakta hai

---

# 🚀 11. Union & Intersection

## 🔹 Union (OR)

```ts
let value: string | number

value = "Hello"
value = 10
```

---

## 🔹 Intersection (AND)

```ts
type A = { name: string }
type B = { age: number }

type C = A & B

let user: C = {
  name: "Aditya",
  age: 20
}
```

---

# 🚀 12. React with TypeScript

👉 React me types use karte hain

```tsx
type Props = {
  name: string
}

function Hello({ name }: Props) {
  return <h1>Hello {name}</h1>
}
```
---

# 🚀 React + TypeScript Important Types (Easy Samajh)

---

## 🔹 1. **ReactNode**

👉 Sabse common type

👉 Meaning:

> React jo kuch bhi render kar sakta hai

👉 Example:

```tsx
type Props = {
  children: React.ReactNode
}

function Box({ children }: Props) {
  return <div>{children}</div>
}
```

👉 Use:

* children props

---

## 🔹 2. **ReactElement**

👉 Ek single JSX element

👉 Example:

```tsx
const element: React.ReactElement = <h1>Hello</h1>
```

👉 Use:

* jab ek hi element pass karna ho

---

## 🔹 3. **JSX.Element**

👉 Component ka return type

```tsx
function App(): JSX.Element {
  return <h1>Hello</h1>
}
```

👉 Simple:

> component kya return karega

---

## 🔹 4. **ReactChild**

👉 Single child (strict)

👉 Allowed:

* string
* number
* ReactElement

```tsx
type Props = {
  child: React.ReactChild
}
```

👉 Rare use

---

## 🔹 5. **ReactPortal**

👉 Special case (advanced)

👉 Jab tu DOM ke bahar render karta hai (modals etc.)

```tsx
ReactDOM.createPortal(...)
```

👉 Beginner level pe skip kar sakta hai

---

## 🔹 6. **ReactFragment**

👉 `<></>` ka type

```tsx
const fragment: React.ReactFragment = (
  <>
    <h1>A</h1>
    <h2>B</h2>
  </>
)
```

👉 Grouping ke liye

---

## 🔹 7. **ReactComponentType<P>**

👉 Generic component type

```tsx
type Props = {
  Component: React.ComponentType<{ name: string }>
}
```

👉 Use:

* dynamic component pass karna

---

## 🔹 8. **React.FC<P>**

👉 Function component type

```tsx
const App: React.FC<{ name: string }> = ({ name }) => {
  return <h1>{name}</h1>
}
```

👉 Use:

* props typing

⚠️ Note:
👉 aajkal log `React.FC` avoid karte hain (optional hai)

---

# 🧠 Difference Samajh (Important)

| Type         | Use              |
| ------------ | ---------------- |
| ReactNode    | anything render  |
| JSX.Element  | component return |
| ReactElement | single element   |
| React.FC     | component type   |


---

# 🚀 Real Example (Important)

```tsx
type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props): JSX.Element {
  return <div>{children}</div>
}
```


