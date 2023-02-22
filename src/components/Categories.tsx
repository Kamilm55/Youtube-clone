import React, { useEffect, useState } from 'react'
import { search, selectSearched } from '../features/Home/searchSlice';
import { useAppDispatch } from '../app/hooks';
import { useSelector } from 'react-redux';

const Categories = () => {
    const [searched , setSearched] = useState('Coding');
    const categories = [ 'Coding' , 'Nur Soz' ,'A. El Ussi' , 'Ihsan Senocak' , 'Halil Konakci' , 'JavaScript' , 'Programming' , 'Kadir Misiroglu' , 'Python'] 
    const dispatch =  useAppDispatch();
    const searchedInput = useSelector(selectSearched)
    useEffect(()=>{
        dispatch(search(searched));
    },[searched]);
    
    return (
    <div className='CaregoriesBar'>
        {categories.map((item,index) =>{
            return (
                <div 
                onClick={(e) => {
                    setSearched((e.target as HTMLElement).innerText);  }
                }
                style={{backgroundColor:searchedInput === item ? 'red' : 'black'}}
                 key={index}
                 className='text-light mx-2 rounded-pill category my-2  p-3 d-flex align-items-center '>
                    {item}
                </div>
            )
        })}
    </div>
  )
}

export default Categories