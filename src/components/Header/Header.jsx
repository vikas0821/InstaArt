import React from 'react'
import Sidenav from "./Sidebar/Sidenav"
import "./Sidebar/Sidenav.css"
function Header({classname}) {
  return (
    <header className={classname}>
      <Sidenav />
    </header>
  )
}

export default Header
