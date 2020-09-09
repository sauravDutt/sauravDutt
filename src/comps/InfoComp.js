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
        console.log('hello from Skills')
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
                    “The function of good software is to make the complex 
                    appear to be simple.” - Grady Booch. I am a self taught 
                    web developer and a learner, I like to research about 
                    latest tech, new frameworks and polish my skills. I have 
                    an insatiable curiosity for AI – particularly deep 
                    learning – applications and their potential to change 
                    the technology landscape.
                    </p>
                    <span className="gitHubIcon"><a href="https://github.com/sauravDutt" className="gitHubIconLink"><i class="fab fa-github"></i></a></span> <span><button onClick={showSkillsfrInfo} className="skillBtn">Skills</button></span>
                </div>
            </motion.div>
        </motion.div>

        
    )
}

export default InfoComp;