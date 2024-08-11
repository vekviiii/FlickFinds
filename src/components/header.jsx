import React from 'react'
import '../styles/header.css'

const Header = ({ isActive }) => {
  return (
    <div className={`header d-flex justify-content-center align-items-center ${isActive ? 'active' : ''}`}>
      FlickFinds
    </div>
  )
}

export default Header