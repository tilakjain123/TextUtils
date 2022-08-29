import React from 'react'

export default function About(props) {
    return (
        <div className={`my-4 p-4 text-${props.mode==='light'? 'Dark' : 'light'}`}>
            <h1>About Us</h1>
            <p>My name is Tilak and I am a BCA Student. This is my first ever project build using Reactjs. I have learned using a tutorial by Codewithharry on Youtube.
                Textutils is a text based utility which helps everyone to handle and modify their texts.
            </p>
            <small style={{color:'grey'}}>Made by Tilak Jain</small>
        </div>
    )
}
