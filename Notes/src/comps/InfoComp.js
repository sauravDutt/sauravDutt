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
                    Notes | SD, is a study material. A web application created with an objective of maintaining notes and taking record of all the project ideas.
                    One stop destination for refreshing all the nessory skills and brushing the knowledge on the key subjects. The app is build with a mobile first 
                    approach, using React js.Started on the 17th of September,2020. This will always be a work in progress. Thank you for Reading !!
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