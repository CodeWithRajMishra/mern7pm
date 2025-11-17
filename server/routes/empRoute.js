const express=require("express");
const route = express.Router();
const EmpController = require("../controllers/empController");

route.post("/registration", EmpController.userSave);
route.get("/display", EmpController.userDisplay);
route.post("/savebook", EmpController.bookSave);
route.get("/display2", EmpController.Display2);

module.exports=route