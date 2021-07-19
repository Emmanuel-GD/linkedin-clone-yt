import React from 'react'
import './HeaderOptions.css';

function HeaderOptions({ Icon, title }) {
    return (
        <div className='headerOptions'>
            {Icon && <Icon className="headerOption__icon" />}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
