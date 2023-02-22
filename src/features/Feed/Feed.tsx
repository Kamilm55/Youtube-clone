import React,{useEffect,useState} from 'react'
import uuid from 'react-uuid'
import VideoCard from '../../components/VideoCard'
import { fetchFromApi } from '../../API/FetchFromApi';
import { selectIsloading } from '../Home/searchSlice';
import { useAppSelector } from '../../app/hooks';
import { CircularProgress } from '@mui/material';

type Props = {
  selectedCategory?:string ;
  videosArr?:Array<object>;
// imgUrl:string;
}

const Feed:React.FC <Props>= ({selectedCategory,videosArr}) => {
  const [searchedArr , setArr] = useState<{Arr:{}[],hasError:boolean}>({Arr:[],hasError:false});
  const isLoading = useAppSelector(selectIsloading);

  useEffect(()=>{
    if(selectedCategory && selectedCategory !== ''){
      fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then( res => res.message ? setArr({Arr:[] ,hasError:res.message})  : setArr({Arr:res ,hasError:false}) )
    }
    if(!selectedCategory && videosArr){
      setArr({Arr:videosArr , hasError:false})
    }
},[selectedCategory,videosArr])

  return(
    <>
    {isLoading === true ? <div className="loadingDiv d-flex justify-content-center align-items-center "> <CircularProgress size={50}/> </div> :   (
     <div className='Feed ' >
      <div className="gap-4  FeedRow d-flex flex-wrap " >
      {(searchedArr.hasError === false && searchedArr.Arr !== undefined) ? searchedArr.Arr.map((item:any, index:number) =>  {
         return(
                <VideoCard  key={uuid()}
                className={(item.id.kind === 'youtube#channel') ? 'channel' : 'video'} 
                item={item}
                imgUrl={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
                channelTitle={item.snippet.channelTitle}
                />
          )
        }): <div className='vh-100' key={uuid()}>
          <h1>{searchedArr.hasError}</h1>
          <p>I use free api (it is limited) , That's why this api don't support your search</p>
          </div>}
        
    </div>
    </div>
  )}
    
    </>
    )
  
}

export default Feed