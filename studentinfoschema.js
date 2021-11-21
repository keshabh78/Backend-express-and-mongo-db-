const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentinfoschema = new Schema({
  name:  String, // String is shorthand for {type: String}
  reg_no: String,
  marks:Number
});

module.exports = mongoose.model("studentinfo",studentinfoschema,"My lab-11 Work")