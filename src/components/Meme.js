import React from 'react';
import meme_data from '../memesData.js'

export default function Meme() {
    function getRandomMemeURL(event) {
        event.preventDefault();
        const memes = meme_data.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        console.log(randomIndex)
        const url = memes[randomIndex].url;
        console.log(url)
    }
    return (
        <main>
            <section className='section--form'>
                <form className='form'>

                    <input type='text' className='form--inputs' placeholder='Enter top text' />
                    <input type='text' className='form--inputs' placeholder='Enter Bottom text' />

                    <button onClick={getRandomMemeURL} className='form--button'>Get a new meme image 🖼</button>
                </form>
            </section>

        </main>
    )
}