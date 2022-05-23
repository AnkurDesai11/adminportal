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
                <p className="description">Some entries may be replicated across databases if migrated</p>
            </div>
        </div>
    )
}

export default Featured