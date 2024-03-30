import React from 'react'

export default function Card2(props) {
  return (
    <div>
        <img src={props?.gallery[0]?.image} alt="" />
    </div>
  )
}
