import bcrypt from "bcrypt";
import Student from "../models/student.model.mjs";
import "dotenv/config";
import JWT from "jsonwebtoken";
// import userSchema from "../schema/userSchema.mjs";

const getAllStudents = async (req, res) => {

  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }

};

const createStudent = async (req, res) => {
    try {

        const newStudent = await Student.create(req.body);
        await newStudent.save();
        res.json({ message: "Student created successfully", student: newStudent });

    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
}

const getOneStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  } 
};


const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Student updated successfully", student });
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }
};

const showStudentAttendance = async (req, res) => {

    try {

        const students = await Student.find()
            .select("rollNo name status Class")
            .sort({ rollNo: 1 });

        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch attendance",
            error: error.message
        });
    }
};

const markStudentAttendance = async (req, res) => {
  try {
    
    console.log("Params:", req.params);
    console.log("Body:", req.body);

    const { _id } = req.params;
    const { status } = req.body;

    const student = await Student.findByIdAndUpdate(
      _id,
      { status }, // <-- expects "status"
      { new: true }
    );
    console.log("Updated Student:", student);
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllStudents, createStudent, getOneStudent, deleteStudent, updateStudent, showStudentAttendance, markStudentAttendance };