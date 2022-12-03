import React from 'react'
import { useAuthDispatch } from '../../Context/auth-context';
import { handleLogout } from '../../Handles/Handles';

export default function Dashboard() {
  const dispatch = useAuthDispatch();

  return (
    <div>
      <p className='text-center'>Dashboard</p>
      <button className='btn-primary' onClick={()=>{handleLogout(dispatch)}}>Logout</button>
    </div>
  )
}
