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
                    There is one reason why we are interested in building artificial neural networks (ANNs), that is 
                    the Technical Viewpoint, some problems such as the character recognition or the prediction of future
                    states of system reuire massively parallel and adaptive processing.
                    The "building blocks" of neural networks are the neurons. In technical system we also refer to them as
                    units or nodes. Basically, each neuron, receives input form many other neurons, changes it's internal this.state
                    (activation) based on the current input, sends one output signal to many other neurons possibly including its 
                    input neurons (recurrent network), information is transmitted as a series of electric impulses so called spikes,
                    the frequency and phase of these spikes encodes the information. In biological systems, one neuron can be connected 
                    to as many as 10,000 other neurons. Usually a neuron receives its information from othe neurons in a confined area, its so-called 
                    receptive field.
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