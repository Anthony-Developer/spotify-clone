import React from 'react'
import '../Styling/Footer.css'
import { Grid, Slider } from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

function Footer() {
    return (
        <div className="footer-div">
            <div className="footer-left">
                <img className="footer-album-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Sabs.jpg" alt="" />
                <div className="footer-song-info">
                    <h4>Black Sabbath</h4>
                    <p>Black Sabbath</p>
                </div>
            </div>

            <div className="footer-center">
                <ShuffleIcon className="footer-green" />
                <SkipPreviousIcon className="footer-icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
                <SkipNextIcon className="footer-icon" />
                <RepeatIcon className="footer-green" />
            </div>

            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer-icon" />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer-icon" />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
