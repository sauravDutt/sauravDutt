import React, { useState, useEffect, useRef} from 'react';
import './index.css';
import { ReactComponent as Compass } from './img/down.svg';
import { ReactComponent as Info } from './img/info-solid.svg';
import { ReactComponent as Ai } from './img/brain-solid.svg';
import { ReactComponent as Blog } from './img/blogging.svg';
import { ReactComponent as Python } from './img/python-brands.svg';
import { ReactComponent as Js } from './img/js-brands.svg';
import { ReactComponent as Cart } from './img/shopping-cart-solid.svg';
import { ReactComponent as Iot } from './img/robot.svg';
import { ReactComponent as ProjectIdea } from './img/code-solid.svg'
import { ReactComponent as Dt } from './img/quadrocopter.svg';
import { ReactComponent as PostsBtn } from './img/bookmark-regular.svg'
import { ReactComponent as DataVisualisation } from './img/smartphone.svg';
import { ReactComponent as Leftchevron } from './img/left-chevron.svg';
import { ReactComponent as Settings } from './img/plus-solid.svg'; 
import { CSSTransition } from 'react-transition-group';
import InfoComp from './comps/InfoComp';
import DroneTechComp from './comps/Dronetech';
import About from './comps/About';
import JavaScript from './comps/JavaScript';
import PythonComp from './comps/Python';
import Artificial from './comps/Ann';
import Internet from './comps/iot';

 
function App() {

  const [showInfo, setShowInfo] = useState(null);
  const showInformation = () => {
    setShowInfo(1);
  }
  const [showJs, setShowJs] = useState(null);
  const [showD, setShowD] = useState(null);
  const [showPython, setShowPython] = useState(null);
  const [showAnn, setShowAnn] = useState(null);
  const [showIot, setShowIot] = useState(null);
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<Info />} clickFunction={showInformation} />
        <NavItem icon={<Compass />}> 
          <DropdownMenu setShowD={setShowD} setShowJs={setShowJs} setShowPython={setShowPython} setShowAnn={setShowAnn} setShowIot={setShowIot}/>
        </NavItem>
      </Navbar>
      <About />
      {showIot && <Internet />}
      {showD && <DroneTechComp />}
      {showJs && <JavaScript />}
      {showPython && <PythonComp />}
      {showAnn && <Artificial />}
      {showInfo && <InfoComp setShowInfo={setShowInfo}/>}
    </div>
  );
}


function Navbar(props) {
  return (
    <div className = 'header'>
      <a href='https://www.sauravdutt.tech/' style={{textDecoration:'none'}}>
        <h1 className='logo'>SauravDutt<span className='sub-logo'>.tech</span></h1>
      </a>
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#🍻" className="icon-button" onClick={() => setOpen(!open)}>
        <span onClick = {props.clickFunction}>{props.icon}</span>
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu({setShowD, setShowJs, setShowPython, setShowAnn, setShowIot}) {

  
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  const showDron = () => {
    setShowD(1);
  }
  const showJavaScript = () => {
    setShowJs(1);
  }
  const showPythonOk = () => {
    setShowPython(1);
  }
  const showArtificial = () => {
    setShowAnn(1);
  }
  const showInternet = () => {
    setShowIot(1);
  }

  function DropdownItem(props) {
    return (
      <span onClick = {props.clickFunction}>
        <a href="#🍻" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button" >{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      </span>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
 
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
        
          <DropdownItem
            leftIcon={<PostsBtn />}
            rightIcon={<Blog />}
            goToMenu="posts">
            Study
          </DropdownItem>
          <DropdownItem
            leftIcon={<ProjectIdea />}
            rightIcon={<Blog />}
            goToMenu="feeds">
            Project Ideas
          </DropdownItem>
          <DropdownItem
            leftIcon={<Settings />}
            rightIcon={<Blog />}>
            Add Insight
          </DropdownItem>
          

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'posts'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Leftchevron />}>
            Back
          </DropdownItem>
          <DropdownItem leftIcon={<Js />} clickFunction={showJavaScript}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Python />} clickFunction={showPythonOk}>Python</DropdownItem>
          <DropdownItem leftIcon={<Ai />} clickFunction={showArtificial}>Artificial Neural Network</DropdownItem>
          <DropdownItem leftIcon={<Iot />} clickFunction={showInternet}>Internet Of Things</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'feeds'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Leftchevron />}>
            Back
          </DropdownItem>
          <DropdownItem leftIcon={<Dt />} clickFunction={showDron}>Drone Tech</DropdownItem>
          <DropdownItem leftIcon={<Cart />}>E-commerce app</DropdownItem>
          <DropdownItem leftIcon={<DataVisualisation />}>Data Analytics</DropdownItem>
        </div>
      </CSSTransition>


    </div>
  );
}

export default App;