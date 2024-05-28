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
    return (
        <main>
            <section className='section--form'>
                <div className='form'>

                    <input type='text' className='form--inputs' placeholder='Enter top text' />
                    <input type='text' className='form--inputs' placeholder='Enter Bottom text' />

                    <button onClick={getRandomMemeURL} className='form--button'>Get a new meme image 🖼</button>
                </div>

            </section>
            <section>
                <div className='meme'>
                    <img src={meme.randomImage} className='meme--img' alt='meme' />
                    <h2 className="meme--text top">One does not simply</h2>
                    <h2 className="meme--text bottom">Walk into Mordor</h2>
                </div>
            </section>

        </main>
    )
}