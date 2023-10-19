import React from 'react'
import '../Styles/App.css'

const Header = () => {
  return (
    <div className="header-component">
      <div className="logo">
        <img src="./images/troll-face.png" alt="Troll face image" />
        <h1>Meme Generator</h1>
      </div>
      <h4>React Course - Project 3</h4>
    </div>
  )
}

export default Header
