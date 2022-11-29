import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/constants'


function Banner() {

  const [movie, setMovie] = useState()

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data.results[0]);
      setMovie(res.data.results[0])
    })
  }, [])
  
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ''})`}}
     className='banner'>
        <div className="content">
            <h1 className='title'>{movie ? movie.title: ''}</h1>
            <div className="banner-buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview: ''}</h1>
        </div>
        <div className="fade">
            
        </div>
    </div>
  )
}

export default Banner