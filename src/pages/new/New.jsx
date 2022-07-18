import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { PhoneInput } from "react-contact-number-input";
import { useState } from "react";
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';

const New = ({ fields, title }) => {
    const [value, setValue] = useState()
    const [file, setFile] = useState()
    console.log(value)
    console.log(file)
    return (
        <div className="new">
            <link rel="stylesheet" href="" />
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top"><h2>{title}</h2></div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">
                                    Upload Profile Image:<AddPhotoAlternateRoundedIcon className="ImageIcon" />
                                    Max Size 10MB
                                </label>
                                <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                            </div>
                            {fields.map((field) => (
                                <div className="formInput">
                                    <label htmlFor="">{field.label}</label>
                                    <input type={field.type} placeholder={field.placeholder} />
                                </div>))}
                            {title === "Add New User" &&
                                <div className="formInputPhone" style={{ color: "dimgray" }}>
                                    <label htmlFor="">Phone</label>
                                    <PhoneInput
                                        disabled=""
                                        containerClass="phoneInput"
                                        onChange={setValue}
                                        placeholder="Enter Contact Number"
                                    />
                                </div>
                            }
                            <button>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New