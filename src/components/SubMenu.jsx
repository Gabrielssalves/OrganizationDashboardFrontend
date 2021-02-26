import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SubMenu.css'

export default (props) => {
    const [subNav, setSubNav] = useState(false)

    const showSubNav = () => setSubNav(!subNav)

    return (
        <React.Fragment>
            <div className="nav-text">
                <Link  to={props.item.path} onClick={props.item.subNav && showSubNav}>
                    <div>
                        {props.item.icon}
                        <span>{props.item.title}</span>
                    </div>
                    <div>
                        {props.item.subNav && subNav
                            ? props.item.iconOpened
                            : props.item.subNav
                            ? props.item.iconClosed
                            : null}
                    </div>
                </Link>
            </div>
            {subNav && props.item.subNav.map((item, index) => {
                return (
                    <div className="dropdown-link">
                        <Link to={item.path} key={index}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </div>
                )
            })}
        </React.Fragment>
    )
}