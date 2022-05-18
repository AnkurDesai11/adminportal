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

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo"><span className="innerLogo"><AdminPanelSettingsIcon />db</span>Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li><GridViewIcon className="icon" /><span>Dashboard</span></li>
                </ul>
                <ul>
                    <li><GroupOutlinedIcon className="icon" /><span>Users</span></li>
                </ul>
                <ul>
                    <li><StorageRoundedIcon className="icon" /><span>Databases</span></li>
                </ul>
                <ul>
                    <li><QueryStatsRoundedIcon className="icon" /><span>Stats</span></li>
                </ul>
                <ul>
                    <li><NotificationImportantIcon className="icon" /><span>Notifications</span></li>
                </ul>
                <ul>
                    <li><HealthAndSafetyOutlinedIcon className="icon" /><span>System Health</span></li>
                </ul>
                <ul>
                    <li><ArticleIcon className="icon" /><span>Logs</span></li>
                </ul>
                <ul>
                    <li><SettingsIcon className="icon" /><span>Settings</span></li>
                </ul>
                <ul>
                    <li><AccountCircleOutlinedIcon className="icon" /><span>Profile</span></li>
                </ul>
                <ul>
                    <li><LogoutRoundedIcon className="icon" /><span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">Theme</div>
        </div>
    )
}

export default Sidebar