import React, { Component } from 'react';
import Videos from './components/videos';
import api from './api'
    
const date = new Date();
date.setDate(date.getDate() - 7);
const formattedDate = date.toISOString();

class App extends Component {
    render() {
        return (
            <Videos videos={this.state.videos} />
        )
    }

    state = {
        videos: []
    };

    componentDidMount() {
      const fetchData = async () => {
        const userId = await api.get(`https://api.twitch.tv/helix/users?login=PeachBepis`)
        console.log(userId)

        const following = await api.get(`https://api.twitch.tv/helix/users/follows?from_id=${userId.data.data[0].id}`)         
        console.log(following)

        var allClips = []
        for (const follows of following.data.data) {
          var clips = await api.get(`https://api.twitch.tv/helix/clips?broadcaster_id=${follows.to_id}&first=5&started_at=${formattedDate}`)
          
          for (const clip of clips.data.data) {
            allClips.push(clip)
          }
        }

        console.log(allClips)

        this.setState({
          videos: allClips
        })
      }
      fetchData()
    }
}

export default App;