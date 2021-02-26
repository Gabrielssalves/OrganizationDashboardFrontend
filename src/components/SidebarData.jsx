import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faBuilding, faCalendarAlt, faClipboardList, faHome } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon:<FontAwesomeIcon icon={faHome} />,
        className: 'nav-text'
    },
    {
        title: 'Spaces',
        path: '/spaces',
        icon:<FontAwesomeIcon icon={faClipboardList} />,
        iconClosed: <FontAwesomeIcon icon={faAngleRight} />,
        iconOpened: <FontAwesomeIcon icon={faAngleDown} />,
        subNav: [
            {
                title: 'Trabalho',
                path: '/spaces/Trabalho',
                icon: <FontAwesomeIcon icon={faBuilding} />
            }
        ],
        className: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon:<FontAwesomeIcon icon={faCalendarAlt} />,
        className: 'nav-text'
    }
]