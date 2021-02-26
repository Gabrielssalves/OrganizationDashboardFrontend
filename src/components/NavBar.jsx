import React, {useState} from 'react'

import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import {SidebarData} from './SidebarData'

import './NavBar.css'
import SubMenu from './SubMenu'

export default (props) => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <React.Fragment>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FontAwesomeIcon icon={faBars} onClick={showSidebar}></FontAwesomeIcon>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars" onClick={showSidebar}>
                            <FontAwesomeIcon icon={faTimes} />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </ul>
            </nav>
        </React.Fragment>
    );
}