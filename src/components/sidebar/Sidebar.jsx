import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo"><span className="innerLogo">db</span>Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>View Users</li>
                </ul>
                <ul>
                    <li>Add User</li>
                </ul>
                <ul>
                    <li>View Databases</li>
                </ul>
            </div>
            <div className="bottom">Theme</div>
        </div>
    )
}

export default Sidebar