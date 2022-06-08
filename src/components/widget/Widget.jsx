import "./widget.scss"
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
    let data;
    switch (type) {
        case "Users":
            data = {
                title: "Users",
                link: "See all users",
                number: "24",
                icon: <PersonOutlineRoundedIcon className="icon"
                    style={{ backgroundColor: "rgba(214, 200, 0, 0.4)", color: "goldenrod" }}
                />
            };
            break;
        case "Databases":
            data = {
                title: "Databases",
                link: "See all databases",
                number: "2",
                icon: <StorageRoundedIcon className="icon"
                    style={{ backgroundColor: "rgba(250, 150, 0, 0.5)", color: "chocolate" }}
                />
            };
            break;
        case "Migrations":
            data = {
                title: "Migrations",
                link: "See all user migrations",
                number: "4",
                icon: <CompareArrowsRoundedIcon className="icon"
                    style={{ backgroundColor: "rgba(175, 0, 251, 0.4)", color: "indigo" }}
                />
            };
            break;
        case "Logins":
            data = {
                title: "Logins",
                link: "See all user logins",
                number: "59",
                icon: <ExitToAppRoundedIcon className="icon"
                    style={{ backgroundColor: "rgba(33, 222, 111, 0.3)", color: "seagreen" }}
                />
            };
            break;
        default:
            data = {
                title: "Error",
                link: "Reload",
                icon: <ErrorOutlineRoundedIcon className="icon"
                    style={{ backgroundColor: "rgba(255, 0, 0, 0.4)", color: "red" }}
                />
            };
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.number}</span>
                <span className="link"><Link to={data.title} >{data.link}</Link></span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowDropUpRoundedIcon /> 20%
                </div>
                {data.icon}
            </div>
        </div >
    )
}

export default Widget