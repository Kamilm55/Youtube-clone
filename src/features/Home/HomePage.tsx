import React from 'react'
import Categories from '../../components/Categories'
import Feed from '../Feed/Feed'
import Search from './Search';
import {  useAppSelector } from '../../app/hooks';
import {  selectIsloading, selectSearched } from './searchSlice';
import CircularProgress from '@mui/material/CircularProgress';


const HomePage:React.FC = () => {
  const selectedCategory = useAppSelector(selectSearched) ; 
  const isLoading = useAppSelector(selectIsloading) ; 
  return (
    <>
    <Search/>
    <div className='d-flex p-relative resParent'>
    <Categories />
    <div className='d-flex flex-column'>
    {isLoading === true ? null :   (
    <h1 className='m-4  '> <span className='text-danger'>{selectedCategory}</span> videos</h1>)}
    <Feed selectedCategory={selectedCategory}/>
    </div>
    </div>
    </>
  )
}

export default HomePage