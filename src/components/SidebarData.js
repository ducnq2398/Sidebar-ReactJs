import * as Icon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";
import * as IoOIcon from "react-icons/io5";

export const SidebarData = [
    {
        title:'Dashboard',
        path: '/dashboard',
        icon: <AiIcon.AiOutlineDashboard/>,
        cName: 'nav-text'
    },
    {
        title:'Document',
        path: '/document',
        icon: <IoOIcon.IoDocumentOutline/>,
        cName: 'nav-text'
    },
    {
        title:'User Management',
        path: '/user-manager',
        icon: <AiIcon.AiOutlineUser/>,
        cName: 'nav-text'
    },
    {
        title:'Department Management',
        path: '/department-manager',
        icon: <AiIcon.AiOutlineUsergroupAdd/>,
        cName: 'nav-text'
    },
    {
        title:'Notification',
        path: '/notification',
        icon: <IoIcon.IoIosNotificationsOutline/>,
        cName: 'nav-text'
    },
]