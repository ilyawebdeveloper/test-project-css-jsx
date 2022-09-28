import './Wave.css'

function Wave() {
    return ( 
        <div className="wave">
            <h1 className="wave-title" data-text="Frontend">Frontend</h1>
            <div className='wave_porfolio'>
                <div className='container_photo'>
                    <img src='https://sun9-east.userapi.com/sun9-34/s/v1/ig2/cpvS_JeK_rkMQGb-8aXgVDQy3BdB2IfSkeZ1or08iANOpFt3hlpKv0adZPNh92lpxCGCIYSvCrjbOyQ7ssiArWTt.jpg?size=2316x1711&quality=95&type=album' alt='photo_profile' className='photo' />
                </div>
                <p className='wave_text'>Этот сайт созднан для моих люимых работодателей, в качестве порфолио. Здесь я буду применять все технологии которые знаю. В моих приоритетах создавать такие проекты, которые в первую очередь интересны мне самому.</p>
            </div>
        </div>
     );
}

export default Wave;