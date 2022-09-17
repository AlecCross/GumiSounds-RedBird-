import React from 'react'

export default function Sound({ sound }) {
    const play = () => {
        new Audio(sound).play()
    }
    return <button style={{backgroundColor: "rgba(160,160,40,1)", borderRadius: 10, width: "100%"}} onClick={play}>▶ Play 🦜</button>
}
