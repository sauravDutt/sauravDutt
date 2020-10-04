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
                <h3 className='post-title'>artificial neural networks</h3>
                <p>
                    There is one reason why we are interested in building artificial neural networks (ANNs), that is 
                    the Technical Viewpoint, some problems such as the character recognition or the prediction of future
                    states of system reuire massively parallel and adaptive processing.
                    The "building blocks" of neural networks are the <b>neurons</b>. In technical system we also refer to them as  
                    <b>units</b> or <b>nodes</b>. Basically, each neuron, <b>receives input</b> form many other neurons, <b>changes it's internal state</b>
                    (activation) based on the current input, sends <b>one output signal</b> to many other neurons possibly including its 
                    input neurons <b>(recurrent network)</b>, <mark style={{opacity:'1', color:'#000'}}><b>information is transmitted as a series of electric impulses so called spikes</b></mark>,
                     <b>the frequency</b> and <b>phase</b> of these spikes encodes the <mark style={{backgroundColor:'green', color:'white'}}><b>information</b></mark>. In biological systems, one neuron can be connected 
                    to as many as 10,000 other neurons. Usually a neuron receives its information from othe neurons in a confined area, its so-called 
                    <b>receptive field</b>.
                </p>
                <p id='read-more-ann'>
                    An Artificial Neural Network is either a hardware implementation or a computer program which strives to 
                    simulate the imformation prcessing capabilities of it's biological exemplar. ANNs are tipically composed 
                    of a great number of interconnected artificial neurons. The artificial neurons are simplified models of 
                    their biological counterparts. ANN is a technique for solving problems by constructing software that work 
                    like our brains. <b>Defination</b> of Neural Network :- <b>A neural network is a system composed of many 
                        simple processing elements operating in parallel which can <mark style={{backgroundColor:'red', color:'#fff'}}> acquire </mark>, <mark style={{backgroundColor:'green', color:'#fff'}}> store </mark> and <mark> utilize </mark> experiential knowledge.</b>
                    Artificial Neural Networks are also named as <b>"artificial neural systems"</b> or <b>"parallel distributed processing systems"</b> or <b>"Connectionist systems"</b>. 
                    ANNs acquires a large collection of units that are interconnected in some pattern to allow communication between the units. These units are also 
                    refered to as <b>nodes</b> or <b>neurons</b>, are simple processors which operate in parallel.
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