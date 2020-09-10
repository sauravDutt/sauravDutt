import React from 'react';
import { motion } from 'framer-motion';

const InfoComp = ({setShowInfo}) => {

    const removeInfo = (e) => {
        if (e.target.classList.contains('infoBackdrop')) {
            setShowInfo(null);
        }
      }
    
    // // The following is a very bad practice the document.getElementById is not the way.......
    // const removeInfo = (e) => {
    //     if (e.target.classList.contains('infoBackdrop')) {
    //         document.getElementById('information').style.display='none';
    //     }
    // }
    const showSkillsfrInfo = () => {
        setShowInfo(null)
    }
    const showHomefrInfo = () => {
        setShowInfo(null);
        window.location = 'https://www.sauravdutt.tech/';
    }
    return (
        <motion.div className="infoBackdrop" id='information' onClick={removeInfo}
            initial = {{opacity: 0}}
            animate = {{ opacity: 1}}
        >
            <motion.div className="post"
                initial = {{y:"-100vh"}}
                animate = {{ y: 0}}
            >
                <div className='post-info'>
                    <h3 className='post-title'>Info</h3>
                    <p>
                    Notes | SD, are like blog posts on some of the topics of my interest. These notes are written for refering in the future. This application have two features one is the post itself, 
                    they are just insights in the topics with images and a lot of content about the subject, usefull content all personaly typed by me, the second is the feeds, more like feedback the 
                    users or anybody who find this application can add a feed and can also brouse other feeds by other users. It's a practice project, build by React. It is a work is Progress and will
                    always be a work in progress. Thank you for Reading !!
                    </p>
                    <br />
                    <span><button onClick={showHomefrInfo} className="homeBtn">sauravdutt.tech</button></span><span><button onClick={showSkillsfrInfo} className="skillBtn">Explore</button></span>
                    <br /><br />
                </div>
            </motion.div>
        </motion.div>

        
    )
}

export default InfoComp;