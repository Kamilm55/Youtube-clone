import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchFromApi } from '../../API/FetchFromApi'
import Feed from '../Feed/Feed'
import Search from '../Home/Search'

const ChannelPage = () => {
  const location = useLocation();
  const [channelVideos , setVideos] = useState([]);
  const [details , setDetails] = useState<any>({});

  useEffect(() =>{
    fetchFromApi(`channels?part=snippet&id=${location.state.item.snippet.channelId}`)
    .then(res => setDetails(res[0]));

    fetchFromApi(`search?channelId=${location.state.item.snippet.channelId}&part=snippet`)
    .then(res => setVideos(res));
  },[])
    
  return (
    <div className='Channel'>
        <Search/>
        {Object.keys(details).length > 0 ? (
          <div className="row bg-img mb-3">
          <img alt='channel' src={details.snippet.thumbnails.medium.url} className="avatar rounded-pill" />
          <div className="avatar-text text-center py-2">
              <h1 >{details.brandingSettings.channel.title}</h1>
              <p>{details.statistics.subscriberCount} subscribers</p>
          </div>
      </div>
        ) : null}
        

            <Feed  videosArr={channelVideos}/>
        
    </div>
  )
}

export default ChannelPage