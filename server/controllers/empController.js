const EmpModel = require("../models/empModel");
const empSave = async (req, res) => {
    const { empno, name, designation, salary } = req.body;
    const employee = await EmpModel.create({
        empno: empno,
        name: name,
        designation: designation,
        salary: salary
    })
    res.send("Data Succesfuuly Save!")
}
const empDisplay = async (req, res) => {
    const employee = await EmpModel.find();
    res.send(employee);
}

const empupdateDisplay = async (req, res) => {
    const employee = await EmpModel.find();
    res.send(employee);
}

const empupdateDelete = async (req, res) => {
    const { id } = req.query;
    const employee = await EmpModel.findByIdAndDelete(id);
    res.send("Record Deleted!");
}

const empSearch = async (req, res) => {
    const { empno } = req.body;
    const employee = await EmpModel.findOne({ empno: empno })
    res.send(employee);
}

const empeditDisplay = async (req, res) => {
    const { id } = req.query;
    const employee = await EmpModel.findById(id);
    res.send(employee);
}

const editSave = async (req, res) => {
    const { _id, empno, name, designation, salary } = req.body;

    const employee = await EmpModel.findByIdAndUpdate(_id, {
        empno: empno,
        name: name,
        designation: designation,
        salary: salary
    })

    res.send("Data Successfully updated!!");
}

module.exports = {
    empSave,
    empDisplay,
    empupdateDisplay,
    empupdateDelete,
    empSearch,
    empeditDisplay,
    editSave
}