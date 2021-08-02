import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {


    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={process.env.PUBLIC_URL + "/bg-colorful.jpg"} alt="" />
                <Avatar className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed you</p>
                    <p className="sidebar_statNumber">2,345</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2,786</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("react")}
                {recentItem("angular")}
                {recentItem("c-sharp")}
                {recentItem("java")}
                {recentItem("softwareengineering")}
                {recentItem("development")}
            </div>
        </div>
    );
}

export default Sidebar;
