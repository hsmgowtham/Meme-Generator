import React from 'react';
import meme_data from '../memesData.js'

export default function Meme() {
    // let [memeImgURL, setMemeImgURL] = React.useState("https://i.imgflip.com/265k.jpg");


    const [meme, setMeme] = React.useState({
        "topText": "",
        "bottomText": "",
        "randomImage": "https://i.imgflip.com/265k.jpg"

    })

    const [allMemeImages, setAllMemeImages] = React.useState(meme_data)
    function getRandomMemeURL(event) {
        event.preventDefault();
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        console.log(randomIndex)
        const url = memesArray[randomIndex].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <section className='section--form'>
                <div className='form'>

                    <input type='text' className='form--inputs' onChange={handleChange} name="topText" placeholder='Enter top text' value={meme.topText} />
                    <input type='text' className='form--inputs' onChange={handleChange} name="bottomText" placeholder='Enter Bottom text' value={meme.bottomText} />

                    <button onClick={getRandomMemeURL} className='form--button'>Get a new meme image 🖼</button>
                </div>

            </section>
            <section>
                <div className='meme'>
                    <img src={meme.randomImage} className='meme--img' alt='meme' />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </section>

        </main>
    )
}