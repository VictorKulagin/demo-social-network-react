import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className={s.navA} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={s.navA} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/users" className={s.navA} activeClassName={s.active}>Users</NavLink>
            </div>
            <div>
                <a className={s.navA}>News</a>
            </div>
            <div>
                <a className={s.navA}>Music</a>
            </div>
            <div>
                <a className={s.navA}>Settings</a>
            </div>
        </nav>
    )
}

export default  Navbar;