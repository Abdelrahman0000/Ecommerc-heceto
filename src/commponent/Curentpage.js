import React from 'react'

export default function Curentpage({titel,allpage,current}) {
  return (
    <div className="current">

<h2>{titel}</h2>
{allpage&& <p>{allpage} {' '} <span>{current} </span></p>}
    </div>
  )
}
