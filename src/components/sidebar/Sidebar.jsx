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
                    <p className="title">Overview</p>
                    <li><GridViewIcon className="icon" /><span>Dashboard</span></li>
                    <p className="title">Details</p>
                    <li><GroupOutlinedIcon className="icon" /><span>Users</span></li>

                    <li><StorageRoundedIcon className="icon" /><span>Databases</span></li>

                    <li><QueryStatsRoundedIcon className="icon" /><span>Stats</span></li>
                    <p className="title">Service</p>
                    <li><NotificationImportantIcon className="icon" /><span>Notifications</span></li>

                    <li><HealthAndSafetyOutlinedIcon className="icon" /><span>System Health</span></li>

                    <li><ArticleIcon className="icon" /><span>Logs</span></li>
                    <p className="title">User</p>
                    <li><SettingsIcon className="icon" /><span>Settings</span></li>

                    <li><AccountCircleOutlinedIcon className="icon" /><span>Profile</span></li>

                    <li><LogoutRoundedIcon className="icon" /><span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">
                <p className="title">Theme</p>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar