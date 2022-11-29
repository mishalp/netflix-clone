import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { imageUrl } from '../../Constants/constants'
import './RowPost.css'

function RowPost(props) {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(props.url).then((res)=>{
      console.log(res.data);
      setMovies(res.data.results)
    }).catch(err=>console.log(err))
  }, [])
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj, key)=>
            <img key={key} className={props.isSmall ? 'small-poster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
        </div>
    </div>
  )
}

export default RowPost