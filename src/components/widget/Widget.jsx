import "./widget.scss"
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

const Widget = () => {
    return (
        <div className="widget">
            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">123</span>
                <span className="link">See all users</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowDropUpRoundedIcon /> 20%
                </div>
                <PersonOutlineRoundedIcon className="icon" />
            </div>
        </div>
    )
}

export default Widget