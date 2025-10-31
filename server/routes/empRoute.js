const express=require("express");
const route = express.Router();
const EmpController = require("../controllers/empController");

route.post("/save", EmpController.empSave);
route.get("/display", EmpController.empDisplay);
route.get("/updatedisplay", EmpController.empupdateDisplay);
route.get("/updatedelete", EmpController.empupdateDelete);
 route.post("/search", EmpController.empSearch);
route.get("/editdisplay", EmpController.empeditDisplay);

 route.put("/editsave", EmpController.editSave);

module.exports=route