import React from 'react'

export default function SectionTitle(props) {
  return (
  <>
  
  <div className="component-title">
        <h2 >{props.title}</h2>
        <p >{props.text}</p>
</div>
  
  </>
  )
}
