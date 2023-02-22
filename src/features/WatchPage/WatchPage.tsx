import React, { useEffect ,useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useLocation, useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
import { fetchFromApi } from '../../API/FetchFromApi'
import ScrollToTop from '../../components/ScrollToTop'
import Feed from '../Feed/Feed'
import Search from '../Home/Search'


const WatchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [relatedVideos , setVideos] = useState([]);
  const [videoId, setId ] = useState('');
 
    useEffect(()=>{
      fetchFromApi(`search?part=snippet&relatedToVideoId=${location.state.item.id.videoId}&type=video`)
      .then(res => setVideos(res));

        setId(location.state.item.id.videoId);
    },[location.state.item]);

  return (
    <div key={uuid()}>
    <Search/>
    <div className="container-fluid">
    <div className="row d-flex watchParent gap-4">
        <ReactPlayer
        origin='https://youtube-cloneee.netlify.app'
      url={`https://www.youtube.com/watch?v=${videoId}`}
      className='react-player col-8 '
      controls={true}
      width="100"
      height='71vh'
      /> 
            <div className="videoDetails">
          <h1>{location.state.item.snippet.title}</h1>         
    <div className='d-flex py-2 c-pointer' 
     onClick={() =>{
      navigate(`/channel/${location.state.item.snippet.channelId}` , {state:{item:location.state.item}});
    }}
     >
        <p className={` channelName text-muted fs-3  `}>{location.state.item.snippet.channelTitle}</p>
        <i className="bi bi-check-circle-fill text-muted m-2"></i>
        </div> 
          </div>

        <Feed videosArr={relatedVideos}/>
    </div>
    </div>
    </div>
  )
}

export default WatchPage