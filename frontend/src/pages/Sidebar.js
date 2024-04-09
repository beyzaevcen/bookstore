import React from 'react'
import { SidebarData } from './SidebarData'

export default function Sidebar() {
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

