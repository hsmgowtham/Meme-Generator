import React from 'react';

export default function Meme() {
    return (
        <main>
            <section className='section--form'>
                <form className='form'>
                    
                    <input type='text' className='form--inputs' placeholder='Enter top text' />
                    <input type='text' className='form--inputs' placeholder='Enter Bottom text' />

                    <button className='form--button' type='submit'>Get a new meme image 🖼</button>
                </form>
            </section>

        </main>
    )
}