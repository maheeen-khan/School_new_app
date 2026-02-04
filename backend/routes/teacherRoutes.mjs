import express from "express";
const router = express.Router();
import ensureAuthorized from "../middleware/tokenVerification.mjs";
import { createTeacher,updateTeacher,deleteTeacher,getAllTeachers, getOneTeacher,markTeacherAttendance,showTeacherAttendance } from "../controller/teacherController.mjs";

router.get("/getAll-teachers", getAllTeachers); 
router.get("/get-teacher/:id",getOneTeacher);
router.post("/create-teacher", createTeacher);
router.put("/update-teacher/:id", updateTeacher);
router.delete("/delete-teacher/:id", deleteTeacher);

router.get("/show-teacher-attendance", showTeacherAttendance);
router.put("/mark-teacher-attendance/:_id", markTeacherAttendance);

// ensureAuthorized middleware can be added to protect the routes as needed

export default router;