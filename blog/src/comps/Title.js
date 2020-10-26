import React from 'react';

const Title = ({setShowInsights}) => {

  const showInfo = () => {
    setShowInsights(1)
  }

  return (
    <div className="title">
      <header className="header-main">
      <h2>SauravDutt<span className='subLogo'>Blog</span></h2>
        <a href="https://sauravdutt.tech/"><i className="fas fa-arrow-left" id="headerIcon"></i></a>
        <i className="fas fa-info" id="headerIconInsight" onClick={showInfo}></i>
      </header>
    </div>
  )
}

export default Title;