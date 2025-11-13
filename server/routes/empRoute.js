const express=require("express");
const route = express.Router();
const EmpController = require("../controllers/empController");

route.post("/registration", EmpController.empSave);
route.post("/login", EmpController.empLogin);
route.post("/userauth", EmpController.empAuth);


module.exports=route