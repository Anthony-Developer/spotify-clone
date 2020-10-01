import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import '../Styling/Player.css'

function Player({spotify}) {

    return (
        <div className="player-div">
            <div className="player-body">
                <Sidebar />
                <Body />
            </div>

            <Footer />
            
        </div>
    )
}

export default Player
