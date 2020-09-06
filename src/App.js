import React, { useState, useEffect, useRef} from 'react';
import './index.css';
import { ReactComponent as Compass } from './img/cursor.svg';
import { ReactComponent as Info } from './img/info-solid.svg';
import { ReactComponent as Ai } from './img/artificial-intelligence.svg';
import { ReactComponent as Blog } from './img/blogging.svg';
import { ReactComponent as DataVisualisation } from './img/smartphone.svg';
import { ReactComponent as Leftchevron } from './img/left-chevron.svg';
import { ReactComponent as Code } from './img/code-solid.svg';
import { ReactComponent as Settings } from './img/cog-solid.svg'; 
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<Info />} />
        <NavItem icon={<Compass />}> 
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}


function Navbar(props) {
  return (
    <div className = 'header'>
      <h1 className='logo'>SauravD<span className='extra'>utt</span><span className='changeFont'>.tech</span></h1>
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
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
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
 
  function DropdownItem(props) {
    return (
      <a href="#🍻" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
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
            leftIcon="🍺"
            rightIcon={<Blog />}
            goToMenu="about">
            About
          </DropdownItem>
          <DropdownItem
            leftIcon="🍻"
            rightIcon={<Blog />}
            goToMenu="posts">
            Posts
          </DropdownItem>
          <DropdownItem
            leftIcon="🍻"
            rightIcon={<Blog />}
            goToMenu="feeds">
            Feeds
          </DropdownItem>
          <DropdownItem
            leftIcon={<Settings />}
            rightIcon={<Blog />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Leftchevron />}>
          Back
          </DropdownItem>
          <DropdownItem leftIcon={<Blog />}>Theam</DropdownItem>
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
          <DropdownItem leftIcon={<Ai />}>Artificial Neural Network</DropdownItem>
          <DropdownItem leftIcon={<DataVisualisation />}>Data Analytics</DropdownItem>
          <DropdownItem leftIcon="🦋">Internet Of Things</DropdownItem>
          <DropdownItem leftIcon="🦔">Dron Tech</DropdownItem>
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
          <DropdownItem leftIcon="🦘">Add Feed</DropdownItem>
          <DropdownItem leftIcon="🐸">Brouse Feeds</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'about'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Leftchevron />}>
            Back
          </DropdownItem>
          <DropdownItem leftIcon={<Info />}>Info</DropdownItem>
          <DropdownItem leftIcon={<Code />}>Skills</DropdownItem>
          <DropdownItem leftIcon="🐸">Projects</DropdownItem>
          <DropdownItem leftIcon="🐸">contact</DropdownItem>
        </div>
      </CSSTransition>

    </div>
  );
}

export default App;