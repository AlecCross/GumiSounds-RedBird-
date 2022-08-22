import React from 'react'

export default function Sound({ sound }) {
    const play = () => {
        new Audio(sound).play()
    }
    return <button onClick={play}>play</button>
}
