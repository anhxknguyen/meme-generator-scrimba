import React, {useState} from 'react'
import memesData from '../memesData'

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    image: 'http://i.imgflip.com/1bij.jpg'
  })

  const [allMemes, setAllMemes] = useState(memesData)


  const generateMeme = () => {
    const memesArray = allMemes.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const randomMeme = memesArray[randomNum].url
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        image: randomMeme
      }
    })
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
      <img src={meme.image} alt="meme" className="meme-image"/>
    </div>
  )
}

export default Meme
