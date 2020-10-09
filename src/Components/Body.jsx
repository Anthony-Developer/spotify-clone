import React from 'react'
import '../Styling/Body.css'
import Header from '../Components/Header'

function Body({spotify}) {
    return (
        <div className="body-div">
            <Header spotify={spotify}/>
            <h1>Body Component</h1>
        </div>
    )
}

export default Body
