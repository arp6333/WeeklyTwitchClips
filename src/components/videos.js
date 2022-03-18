import React from 'react'
import { TwitchClip } from 'react-twitch-embed'
import config from '../config'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

const Videos = ({ videos }) => {
    return (
        <div style={{ backgroundColor: 'black'}}><center>
            <h1>Clips</h1>
            <Carousel nextLabel='' prevLabel ='' indicators={false} interval={null}>
            {
                videos.map((video) => (
                    <Carousel.Item>
                        <TwitchClip
                            className='d-block w-100 clip'
                            autoplay={false}
                            clip={video.id}
                            parent={[config.PARENT]}
                        />
                        
                        <Carousel.Caption className='captions'>
                            <h5>{video.title} {video.id}</h5>
                            <p>From {video.broadcaster_name} at {video.created_at}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
            </Carousel>
        </center></div>
    )
};

export default Videos