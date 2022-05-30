export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.profile} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "source",
        headerName: "Source",
        renderCell: (params) => {
            return (
                <div className="cellstatus">
                    <span className={`cellstatus ${params.row.source}`}>{params.row.source}</span>
                </div>
            )
        }
    }

]

export const userRows = [
    { id: 1, username: "JS", lastName: 'Lannister', firstName: 'Cersei', age: 42, email: "cl@mail.com", source: "mysql", profile: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
    { id: 3, username: "CL", lastName: 'Lannister', firstName: 'Jaime', age: 45, email: "jl@mail.com", source: "mongodb", profile: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
    { id: 4, username: "AS", lastName: 'Stark', firstName: 'Arya', age: 16, email: "as@mail.com", source: "mysql", profile: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
    { id: 5, username: "DT", lastName: 'Targaryen', firstName: 'Daenerys', age: null, email: "td@mail.com", source: "mongodb", profile: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
    { id: 6, username: "_M", lastName: 'Melisandre', firstName: null, age: 150, email: "m@mail.com", source: "mysql", profile: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
    { id: 7, username: "FC", lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: "fc@mail.com", source: "mongodb", profile: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
    { id: 8, username: "RF", lastName: 'Frances', firstName: 'Rossini', age: 36, email: "rf@mail.com", source: "mongodb", profile: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
    { id: 9, username: "HR", lastName: 'Roxie', firstName: 'Harvey', age: 65, email: "hr@mail.com", source: "mysql", profile: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
];