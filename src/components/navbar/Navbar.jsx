import "./navbar.scss"
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedRoundedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <ManageSearchOutlinedIcon className="icon" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedRoundedIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <FormatListNumberedRoundedIcon className="icon" />
                    </div>
                    <div className="item">
                        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/9abb1ef8-fad0-4122-b68b-b04c90ac47ac-profile_image-300x300.png"
                            alt="" className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar