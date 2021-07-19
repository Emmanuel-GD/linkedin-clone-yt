import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={process.env.PUBLIC_URL + '/bg-colorful.jpg'} alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Amanuel Girma</h2>
                <h4>amanuelgirma@hotmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed you</p>
                    <p className="sidebar_statNumber">
                        2,345
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>views on post</p>
                    <p className="sidebar_statNumber">
                        2,786
                    </p>
                </div>
            </div>

            <div className="sidebar__button">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar
