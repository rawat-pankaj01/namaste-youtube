import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const response = await data.json();
    setVideos(response.items);
  }
  useEffect(()=> {
    getVideos();
  }, [])
  return (
    <div className='flex flex-wrap'>
      {videos.map(video =>
        <Link key={video.id}  to={"/watch?v=" + video.id}> <VideoCard info={video} /> </Link>)}
      
    </div>
  )
}

export default VideoContainer
