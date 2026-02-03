import bcrypt from "bcrypt";
import Teacher from "../models/teacher.model.mjs";
import "dotenv/config";
import JWT from "jsonwebtoken";
// import userSchema from "../schema/userSchema.mjs";

const getAllTeachers = async (req, res) => {

  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }

};

const createTeacher = async (req, res) => {
    try {

        const newTeacher = await Teacher.create(req.body);
        await newTeacher.save();
        res.json({ message: "Teacher created successfully", teacher: newTeacher });

    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
}

const getOneTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findById(id);
    res.json(teacher);
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  } 
};


const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    await Teacher.findByIdAndDelete(id);
    res.json({ message: "Teacher deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Teacher updated successfully", teacher });
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }
};


const showTeacherAttendance = async (req, res) => {

    try {

        const teacher = await Teacher.find()
            .select("name status subject");

        res.status(200).json(teacher);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch attendance",
            error: error.message
        });
    }
};

const markTeacherAttendance = async (req, res) => {
  try {
    
    console.log("Params:", req.params);
    console.log("Body:", req.body);

    const { _id } = req.params;
    const { status } = req.body;

    const teacher = await Teacher.findByIdAndUpdate(
      _id,
      { status }, // <-- expects "status"
      { new: true }
    );
    console.log("Updated Teacher:", teacher);
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllTeachers, createTeacher, getOneTeacher, deleteTeacher, updateTeacher, showTeacherAttendance, markTeacherAttendance };