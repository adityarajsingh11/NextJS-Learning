'use client'

import Button from '@/Button';
import { useRef, useState } from 'react'


export default function Home() {

  const [count, setCount] = useState(0)

  function fn(){

  }

  const input=useRef<HTMLInputElement>(null)

  const handlesubmit=(e:React.FormEvent)=>{
    e.preventDefault()
  }

  return (
    <div>
          <Button data="aditya" action={fn}/>

          <form action="" onSubmit={handlesubmit}>
            <input type='text' ref={input}></input>

          </form>
    </div>
  );
}
