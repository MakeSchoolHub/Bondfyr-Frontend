import React from 'react'
import './Footer.css'
function Footer(props) {
    const { name, year } = props
    return (
      <div className="Footer">
        <h1>{name} {year}</h1>
      </div>
    )
  }
export default Footer