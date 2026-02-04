import express from "express";
const router = express.Router();
import ensureAuthorized from "../middleware/tokenVerification.mjs";
import { getAllStudents,getOneStudent,createStudent,updateStudent,deleteStudent, showStudentAttendance , markStudentAttendance} from "../controller/studentController.mjs";

router.get("/getAll-students", getAllStudents);
router.get("/get-student/:id",getOneStudent);
router.post("/create-student", createStudent);
router.put("/update-student/:id", updateStudent);
router.delete("/delete-student/:id", deleteStudent);

router.get("/show-attendance", showStudentAttendance);
router.put("/mark-attendance/:_id", markStudentAttendance);

//ensureAuthorized middleware can be added to protect the routes 

export default router;