import React,{useState , useEffect} from 'react'
import ReactPlayer from 'react-player/youtube';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch , useAppSelector } from '../../app/hooks';
import { loading, search , selectIsloading, selectSearched } from './searchSlice';

const Search:React.FC  = () => {
    const [value , setValue] = useState('');
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const dispatch = useAppDispatch();
    const selectedCategory = useAppSelector(selectSearched)

    function handleSubmit (e:React.FormEvent) {
      e.preventDefault();
      if(pathname !== '/'){
        navigate('/')        
      }
      dispatch(loading());
      setTimeout(() => {
        dispatch(search(value));//set function in reduxToolkit
      }, 1000);
      
      setTimeout(() =>{
        dispatch(loading())
      },1500)
      // setSearched(value);
    }    
  return (
    <>
      <form 
      onSubmit={(e)=>handleSubmit(e)}
       className='mx-auto sticky-top Search ' >
        <div className="col-8 col-sm-7  col-lg-5 d-flex my-4 mx-auto ">
        <div className='imgParent ' onClick={()=>{navigate('/'); window.location.reload()}}>
              <img className='img-fluid' src='/youtube.svg' alt='logo' />  
          </div>
          <div className='d-flex w-100 align-items-center'>
            <div className="input-group  rounded-pill ">
                <input placeholder='Search...' onChange={(e)=>setValue(e.target.value)} 
                className="form-control  border rounded-pill  px-3" type="text"  id="example-search-input"/>
                <span className="input-group-append ">
                    <button title='search' onClick={handleSubmit} className="btn searchBtn bg-white rounded-pill ms-n5" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
                </div>
            </div>
        </div>
      </form>
    </>
  )
}

export default Search