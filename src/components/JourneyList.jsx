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
import { tableCellClasses } from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const JourneyList = () => {
  const URL = "https://hki-citybike.onrender.com";
  const [journeys, setJourneys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setJourneys(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

  return (
    <div>
      <div className="navbar-list">
        <h1>Journey list</h1>
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
                  <b>Departure</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>Return</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>Covered distance (km)</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>Duration (min)</b>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(journeys.data || [])
                .slice(0, 500)
                .map((journey) => (
                  <TableRow
                    hover
                    role="checkbox"
                    key={journey.id}
                    tabIndex={-1}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{journey.departure_station_name}</TableCell>
                    <TableCell>{journey.return_station_name}</TableCell>
                    <TableCell>
                      {(journey.covered_distance / 1000).toFixed(1)} km
                    </TableCell>
                    <TableCell>
                      {(journey.duration / 60).toFixed()} min
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Footer />
    </div>
  );
};

export default JourneyList;
