import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <div className="title">Information</div>
                        <div className="item">
                            <img src="https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" alt=""
                                className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">ABD</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">abd@mail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+123456 789</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Cumballa Hill, Mumbai, Maharashtra 400026</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User activity" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="itemTitle">Last Transactions</h1>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Single