

import React from 'react'
import Header from './Header'
function HeaderItem({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3'>
        <Icon/>
        <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem