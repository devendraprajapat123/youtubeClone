import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../Assests/thumbnail1.png'
import thumbnail2 from '../../Assests/thumbnail2.png'
import thumbnail3 from '../../Assests/thumbnail3.png'
import thumbnail4 from '../../Assests/thumbnail4.png'
import thumbnail5 from '../../Assests/thumbnail5.png'
import thumbnail6 from '../../Assests/thumbnail6.png'
import thumbnail7 from '../../Assests/thumbnail7.png'
import thumbnail8 from '../../Assests/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../Data'
import moment from 'moment'
import { Spin } from 'antd'


const Feed = ({ category }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchdata = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&videoCategoryId=${category}&key=${API_KEY}`

        await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
        setLoading(true)
    }

    useEffect(() => {
        fetchdata()
    }, [category])




    return (
        <div className='feed'>
            {
                loading ?
                    data.map((item, index) => {
                        return (

                            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                                <img src={item.snippet.thumbnails.medium.url} alt=''></img>
                                <h2>{item.snippet.title}</h2>
                                <h3>{item.snippet.channelTitle}</h3>
                                <p>{value_converter(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                            </Link>
                        )
                    }) : <Spin  tip="Loading Please Check Internet Connection" size="large"> </Spin>
            }


        </div>
    )
}

export default Feed