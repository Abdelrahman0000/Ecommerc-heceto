import React, { useEffect } from 'react'

export default function Alert({removeallert}) {
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      removeallert();
    },1500)
    return ()=>clearTimeout(timeout)
  })
  return (
    <p className={`alert alert-success`}>Added successfully</p>
  )
}
