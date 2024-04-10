import React from 'react'
import { SidebarData } from './SidebarData'
import { useAuth0 } from '@auth0/auth0-react';

export default function Sidebar() {
  const { logout } = useAuth0();
  return (
    <div className='sidebar'>
    <ul>
{SidebarData.map((val,key)=>{
  return(
    <li key={key} onClick={()=>{window.location.pathname=val.link}}>
     {""} <div>{val.icon}</div> {""}
     <div>{val.title}</div>
     
     </li>
  )
})}
</ul>
    </div>
  )
}

