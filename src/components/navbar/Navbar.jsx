import "./navbar.scss"
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedRoundedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { Link, useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const { oktaAuth, authState } = useOktaAuth();
    const history = useNavigate();

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (!authState || !authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            setUserInfo(null);
        } else {
            oktaAuth.getUser().then((info) => {
                setUserInfo(info);
            }).catch((err) => {
                console.error(err);
            });
        }
    }, [authState, oktaAuth]); // Update if authState changes

    const handleLogout = async () => oktaAuth.signOut();
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <ManageSearchOutlinedIcon className="icon" />
                </div>
                <div className="items">
                    {/*<div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
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
                    </div>*/}
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" onClick={() => { dispatch({ type: "TOGGLE" }) }} />
                    </div>
                    {
                        authState && authState.isAuthenticated
                            ? <div className="item">
                                Signed in as <br />
                                {JSON.parse(localStorage.getItem('okta-token-storage'))['idToken']['claims']['email']}
                            </div>
                            : ""
                    }
                    <div className="item">
                        {
                            authState && authState.isAuthenticated
                                ? <LogoutIcon className="icon" onClick={handleLogout} />
                                : <Link to="/login" className="link"><LoginIcon className="icon" /></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar