import React, { useEffect, useState } from 'react'
import './Recommended.css'

import { API_KEY, value_converter } from '../../Data'
import { Link } from 'react-router-dom'

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([])

    const FetchData = async () => {
        const relatedvideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=us&videoCategoryId=${categoryId}&key=${API_KEY}`

        await fetch(relatedvideo_url).then(res => res.json()).then(data => setApiData(data.items))
    }

    useEffect(() => {
        FetchData()
    }, [])


    return (
        <div className='recommended'>
            {
                apiData.map((item, index) => {
                    return (
                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
                            <img src={item.snippet.thumbnails.medium.url} alt=''></img>
                            <div className='vid-info'>
                                <h4>{item.snippet.title}</h4>
                                <p>{item.snippet.channelTitle}</p>
                                <p>{value_converter(item.statistics.viewCount)} view</p>
                            </div>

                        </Link>
                    )
                })
            }







        </div>
    )
}

export default Recommended