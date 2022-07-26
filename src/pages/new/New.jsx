import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { PhoneInput } from "react-contact-number-input";
import { useState } from "react";
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import { useEffect } from "react";

const New = ({ fields, title }) => {

    const [file, setFile] = useState()
    const error = {
        messages: {}
    }

    let userData = { phone: '', country: '' }
    fields.forEach((item) => {
        userData[item.key] = '';
    });
    const [formData, setFormData] = useState(userData)
    //handle change
    const handleChange = (event, key) => {
        //set values of dynamic fields
        setFormData({ ...formData, [key]: event.target.value })
        console.log(formData)
    }

    //set value of country and phone from PhoneInput object
    const [value, setValue] = useState()
    useEffect(() => {
        if (value !== undefined && value !== null) {
            if (value.phoneNumber !== 0 && value.phoneNumber !== '') {
                formData.phone = value.countryCode + value.phoneNumber;
                formData.country = (value.country == null) ? '' : value.country.name;
                error.messages["phone"] = value.message;
            }
            else {
                formData.phone = "";
                formData.country = "";
                delete error.messages["phone"];
            }
        }
        console.log(formData, error);
    }, [value])


    return (
        <div className="new">
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
                                    <input type={field.type} placeholder={field.placeholder} id={field.key} onChange={e => handleChange(e, [field.key])} />
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