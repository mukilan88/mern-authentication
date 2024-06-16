import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmployeeModel from "./models/Employee.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) => {
  const { fname, pass } = req.body;
  EmployeeModel.findOne({ fname: fname }).then((user) => {
    if (user) {
      if (user.pass === pass) {
        res.json("success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("no record existed");
    }
  });
});

app.post("/signup", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
