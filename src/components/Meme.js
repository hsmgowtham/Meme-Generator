import React from 'react';
import meme_data from '../memesData.js'

export default function Meme() {
    let [memeImgURL, setMemeImgURL] = React.useState("");
    function getRandomMemeURL(event) {
        event.preventDefault();
        const memes = meme_data.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        console.log(randomIndex)
        setMemeImgURL(memes[randomIndex].url)
        console.log(memeImgURL)
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
                <img src={memeImgURL} className='meme--img' alt='meme' />
            </section>

        </main>
    )
}