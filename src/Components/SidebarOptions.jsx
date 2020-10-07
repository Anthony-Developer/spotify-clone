import React from 'react'
import '../Styling/SidebarOptions.css'

function SidebarOptions({title, Icon}) {
    return (
        <div className="sidebar-options">
            {Icon && <Icon className="sidebar-options-icons" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOptions
