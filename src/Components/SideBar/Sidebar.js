import React from 'react'
import './Sidebar.css'
import home from '../../Assests/home.png'
import game_icon from '../../Assests/game_icon.png'
import automobiles from '../../Assests/automobiles.png'
import sports from '../../Assests/sports.png'
import entertainment from '../../Assests/entertainment.png'
import music from '../../Assests/music.png'
import tech from '../../Assests/tech.png'
import blogs from '../../Assests/blogs.png'
import news from '../../Assests/news.png'
import jack from '../../Assests/jack.png'
import tom from '../../Assests/tom.png'
import megan from '../../Assests/megan.png'
import cameron from '../../Assests/cameron.png'
import simon from '../../Assests/simon.png'




const Sidebar = ({ sidebar,category,setCategory }) => {
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className='sortcut-links'>
                <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                    <img src={home} alt=''></img>
                    <p>Home</p>
                </div>

                <div className={`side-link ${category===20?"active":""}`}onClick={()=>setCategory(20)}>
                    <img src={game_icon} alt=''></img>
                    <p>Gaming</p>
                </div>

                <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                    <img src={automobiles} alt=''></img>
                    <p>Automobiles</p>
                </div>

                <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    <img src={sports} alt=''></img>
                    <p>Sports</p>
                </div>

                <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                    <img src={entertainment} alt=''></img>
                    <p>Entertainment</p>
                </div>

                <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                    <img src={tech} alt=''></img>
                    <p>Technology</p>
                </div>

                <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                    <img src={music} alt=''></img>
                    <p>Music</p>
                </div>

                <div className={`side-link ${category===22?"active":""}`}onClick={()=>setCategory(22)}>
                    <img src={blogs} alt=''></img>
                    <p>Blogs</p>
                </div>

                <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                    <img src={news} alt=''></img>
                    <p>News</p>
                </div>


                <hr />

            </div>
            <div className='subscribed-list'>
                <h3>Subscribed</h3>
                <div className='side-link'>
                    <img src={jack} alt=''></img><p>PewDiePie</p>
                </div>
                <div className='side-link'>
                    <img src={simon} alt=''></img><p>MrBeats</p>
                </div><div className='side-link'>
                    <img src={tom} alt=''></img> <p>Justin Biebar</p>
                </div><div className='side-link'>
                    <img src={megan} alt=''></img> <p>5-Minuts Crafts</p>
                </div>
                <div className='side-link'>
                    <img src={cameron} alt=''></img><p>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar