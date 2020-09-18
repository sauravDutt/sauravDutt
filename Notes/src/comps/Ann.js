import React from 'react';

const Artificial = () => {

    const showReadMore = () => {
        document.getElementById('read-more-ann').style.display='block';
        document.getElementById('readMoreBtnAnn').style.display = 'none';
        document.getElementById('readLessBtnAnn').style.display = 'block';
    }

    const showReadLess = () => {
        document.getElementById('read-more-ann').style.display='none';
        document.getElementById('readMoreBtnAnn').style.display = 'block';
        document.getElementById('readLessBtnAnn').style.display = 'none';
    }

    return (
        <div className="post-blog">
            <div className='post-info'>
                <h3 className='post-title'>artificial neural network</h3>
                <p>
                    Drone Tech, is my dream project. The idea is to have a fully 
                    automated drones, more like a drone butler. 
                    A drone, in technological terms, is an unmanned aircraft. 
                    Drones are more formally known as unmanned aerial vehicles 
                    (UAVs) or unmanned aircraft systems (UASes). Essentially, 
                    a drone is a flying robot that can be remotely controlled 
                    or fly autonomously through software-controlled flight plans 
                    in their embedded systems, working in conjunction with onboard 
                    sensors and GPS.
                </p>
                <p id='read-more-ann'>
                    In the recent past, UAVs were most often associated with the military, 
                    where they were used initially for anti-aircraft target practice, 
                    intelligence gathering and then, more controversially, as weapons 
                    platforms. Drones are now also used in a wide range of civilian roles 
                    ranging from search and rescue, surveillance, traffic monitoring, weather 
                    monitoring and firefighting, to personal drones and business drone-based photography, 
                    as well as videography, agriculture and even delivery services.
                </p>
                    <br />
                    <span><button onClick={showReadMore} className="homeBtn" id='readMoreBtnAnn'>Read More</button><button onClick={showReadLess} className="homeBtn" id='readLessBtnAnn'>Read Less</button></span>
                    <br />
            </div>
            <br />
        </div>
    )
}

export default Artificial;