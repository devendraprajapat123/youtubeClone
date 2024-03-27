import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import video1 from '../../Assests/video.mp4'
import like from '../../Assests/like.png'
import dislike from '../../Assests/dislike.png'
import share from '../../Assests/share.png'
import save from '../../Assests/save.png'
import jack from '../../Assests/jack.png'
import user_profile from '../../Assests/user_profile.jpg'
import { API_KEY, value_converter } from '../../Data'
import moment from 'moment'
import { useParams } from 'react-router-dom'







const Playvideo = () => {

    const { videoId } = useParams()
    const [apiData, setApiData] = useState(null)
    const [channelData, setChannelData] = useState(null)
    const [commentData, setCommentData] = useState([])

    const fetchVideoData = async () => {
        // fetching videos data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))



    }

    useEffect(() => {
        fetchVideoData()
    }, [videoId])

    console.log(apiData);


    const fetchOtherData = async () => {
        //fetching Channel Data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData ? apiData.snippet.channelId : ""}&key=${API_KEY}`

        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data? data.items[0] : ""))

        // fetching comment

        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`

        fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))

    }


    useEffect(() => {
        fetchOtherData()
    }, [apiData])



    return (
        <div className='play-video'>

            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="Our Winter Trip!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className='play-video-info'>
                <p>{value_converter(apiData ? apiData.statistics.viewCount : "60K")} View &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
                <div>
                    <span>
                        <img src={like} alt=''></img>{value_converter(apiData ? apiData.statistics.likeCount : "")}
                    </span>

                    <span>
                        <img src={dislike} alt=''></img>
                    </span>

                    <span>
                        <img src={share} alt=''></img>Share
                    </span>

                    <span>
                        <img src={save} alt=''></img>Save
                    </span>

                </div>
            </div>
            <hr />
            <div className='publisher'>
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt=''></img>
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
                    <span>{value_converter(channelData ? channelData.statistics.subscriberCount : "")} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='vid-description'>
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Here"}</p>

                <hr />
                <h4>{value_converter(apiData ? apiData.statistics.commentCount : "120")} Comments</h4>
                {
                    commentData.map((item, index) => {
                        return (
                            <div key={index} className='comment'>
                                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=''></img>
                                <div>
                                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                    <div className='comment-action'>
                                        <img src={like} alt=''></img>
                                        <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                        <img src={dislike} alt=''></img>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


                {/* <div className='comment'>
                    <img src={user_profile} alt=''></img>
                    <div>
                        <h3>Devendra Prajapat <span>1 day ago</span></h3>
                        <p>A global computer network providing a variety of information and cc of interconnected network using standardized communication protocols.</p>
                        <div className='comment-action'>
                            <img src={like} alt=''></img>
                            <span>245</span>
                            <img src={dislike} alt=''></img>

                        </div>
                    </div>

                </div>

                <div className='comment'>
                    <img src={user_profile} alt=''></img>
                    <div>
                        <h3>Devendra Prajapat <span>1 day ago</span></h3>
                        <p>A global computer network providing a variety of information and cc of interconnected network using standardized communication protocols.</p>
                        <div className='comment-action'>
                            <img src={like} alt=''></img>
                            <span>245</span>
                            <img src={dislike} alt=''></img>

                        </div>
                    </div>

                </div>

                <div className='comment'>
                    <img src={user_profile} alt=''></img>
                    <div>
                        <h3>Devendra Prajapat <span>1 day ago</span></h3>
                        <p>A global computer network providing a variety of information and cc of interconnected network using standardized communication protocols.</p>
                        <div className='comment-action'>
                            <img src={like} alt=''></img>
                            <span>245</span>
                            <img src={dislike} alt=''></img>

                        </div>
                    </div>

                </div> */}


            </div>

        </div>
    )
}

export default Playvideo