import React from 'react'

const Meme = () => {
  return (
    <div className="meme-component">
        <div className="meme-input-area">
            <input className="text-input" type="text" placeholder="Top text"/>
            <input className="text-input" type="text" placeholder="Bottom text"/>
        </div>
        <button className="button">Get a new meme image 🖼</button>
    </div>
  )
}

export default Meme
