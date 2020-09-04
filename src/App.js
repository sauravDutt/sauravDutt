import React, { useState } from 'react';
import './App.css';
import { ReactComponent as Compass } from './img/cursor.svg';
import { ReactComponent as Info } from './img/info.svg';
import { ReactComponent as Ai } from './img/artificial-intelligence.svg';
import { ReactComponent as Blog } from './img/blogging.svg';
import { ReactComponent as DataVisualisation } from './img/smartphone.svg';

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

function DropdownMenu() {
  return (
    <div className="dropdown">

    </div>
  )
}
 
function Navbar(props) {
   return (
     <nav className='navbar'>
       <ul className='navbar-nav'>
          { props.children}
       </ul>
     </nav>
  )
}
function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

export default App;
