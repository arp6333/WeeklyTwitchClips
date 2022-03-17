import React from 'react'
import { TwitchClip } from 'react-twitch-embed'

const Videos = ({ videos }) => {

    return (
    <div>
        <center><h1>Clips</h1></center>
        {
            videos.map((video) => (
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">{video.id}</h5>
                    <p class="card-text">{video.created_at}</p>
                    </div>
                    
                    <div>
                        <TwitchClip autoplay={false} clip={video.id} parent={['localhost']} />
                    </div>
                </div>
            ))
        }
    </div>
    )
};

export default Videos