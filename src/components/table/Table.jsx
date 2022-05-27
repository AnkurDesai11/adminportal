import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    { id: 1, name: "ABD", email: "abd@mail.com", contactNum: "+123456789", source: "mysql", img: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
    { id: 2, name: "BBD", email: "bbd@mail.com", contactNum: "+234567891", source: "mysql", img: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
    { id: 4, name: "BSD", email: "bsd@mail.com", contactNum: "+345678912", source: "mongodb", img: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
    { id: 7, name: "SGD", email: "sgd@mail.com", contactNum: "+456789123", source: "mongodb", img: "https://static.vecteezy.com/system/resources/previews/000/378/452/original/edit-profile-vector-icon.jpg" },
];

const ListTable = () => {
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell"><span>ID</span></TableCell>
                        <TableCell className="tableCell"><span>Profile</span></TableCell>
                        <TableCell className="tableCell"><span>Name</span></TableCell>
                        <TableCell className="tableCell"><span>Email Id</span></TableCell>
                        <TableCell className="tableCell"><span>Contact Number</span></TableCell>
                        <TableCell className="tableCell"><span>Source Database</span></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell"><span>{row.id}</span></TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" />
                                </div>
                            </TableCell>
                            <TableCell className="tableCell"><span>{row.name}</span></TableCell>
                            <TableCell className="tableCell"><span>{row.email}</span></TableCell>
                            <TableCell className="tableCell"><span>{row.contactNum}</span></TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.source}`}>{row.source}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ListTable