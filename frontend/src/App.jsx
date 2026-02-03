import './App.css'
import StudentAttendance from './pages/Attendance/StudentAttendance/StudentAttendance';
import TeacherAttendance from './pages/Attendance/TeacherAttendance/TeacherAttendance';
import Certificate from './pages/Certificate/Certificate';
import Fee from './pages/Fee/Fee';
import Dashboard from './pages/Mainpage/Dashboard/Dashboard'
import Student from './pages/Student/Student';
import Teacher from './pages/Teacher/Teacher';
import PrivateRoute from './routes/PrivateRoute';
import Classes from './pages/Classes/Classes';
import Subjects from './pages/Subjects/Subjects';
import SubjectDetail from './pages/SubjectDetail/SubjectDetail';
import SignUp from './pages/Authentication/signup';
import Login from './pages/Authentication/Login';
import AppRoute from './routes/AppRoute';
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<PrivateRoute><AppRoute/></PrivateRoute>}>
             <Route index element={<Dashboard />} />
             <Route path="Students" element={<PrivateRoute><Student/></PrivateRoute>}/> 
             <Route path="Teachers" element={<PrivateRoute><Teacher/></PrivateRoute>}/>
             <Route path="Teachers_Attendance" element={<PrivateRoute><TeacherAttendance/></PrivateRoute>}/>
             <Route path="Students_Attendance" element={<PrivateRoute><StudentAttendance/></PrivateRoute>}/>
             <Route path="Fee" element={<PrivateRoute><Fee/></PrivateRoute>}/>
             <Route path="Certificate" element={<PrivateRoute><Certificate/></PrivateRoute>}/>

             <Route path="Classes" element={<PrivateRoute><Classes /></PrivateRoute>} />
             <Route path="subjects/:classId" element={<Subjects />} />
             <Route path="subject-detail/:classId/:subjectId" element={<SubjectDetail />} />
             <Route path="/attendance" element={<PrivateRoute><StudentAttendance /></PrivateRoute>} />

             
        </Route>
          
      </Routes>
    </>
  )
}

export default App
