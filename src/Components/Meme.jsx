import React, {useState} from 'react'
import memesData from '../memesData'

const Meme = () => {
  const [image, setImage] = useState("")


  const generateMeme = () => {
    const memesArray = memesData.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const randomMeme = memesArray[randomNum].url
    console.log(randomMeme)
    setImage(randomMeme)
  }


  return (
    <div className="meme-component">
      <div className="meme-form">
          <div className="meme-input-area">
              <input className="text-input" type="text" placeholder="Top text"/>
              <input className="text-input" type="text" placeholder="Bottom text"/>
          </div>
          <button onClick={generateMeme} className="button">Get a new meme image 🖼</button>
      </div>
      <img src={image} alt="meme" className="meme-image"/>
    </div>
  )
}

export default Meme
