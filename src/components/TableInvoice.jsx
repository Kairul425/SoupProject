import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5B4947",
    color: theme.palette.common.white,
    fontFamily: "Montserrat, sans-serif",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(no, noInvoice, date, totalCourse, totalPrice) {
  return { no, noInvoice, date, totalCourse, totalPrice };
}

const rows = [
  createData(1, "SOU00003", "12 July 2022", 1, 450000),
  createData(2, "SOU00002", "05 Februari 2022", 2, 900000),
  createData(3, "SOU00001", "30 August 2021", 1, 600000),
];

const TableInvoice = () => {
  const buttonStyle = {
    width: "140px",
    borderRadius: "8px",
    paddingTop: "5px",
    color: "#5B4947",
    fontSize: "14px",
    backgroundColor: "#FABC1D",
    textTransform: "none",
    fontFamily: "Montserrat",
    fontWeight: "700",
  };

  const parsePrice = (price) => {
    const numberPrice = Number(price);
    return numberPrice.toLocaleString("id-ID");
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="right" sx={{ textAlign: "center" }}>
              No. Invoice
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ textAlign: "center" }}>
              Date
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ textAlign: "center" }}>
              Total Course
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ textAlign: "center" }}>
              Total Price
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ textAlign: "center" }}>
              Action
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.no}>
              <StyledTableCell component="th" scope="row">
                {row.no}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                {row.noInvoice}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                {row.totalCourse}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                IDR {parsePrice(row.totalPrice)}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                <Link to="/detailInvoice">
                  <Button variant="contained" sx={buttonStyle}>
                    Details
                  </Button>
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableInvoice;
