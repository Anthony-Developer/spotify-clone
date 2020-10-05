import React from 'react'
import '../Styling/SidebarOptions.css'

function SidebarOptions({title, Icon}) {
    return (
        <div className="sidebar-options">
            <p>{title}</p>
        </div>
    )
}

export default SidebarOptions
