import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Summary</h1>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70"} strokeWidth={3} />
                </div>
                <p className="title">Ratio of entries in MySQL and MongoDB</p>
                <p className="description">Some entries may be common across databases if migrated</p>
                <p className="description">Duplicted entries may not necessarily have all details same in other database, Migrated entries will</p>
                <div className="numbers">
                    <div className="item mysql">
                        <div className="itemTitle">MySql</div>
                        <div className="itemValue">11</div>
                    </div>
                    <div className="item mongo">
                        <div className="itemTitle">MongoDB</div>
                        <div className="itemValue">15</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured