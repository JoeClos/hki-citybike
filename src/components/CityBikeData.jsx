import axios from "axios";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import {
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@mui/material";

const CityBikeData = () => {
  const URL = "http://localhost:8000";
  const [bikeStations, setBikeStations] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setBikeStations(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Helsinki Citybike Stations</h1>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Departure</b>
              </TableCell>
              <TableCell>
                <b>Return</b>
              </TableCell>
              <TableCell>
                <b>Covered distance (km)</b>
              </TableCell>
              <TableCell>
                <b>Duration (min)</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(bikeStations.data || []).map((station) => (
              <TableRow
                hover
                role="checkbox"
                key={station.id}
                tabIndex={-1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{station.departure_station_name}</TableCell>
                <TableCell>{station.return_station_name}</TableCell>
                <TableCell>{(station.covered_distance / 1000).toFixed(1)} km</TableCell>
                <TableCell>{(station.duration / 60).toFixed()} min</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CityBikeData;
