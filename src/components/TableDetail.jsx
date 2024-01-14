import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function createData(no, courseName, type, schedule, price) {
  return { no, courseName, type, schedule, price };
}

const rows = [
  createData(1, "Tom Yum Thailand", "Asian", "Wednesday, 27 July 2022", 450000),
];

const TableDetail = () => {
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
              Course Name
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ textAlign: "center" }}>
              Type
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ textAlign: "center" }}>
              Schedule
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ textAlign: "center" }}>
              Price
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
                {row.courseName}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                {row.type}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                {row.schedule}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                IDR {parsePrice(row.price)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDetail;
