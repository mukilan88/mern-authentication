import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  fname: String,
  pass: String,
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);

export default EmployeeModel;
