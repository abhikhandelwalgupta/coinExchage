import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <div className='w-full bg-black  text-white flex justify-between py-4 px-4 flex-wrap'>
        <h2>Header</h2>
        <ul className='list-none flex pr-3 gap-8' >
            <li className='font-bold cursor-pointer'><Link to="/" >Home</Link></li>
            <li className='font-bold cursor-pointer'><Link to="/exchanges" >Exchange</Link></li>
            <li className='font-bold cursor-pointer'><Link to="/coins" >Coins</Link></li>
        </ul>
    </div>
  )
}
