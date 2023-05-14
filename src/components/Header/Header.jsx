import React from 'react'
import Sidenav from './Sidenav'
import "./Sidenav.css"

function Header({classname}) {
  return (
    <header className={classname}>
      <Sidenav />
    </header>
  )
}

export default Header
