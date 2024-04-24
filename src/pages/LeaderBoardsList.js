import * as React from 'react';
import { 
    Box,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableHead,
    TableRow,
    Typography,
    Paper
} from '@mui/material';
import axios from 'axios';

export default function LeaderBoardsList() {
    const [rows, setRows] = React.useState([]);  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    React.useEffect(() => {
        const SERVER_URL = 'http://localhost:3002/'
        const data = {}

        axios.post(`${SERVER_URL}leaderboards/get`, data).then((req) => {
            if(req.data && req.data.length) {
                let temp = []
                for(let i in req.data) {
                    temp.push(req.data[i])
                }

                setRows(temp)
            }
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <Container sx={{  pt: 20, pb: 10 }}>
            <Box sx={{ pb: 2 }}>
                <Typography 
                    variant="h2" 
                    sx={{ 
                        flex: '1', 
                        textAlign: 'left', 
                        fontWeight: 400 
                    }} 
                >Leader Boards</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead 
                        sx={{ 
                            '& tr th': {
                                fontFamily: 'Gilroy-ExtraBold',
                                color: '#000000'
                            }
                        }}
                    >
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell align="right">Current Money</TableCell>
                            <TableCell align="right">Place</TableCell>
                            <TableCell align="right">Yesterday Place</TableCell>
                            <TableCell align="right">Yesterday Money</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, key) => (
                        <TableRow
                            key={key}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.userId}
                            </TableCell>
                            <TableCell align="right">{row.moneyCurrent}</TableCell>
                            <TableCell align="right">{row.place}</TableCell>
                            <TableCell align="right">{row.placeYesterday}</TableCell>
                            <TableCell align="right">{row.moneyYesterday}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Container>
    );
}
