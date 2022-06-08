import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datasource";
import { Link } from "react-router-dom";


const Datatable = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/1" className="link"><div className="viewButton">View</div></Link>
                        <Link to="/users" className="link"><div className="deleteButton">Delete</div></Link>
                    </div>
                )
            }
        }
    ];
    return (
        <div className="datatable">
            <div className="title">
                All Users
                <Link to="/users/new" className="newlink">Add new user</Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable