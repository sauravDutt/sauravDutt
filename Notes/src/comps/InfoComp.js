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
                        <b>sauravDutt.tech</b>, is my portfolio web site build by React js and Google Firebase. 
                        The application lets you add feeds or insights, read through tech related journals 
                        and also explore some of my work in progress and past projects .
                        Click on the down pointing arrow for navigation.
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