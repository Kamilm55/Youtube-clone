import React from 'react'
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

type Props = {
  imgUrl:string;
  title:string;
  channelTitle:string;
  className:string;
  item:any ;
  }

const VideoCard  = ({imgUrl,title,channelTitle ,item, className}:Props) => {
  const navigate = useNavigate();
  // console.log(item);
  
  function handleClick (element:HTMLElement) {
    if(element.classList.contains('rChannel'))
    navigate(`/channel/${item.snippet.channelId}` , {state:{item:item}});
    else
    navigate(`/watch/${item.id.videoId}` , {state:{item:item}});

    window.scrollTo(0, 0);   
  }

  return(
    <>
  {(className !== 'channel') ?  (
    <div 
    onClick={(e) =>handleClick(e.target as HTMLElement)}
    className={`card videoCard ${className} `}>
        <img className="card-img-top" src={imgUrl} alt="Card image cap"/>
        <div className="card-body p-3">
    <h4 className="card-text">{title}</h4>
    <div
    className='d-flex py-2 rChannel'>
    <p
         onClick={(e) =>handleClick(e.target as HTMLElement)}

    className={`card-text channelName rChannel text-muted `}>{channelTitle}</p>
    <i
         onClick={(e) =>handleClick(e.target as HTMLElement)}

    className="bi bi-check-circle-fill rChannel text-muted "></i>
    </div>
  </div>
</div>
  ) : (
      <div
      onClick={() => {
        navigate(`/channel/${item.snippet.channelId}`, {state:{item:item}});
      }}
      className={`card   ${className} `}>
      <div className="card-header ">
      <img className="card-img-top rounded-circle mx-auto" src={imgUrl} alt="Card image cap"/>
      </div>
      <div className="card-body p-3">
        <div 
         onClick={() => {
          navigate(`/channel/${item.snippet.channelId}` , {state:{item:item}});
        }}
        className='d-flex py-2 mx-auto justify-content-center'>
        <p className={`card-text channelName text-light fs-3  `}>{channelTitle}</p>
        <i className="bi bi-check-circle-fill text-muted m-2"></i>
        </div> 
      </div>
    </div>
    )}
  </>
  )
}

export default VideoCard