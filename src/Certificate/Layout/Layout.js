import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div style={{display:'flex'}}><Sidebar/>
          <div className='w-100'>
            {children}
          </div>
        </div>
    </div>
  )
}

export default Layout