import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 50,
    //  marginTop:"100px",
    //  marginBottom:"200px",
    margin: "100px auto 200px",
    width: "70%",
  },
});

export default function Customers() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  // useEffect(async () => {
  //   await axios.get("http://localhost:5000/customers").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/customers")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  const fetchData = async () => {
    let { data } = await axios.get("http://localhost:5000/customers");
    console.log("RESPONSE: ", data);
    const detailts = data;
    setData(detailts);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <TableContainer className="text-white bg-dark" component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S No.</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              {/* <StyledTableCell align="right">Calories</StyledTableCell> */}
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Transfer</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((item, index) => {
                return (
                  <StyledTableRow className="text-white" key={item.name}>
                    <StyledTableCell
                      className="text-white"
                      component="th"
                      scope="row"
                    >
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      className="text-white"
                      align="left"
                      component="th"
                      scope="row"
                    >
                      {item.name}
                    </StyledTableCell>
                    {/* <StyledTableCell align="right">{item.name}</StyledTableCell> */}
                    <StyledTableCell className="text-white" align="right">
                      {item.amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Link to={`/customers/${item._id}`}>
                        <Button
                          variant="contained"
                          className="bg-info"
                          color="success"
                        >
                          Transfer
                        </Button>
                      </Link>
                    </StyledTableCell>
                    {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
