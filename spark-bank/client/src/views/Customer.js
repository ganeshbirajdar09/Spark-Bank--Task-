import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Stepper,
  Step,
  Paper,
  makeStyles,
  StepLabel,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  InputLabel,
  Radio,
  MenuItem,
  Select as MuiSelect,
  Button,
  Select,
} from "@material-ui/core";
import "./Customer.css";
import InputAdornment from "@material-ui/core/InputAdornment";
import { multiStepContext } from "../Context/StepContext";

export default function Customer() {
  const { id } = useParams();
  const [id2, setId2] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState("");
  const [user, setUser] = useState([]);
  // const { transferData, setTransferData, sendMoney } =
  //   useContext(multiStepContext);
  const history = useHistory();

  // useEffect(async () => {
  //   getData(id);
  //   let { data } = await axios.get("http://localhost:5000//customers");
  //   const details = data;
  //   setUser(details);
  // }, [id]);

  const fetchData = async () => {
    let { data } = await axios.get("http://localhost:5000/customers");
    // console.log("RESPONSE: ", data);
    const detailts = data;
    setUser(detailts);
  };

  useEffect(() => {
    getData(id);
    fetchData();
  }, []);

  console.log(data);

  const getData = async (id) => {
    // console.log(id);
    let { data } = await axios.get(`http://localhost:5000/customers/${id}`);
    setData(data);
  };

  // async function sendMoney() {
  //   console.log(transferData);
  //   await axios.put("http://localhost:5000//customer/money", transferData);
  //   await axios.post("http://localhost:5000//transactions", transferData);
  //   history.push("http://localhost:5000//customers");
  // }

  const sendMoney = async () => {
    console.log("TRANSFER DATA", transferData);
    // await axios.put("http://localhost:5000//customer/money", transferData);
    // await axios.put("http://localhost:5000//customer/money", transferData);
    history.push("/success");
  };

  const count = Number(amount);

  const transferData = {
    count,
    id,
    id2,
  };

  return (
    <div>
      <div className="app ">
        <div className="details">
          <div className="big-img">
            <img src="../assets/images/profile3.png" style={{ width: "70%" }} />
          </div>
          <div className="box">
            <div className="row">
              <h4>
                {data.name}
                <h6>
                  {/* <i class="fas fa-star" style={{ color: "yellow" }}></i>₹ */}
                  {data.amount}
                </h6>
              </h4>

              <span>
                {data.accountType}
                <i></i> {data.gender}
              </span>
            </div>
            <div className="row text-white">
              <FormControl className="bg-white">
                <InputLabel className="text-dark" id="countrySelectLabel">
                  Transfer to
                </InputLabel>
                <Select
                  labelId="countrySelectLabel"
                  id="countrySelect"
                  onChange={(e) => setId2(e.target.value)}
                  value={id2}
                >
                  {user &&
                    user.map((code, index) =>
                      user.name !== code.name ? (
                        <MenuItem key={index} value={code._id}>
                          {code.name}
                        </MenuItem>
                      ) : null
                    )}
                </Select>
              </FormControl>
              <TextField
                className="text-white text bg-white"
                label="Transfer Amount"
                id="standard-start-adornment"
                type="number"
                value={amount}
                color="primary"
                onChange={(event) => setAmount(event.target.value)}
                error={amount > data.amount}
                helperText={
                  (console.log(amount),
                  console.log(data.amount),
                  amount > data.amount
                    ? "The amount is greater than your balance"
                    : " ")
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment className="text-white" position="start">
                      ₹
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              {amount > data.amount ? (
                <Button variant="contained" disabled>
                  Send
                </Button>
              ) : (
                <Button variant="contained" color="primary" onClick={sendMoney}>
                  Send
                </Button>
              )}
            </div>
            {/* <p>
              <button className="cart">{data.Phone}</button>
              <Button variant="outline-primary">{Movie.Genre}</Button>
            </p>
            <p>{Movie.Plot}</p>
            <hr></hr>
            <p>
              <strong style={{ color: "#38b000" }}>
                Director&nbsp;&nbsp;{" "}
              </strong>{" "}
              {"       "}
              {Movie.Director}
            </p>
            <hr></hr>
            <p>
              <strong style={{ color: "#38b000" }}>Actors &nbsp;&nbsp; </strong>{" "}
              {"       "}
              {Movie.Actors}
            </p>
            <hr></hr>
            <p>
              <strong style={{ color: "#38b000" }}>
                Languages&nbsp;&nbsp;{" "}
              </strong>{" "}
              {"       "}
              {Movie.Language}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
