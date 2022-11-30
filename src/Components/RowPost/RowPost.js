import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../Constants/constants'
import './RowPost.css'
import YouTube from 'react-youtube'

function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((res)=>{
      console.log(res.data);
      setMovies(res.data.results)
    }).catch(err=>console.log(err))
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data);
      if(res.data.results.length!=0){
        setUrlId(res.data.results[0])
      }
      else{
        alert('No item to display')
      }
    }).catch((err)=>{
      alert('Not Found')
    })
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj, key)=>
            <img onClick={()=>handleMovie(obj.id)} key={key} className={props.isSmall ? 'small-poster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
        </div>

        
        { urlId && <div className="video-div">
            <button onClick={()=>{setUrlId('')}}>X</button>
            <YouTube className="video-div-inner" videoId={urlId.key} opts={opts} />
        </div>}
    </div>
  )
}

export default RowPost