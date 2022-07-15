import React from 'react'
import ProgressBar from './ProgressBar'
import './style.css'

function Header() {
  return (
    <header className="header_container">
      <img className="logo" alt="logo" src="https://tolq.com/images/logo.svg" />
      <div className="Header_title">
        <h4>markDown.md</h4>
        <span>English-Spanish</span>
      </div>
      <ProgressBar />
    </header>
  )
}

export default Header
