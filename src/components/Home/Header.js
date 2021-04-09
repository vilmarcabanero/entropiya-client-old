import React from 'react'
import header from '../../assets/images/header.png'

const Header = () => {
  return (
    <header className='header'>
        <img src={header} className='header' alt="header" />
        <div id='start'>Courses</div>
        <div>MCQs</div>
        <div>Quiz</div>
        <div>Login</div>
    </header>

  )
}

export default Header