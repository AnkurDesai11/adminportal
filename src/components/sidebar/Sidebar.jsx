import "./sidebar.scss"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" className="link">
                    <span className="logo"><span className="innerLogo"><AdminPanelSettingsIcon />db</span>Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Overview</p>
                    <Link to="/" className="link"><li><GridViewIcon className="icon" />Dashboard</li></Link>
                    <p className="title">Details</p>
                    <Link to="/users" className="link"><li><GroupOutlinedIcon className="icon" />Users</li></Link>

                    <Link to="/databases" className="link"><li><StorageRoundedIcon className="icon" />Databases</li></Link>

                    <Link to="/stats" className="link"><li><QueryStatsRoundedIcon className="icon" />Stats</li></Link>
                    <p className="title">Service</p>
                    <Link to="/notifications" className="link"><li><NotificationImportantIcon className="icon" />Notifications</li ></Link>

                    <Link to="/health" className="link"><li><HealthAndSafetyOutlinedIcon className="icon" />System Health</li ></Link>

                    <Link to="/logs" className="link"><li><ArticleIcon className="icon" />Logs</li ></Link>
                    <p className="title">User</p>
                    <Link to="/settings" className="link"><li><SettingsIcon className="icon" />Settings</li ></Link>

                    <Link to="/profile" className="link"><li><AccountCircleOutlinedIcon className="icon" />Profile</li ></Link>

                    <Link to="/logout" className="link"><li><LogoutRoundedIcon className="icon" />Logout</li ></Link>
                </ul >
            </div >
            <div className="bottom">
                <p className="title">Theme</p>
                <div className="colorOption" onClick={() => { dispatch({ type: "LIGHT" }) }}></div>
                <div className="colorOption" onClick={() => { dispatch({ type: "DARK" }) }}></div>
            </div>
        </div >
    )
}

export default Sidebar