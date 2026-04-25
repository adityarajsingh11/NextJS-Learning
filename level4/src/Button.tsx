import React from 'react'

type buttonProps = {
    data:string
    action:()=>void
}

function Button({data,action}:buttonProps) {
  return (
    <div>
        hello
    </div>
  )
}

export default Button