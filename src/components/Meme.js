import React from 'react';

export default function Meme() {


    const [meme, setMeme] = React.useState({
        "topText": "",
        "bottomText": "",
        "randomImage": "https://i.imgflip.com/265k.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        console.log("Use Effect Rendered")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))

    }, [])
    console.log("all Memes:", allMemes)

    function getRandomMemeURL(event) {
        event.preventDefault();
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        console.log(randomIndex)
        const url = allMemes[randomIndex].url
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