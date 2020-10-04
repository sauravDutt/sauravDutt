import React from 'react';
import { ReactComponent as Github } from '../img/github.svg';
import { ReactComponent as Resume } from '../img/resume.svg';

const About = () => {
    return (
        <div className="post-about">
            <div className='post-info-about'>
                <h3 className='post-title'>Sd <span className='aboutSecond'>| About</span></h3>
                <p>
                    <b>“The function of good software is to make the complex appear to be simple.”</b> -<b> Grady Booch</b>. 
                    I am a self taught web developer and a learner, I like to research about latest tech, new 
                    frameworks and polish my skills. I have an insatiable curiosity for AI – particularly deep 
                    learning – applications and their potential to change the technology landscape.
                </p>
                <p style={{textAlign:'center',justifyItems:'center', alignItems:'center'}}>
                    <a href="https://github.com/sauravDutt" target='_blank' rel="noopener noreferrer" className="icon-button about-btn" style={{backgroundColor:'transparent'}}>
                        <span className = "icon-button-git" style={{backgroundColor:'transparent'}}><Github /></span> 20Repo
                    </a>
                    <a href="https://www.sauravdutt.tech/" target='_blank' rel="noopener noreferrer" className="icon-button about-btn" style={{float:'right',marginTop:'-40px', backgroundColor:'transparent'}}>
                        Portfolio   <span className = "icon-button-git" style={{backgroundColor:'transparent'}}><Resume /></span>
                    </a>
                </p>
                <br />
            </div>
            <br />
        </div>
    )
}

export default About;