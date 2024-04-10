import React from 'react'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';



export const SidebarData = [
    
    {
        title: "Films",
        icon: <MovieFilterIcon/>,
        link: "/films"

    },
    {
        title: "Add Film",
        icon: <AddIcon/>,
        link: "/add"

    },
    {
        title: "Log out",
        icon: <LogoutIcon/>,
        link: "/"

    },
 
]