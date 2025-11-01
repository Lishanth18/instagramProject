import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggesstion from './Suggesstion'

function App() {
  return (
    <div className='d-flex'>
      <div className='w-20'><Sidebar/></div>
      <div className='w-50'><Feed/></div>
      <div className='w-30'><Suggesstion/></div>
    </div>
  )
}

export default App
// npx json-server --watch data/db.json --port 2000 --static ./data
