import React from 'react'
import "./enf.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

function Enf() {
    return (
        <div className="errorpage">
            <Sidebar />
            <div className="errorContainer">
                <Navbar />
                <div className="errorMain">Page does not exist</div>
            </div>
        </div>
    )
}

export default Enf