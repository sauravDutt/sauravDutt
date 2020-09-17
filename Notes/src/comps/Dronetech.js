import React from 'react';

const DroneTechComp = () => {

    const showReadMore = () => {
        document.getElementById('read-more').style.display='block';
        document.getElementById('readBtn').style.display = 'none';
        document.getElementById('readLess').style.display = 'block';
    }

    const showReadLess = () => {
        document.getElementById('read-more').style.display='none';
        document.getElementById('readBtn').style.display = 'block';
        document.getElementById('readLess').style.display = 'none';
    }

    return (
        <div className="post-blog">
            <div className='post-info'>
                <h3 className='post-title'>Drone</h3>
                <p>
                    A drone, in technological terms, is an unmanned aircraft. 
                    Drones are more formally known as unmanned aerial vehicles 
                    (UAVs) or unmanned aircraft systems (UASes). Essentially, 
                    a drone is a flying robot that can be remotely controlled 
                    or fly autonomously through software-controlled flight plans 
                    in their embedded systems, working in conjunction with onboard 
                    sensors and GPS.
                </p>
                <p id='read-more'>
                    In the recent past, UAVs were most often associated with the military, 
                    where they were used initially for anti-aircraft target practice, 
                    intelligence gathering and then, more controversially, as weapons 
                    platforms. Drones are now also used in a wide range of civilian roles 
                    ranging from search and rescue, surveillance, traffic monitoring, weather 
                    monitoring and firefighting, to personal drones and business drone-based photography, 
                    as well as videography, agriculture and even delivery services.
                </p>
                    <br />
                    <span><button onClick={showReadMore} className="homeBtn" id='readBtn'>Read More</button><button onClick={showReadLess} className="homeBtn" id='readLess'>Read Less</button></span>
                    <br />
            </div>
            <br />
        </div>
    )
}

export default DroneTechComp;