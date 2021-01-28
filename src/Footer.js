import React from 'react'
import './Footer.css';
import PlayCircleOutLineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid, Slider } from '@material-ui/core';
import PlaylistPLayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
 
function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left" >
                <img 
                className="footer__albumLogo"
                src="data:image/jpeg;base64,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" alt="" 
                />
                <div>
                    <h4>Lust</h4>
                    <p>Kendrick Lamar</p>

                </div>
            </div>
            <div className="footer__center" >
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon class="footer__icon" />
                <PlayCircleOutLineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green"/>
            </div>
            <div className="footer__right" >
                <Grid container space={2}>
                    <Grid item>
                        <PlaylistPLayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continious-slide" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
