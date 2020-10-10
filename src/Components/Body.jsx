import React from 'react'
import '../Styling/Body.css'
import Header from '../Components/Header'
import SongRow from '../Components/SongRow'
import { useDataLayerValue } from '../DataLayer'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'

function Body({spotify}) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue()

    return (
        <div className="body-div">
            <Header spotify={spotify}/>
            
            <div className="body-info">
                <img src={discover_weekly?.images[0].url} alt=""/>
                
                <div className="body-info-text">
                    <strong>Playlist</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body-songs-view">
                <div className="body-icons">
                    <PlayCircleFilled className="body-play-icon" />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>

                {/* generated Songs */}
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
