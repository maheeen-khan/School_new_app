import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {signupValidation,loginValidation} from './middleware/userAuth.mjs'
import ensureAuthorized from './middleware/tokenVerification.mjs'
import Student from './models/student.model.mjs'
import Teacher from './models/teacher.model.mjs'
import User from './models/user.model.mjs'
import connectToDB from './db/dbConnection.mjs'
import studentRoutes from './routes/studentRoutes.mjs'
import teacherRoutes from './routes/teacherRoutes.mjs'
import userRoutes from './routes/userRoutes.mjs'

connectToDB()

const app = express()
const port = 5000

app.use(cors());

app.use(express.json());

app.use("/api/auth",userRoutes);
app.use("/api/students",studentRoutes);
app.use("/api/teachers",teacherRoutes);

app.use("/", (req, res, next) => {
  // console.log("Request URL:", req.url, "method: ", req.method);
  console.log("API working")
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})