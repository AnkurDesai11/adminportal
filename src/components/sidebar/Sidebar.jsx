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
                <span className="logo"><a href="/"><span className="innerLogo"><AdminPanelSettingsIcon />db</span>Admin</a></span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Overview</p>
                    <li><GridViewIcon className="icon" /><span><a href="/">Dashboard</a></span></li>
                    <p className="title">Details</p>
                    <li><GroupOutlinedIcon className="icon" /><span><a href="/users">Users</a></span></li>

                    <li><StorageRoundedIcon className="icon" /><span><a href="/databases">Databases</a></span></li>

                    <li><QueryStatsRoundedIcon className="icon" /><span><a href="/stats">Stats</a></span></li>
                    <p className="title">Service</p>
                    <li><NotificationImportantIcon className="icon" /><span><a href="/notifications">Notifications</a></span></li>

                    <li><HealthAndSafetyOutlinedIcon className="icon" /><span><a href="/health">System Health</a></span></li>

                    <li><ArticleIcon className="icon" /><span><a href="/logs">Logs</a></span></li>
                    <p className="title">User</p>
                    <li><SettingsIcon className="icon" /><span><a href="/settings">Settings</a></span></li>

                    <li><AccountCircleOutlinedIcon className="icon" /><span><a href="/profile">Profile</a></span></li>

                    <li><LogoutRoundedIcon className="icon" /><span><a href="/logout">Logout</a></span></li>
                </ul>
            </div>
            <div className="bottom">
                <p className="title">Theme</p>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div >
    )
}

export default Sidebar