import React from 'react'
import {Link} from "react-router-dom"
import Sbcontents from '../SidebarComponent/Sbcomp'
import './Styles/Sidebar.css'


const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      {
        Sbcontents.map((content,index) => (
          <Link to="" className={index === 0 ? "links active" : "links"}key={index}>
            <div>
              {content.icon}
            </div>
            <p>{content.text}</p>
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar