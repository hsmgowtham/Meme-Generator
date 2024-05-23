import React from 'react'

export default function Header() {
    const troll_face_img = require(`../assets/images/Troll Face.png`);
    return (
        <header>
            <img src={troll_face_img} alt='Troll Face' />    
            <h1 className='header--logo'>Meme Generator</h1>    
        </header>
    )
}