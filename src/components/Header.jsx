import React from 'react'
import imagen from "../assets/Jira.svg"

const Header = () => {
  return (
    <div className='header'>
        <div>
            <span>1</span>
            <span>Agenda/Topic</span>
        </div>
        <div>
            <span>SAAS-0000</span>
            <img src={imagen} alt="" />
        </div>
    </div>
  )
}

export default Header