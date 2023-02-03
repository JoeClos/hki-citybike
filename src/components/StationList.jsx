import axios from "axios";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import {
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const StationList = () => {
  const URL = "https://hki-citybike.onrender.com/station";
  const [stations, setStations] = useState([{}]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setStations(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

  return (
    <div>
      <div className="navbar-list">
        <h1>Station List</h1>
        <Link to={"/"}>
          <Button variant="contained">
            <FontAwesomeIcon icon={faHome} />
          </Button>
        </Link>
      </div>

      <Paper sx={{ width: "90%", overflow: "hidden", marginLeft: "5rem" }}>
        <TableContainer sx={{ maxHeight: 550 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <b>Station name</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>Address</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>City</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>Operator</b>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(stations.data || []).map((station) => (
                <TableRow
                  hover
                  role="checkbox"
                  key={station.id}
                  tabIndex={-1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{station.nimi}</TableCell>
                  <TableCell>{station.adress}</TableCell>
                  <TableCell>{station.kaupunki}</TableCell>
                  <TableCell>{station.operaattor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default StationList;
