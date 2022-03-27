import React from 'react'
import Sidebar from './Sidebar';
import Data from './Data';
import '../Components/Styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>

    <div className='sidebar'>
      <Sidebar/>
    </div>
    <div className='datapart'>
      <Data/>
    </div>

</div>

  )
}

export default Dashboard