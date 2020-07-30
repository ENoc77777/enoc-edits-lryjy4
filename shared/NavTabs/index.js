import React from 'react'
import { Link } from 'react-router-dom';
import './nav-tabs.css'

const NavTabs = () => {
  return (
    <ul className="router">
      <li>
        <Link to="/touch-typing">Touch Typing</Link>
      </li>
      <li>
        <Link to="/coding">Coding</Link>
      </li>
      <li>
        <Link to="/wpm-to-cpm">WPM to CPM </Link>
      </li>
    </ul>
  )
}

export default NavTabs