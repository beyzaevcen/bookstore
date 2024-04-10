import React from 'react';
import { SidebarData } from './SidebarData';
import { useAuth0 } from '@auth0/auth0-react';

export default function Sidebar() {
  const { logout, user } = useAuth0();
  const { name, picture } = user || {}; // Kullanıcı objesi tanımsızsa boş bir nesne kullan

  return (
    <div className='sidebar'>
      {user && (
        <div className='user-info'>
          <img src={picture} alt='User Avatar' className='user-avatar' />
          <span className='user-name'>{name}</span>
        </div>
      )}
      <ul className='sidebarlist'>
        {SidebarData.map((val, key) => (
          <li key={key} className='sidebaritem' id={window.location.pathname === val.link ? 'active' : ''} onClick={() => { window.location.pathname = val.link }}>
            <div id='icon'>{val.icon}</div>
            <div id='title'>{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
