import React from 'react'
import CenterMenu from './CenterMenu'

const Header = () => {
  return (
    <div>
      <div className="header">


        <img src={require("../img/MuzicLogo.png")} alt="" />
        <CenterMenu />
        <div className="buttons">
          <button>Sign Up</button>
          <button>Log Up</button>

        </div>
      </div>
    </div>
  )
}

export default Header
