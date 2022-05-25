import React from 'react'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="Users" />
                    <Widget type="Databases" />
                    <Widget type="Migrations" />
                    <Widget type="Logins" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Recently registered users
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home