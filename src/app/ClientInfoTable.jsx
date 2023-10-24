"use client";

import { useEffect, useState } from "react";
import moment from "moment";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axiosInstance from "@/clientAxios";
import { IP6to4 } from "../usefullFunction";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const ClientInfoTable = () => {
  const [clients, setClients] = useState(undefined);
  const time = moment().format("HH:mm").toString();
  useEffect(() => {
    axiosInstance.get("/agents").then((res, req) => {
      console.log(res.data.data);
      setClients(res.data.data.affected_items);
      return res;
    });
  }, [setClients]);
  if (!clients) return null;
  return (
    <TableContainer className="border" component={Paper}>
      <div className="border-b-2 p-2 text-3xl text-center ">
        {`클라이언트 상태 (현재시간 ${time})`}
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>클라이언트 이름</TableCell>
            <TableCell align="right">운영체제</TableCell>
            <TableCell align="right">아키텍쳐</TableCell>
            <TableCell align="right">IP</TableCell>
            <TableCell align="right">마지막 생존시간</TableCell>
            <TableCell align="right">상태</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.os.name}</TableCell>
              <TableCell align="right">{row.os.arch}</TableCell>
              <TableCell align="right">{IP6to4(row.ip)}</TableCell>
              <TableCell align="right">{row.lastKeepAlive}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientInfoTable;
