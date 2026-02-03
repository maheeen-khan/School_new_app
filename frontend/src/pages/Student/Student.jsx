// import React, { useState } from "react";
// import Cards from '../../componenets/Cards/Cards'
// import AddStudent from '../../assets/AddStudent.png'
// import DeleteStudent from '../../assets/DeleteStudent.png'
// import UpdateStudent from '../../assets/UpdateStudent.png'
// import StudentDataTable from '../../componenets/Table/StudentDataTable/StudentDataTable'
// import Modal from '../../componenets/Modal(Popup_Window)/Modal'
// import { addStudentAPI } from "../../API call/StudentAPI";
// import { toast } from "react-toastify";

// const students = [
//   { rollNo: 1, className: "10-A", name: "Ali", feesStatus: "Paid" },
//   { rollNo: 2, className: "10-B", name: "Sara", feesStatus: "Pending" },
//   { rollNo: 3, className: "9-C", name: "Ahmed", feesStatus: "Paid" },
// ];

// function Student() {

//   const [activeModal, setActiveModal] = useState(null);

//   const [formData, setFormData] = useState({
//     name: '',
//     rollNo: '',
//     Class: '',
//     Address: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addStudent(formData);
//     setActiveModal(null);

//   };

//   // here handleDelete and handleUpdate functions can be implemented similarly only 2nd line will change according to API used and this functions defined in StudentAPI file

//   // in modal, there would be "name", value, onChange field 

//   return (
//     <div>
//       <h1 className='main-title mt-4'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-person-arms-up me-3" viewBox="0 0 16 16">
//           <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
//           <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z" />
//         </svg>
//         Student</h1>
//       <div className="cards d-flex 
//                 justify-content-center justify-content-md-start 
//                 flex-wrap text-center">
//         <Cards heading="Add Student" value="" photo={AddStudent} colour="#38abb869" onClick={() => setActiveModal("add")} />
//         <Modal
//           show={activeModal === "add"}
//           onClose={() => setActiveModal(null)}
//           title="Add Student"
//           footer={
//             <>
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => setShowModal(false)}
//               >
//                 Close
//               </button>
//               <button
//                 className="btn btn-primary"
//                 type="submit"
//                 form="addStudentForm"
//               >
//                 Submit
//               </button>
//             </>
//           }
//         >
//           {/* Body content injected here */}
//           <form onSubmit={handleSubmit} id="addStudentForm">
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input
//                 className="form-control"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Roll No</label>
//               <input
//                 className="form-control"
//                 name="rollNo"
//                 value={formData.rollNo}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Class</label>
//               <input
//                 className="form-control"
//                 name="Class"
//                 value={formData.Class}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Address</label>
//               <input
//                 className="form-control"
//                 name="Address"
//                 value={formData.Address}
//                 onChange={handleChange}
//               />
//             </div>

//           </form>

//         </Modal>
//         <Cards heading="Delete Student" value="" photo={DeleteStudent} colour="#38abb869" onClick={() => setActiveModal("delete")} />
//         <Modal
//           show={activeModal === "delete"}
//           onClose={() => setActiveModal(null)}
//           title="Delete Student"
//           footer={
//             <>
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => setShowModal(false)}
//               >
//                 Close
//               </button>
//               <button className="btn btn-primary">
//                 Delete
//               </button>
//             </>
//           }
//         >
//           {/* Body content injected here */}
//           <form>
//             <div className="mb-3">
//               <label className="form-label">Roll No</label>
//               <input className="form-control" />
//             </div>
//           </form>
//         </Modal>
//         <Cards heading="Update Student Data" value="" photo={UpdateStudent} colour="#38abb869" onClick={() => setActiveModal("update")} />
//         <Modal
//           show={activeModal === "update"}
//           onClose={() => setActiveModal(null)}
//           title="Update Student Data"
//           footer={
//             <>
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => setShowModal(false)}
//               >
//                 Close
//               </button>
//               <button className="btn btn-primary">
//                 Submit
//               </button>
//             </>
//           }
//         >
//           {/* Body content injected here */}
//           <form>
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input className="form-control" />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Guardian's Name</label>
//               <input className="form-control" />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Guardian's No</label>
//               <input className="form-control" />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Guardian's Designation</label>
//               <input className="form-control" />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Roll No</label>
//               <input className="form-control" />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Class</label>
//               <input className="form-control" />
//             </div>

//           </form>
//         </Modal>
//       </div>
//       <h1 className='main-title' style={{ paddingTop: "50px" }}>Students Data</h1>
//       <StudentDataTable data={students} />
//     </div>
//   )
// }

// export default Student








































// src/pages/Student.jsx

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Cards from "../../componenets/Cards/Cards";
import AddStudent from "../../assets/AddStudent.png";
import DeleteStudent from "../../assets/DeleteStudent.png";
import UpdateStudent from "../../assets/UpdateStudent.png";
import StudentDataTable from "../../componenets/Table/StudentDataTable/StudentDataTable";
import Modal from "../../componenets/Modal(Popup_Window)/Modal";

import {
  addStudentAPI,
  getAllStudentsAPI,
  updateStudentAPI,
  deleteStudentAPI,
} from "../../API call/StudentAPI";

function Student() {
  const [students, setStudents] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    Class: "",          // Capital C to match schema
    Address: "",
  });

  const [deleteRollNo, setDeleteRollNo] = useState("");
  const [editingStudentId, setEditingStudentId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const data = await getAllStudentsAPI();
      setStudents(data || []);
    } catch (err) {
      // toast.error handled in API interceptor
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.rollNo || !formData.Class || !formData.Address) {
      toast.warn("Please fill all required fields");
      return;
    }

    const roll = Number(formData.rollNo);
    if (isNaN(roll) || roll < 1 || roll > 30) {
      toast.warn("Roll No must be between 1 and 30");
      return;
    }

    if (!["6", "7", "8", "9", "10"].includes(formData.Class)) {
      toast.warn("Class must be between 6 and 10");
      return;
    }

    try {
      setLoading(true);
      await addStudentAPI(formData);
      resetForm();
      setActiveModal(null);
      fetchStudents();
    } catch (err) {
      // toast.error handled in API interceptor
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!editingStudentId) return;

    try {
      setLoading(true);
      await updateStudentAPI(editingStudentId, formData);
      resetForm();
      setActiveModal(null);
      fetchStudents();
    } catch (err) {
      // toast.error handled in API interceptor
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteRollNo) return toast.warn("Enter Roll No");

    const student = students.find(s => String(s.rollNo) === deleteRollNo);
    if (!student) return toast.error("Student not found");

    if (!window.confirm(`Delete ${student.name} (Roll ${student.rollNo})?`)) return;

    try {
      setLoading(true);
      await deleteStudentAPI(student._id);
      setDeleteRollNo("");
      setActiveModal(null);
      fetchStudents();
    } catch (err) {
      // toast.error handled in API interceptor
    } finally {
      setLoading(false);
    }
  };

  const openUpdateModal = (student) => {
    setFormData({
      name: student.name || "",
      rollNo: String(student.rollNo || ""), // Input expects string
      Class: student.Class || "",
      Address: student.Address || "",
    });
    setEditingStudentId(student._id);
    setActiveModal("update");
  };

  const resetForm = () => {
    setFormData({ name: "", rollNo: "", Class: "", Address: "" });
    setEditingStudentId(null);
  };

  return (
    <div>
      <h1 className="main-title mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="black"
          className="bi bi-person-arms-up me-3"
          viewBox="0 0 16 16"
        >
          <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z" />
        </svg>
        Student Management
      </h1>

      <div className="cards d-flex justify-content-center justify-content-md-start flex-wrap text-center">
        <Cards
          heading="Add Student"
          photo={AddStudent}
          colour="#38abb869"
          onClick={() => {
            resetForm();
            setActiveModal("add");
          }}
        />
        <Cards
          heading="Delete Student"
          photo={DeleteStudent}
          colour="#38abb869"
          onClick={() => setActiveModal("delete")}
        />
        <Cards
          heading="Update Student"
          photo={UpdateStudent}
          colour="#38abb869"
          onClick={() => toast.info("Click Edit button in table row")}
        />
      </div>

      {/* Add Modal */}
      <Modal
        show={activeModal === "add"}
        onClose={() => setActiveModal(null)}
        title="Add New Student"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setActiveModal(null)}>
              Close
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              form="addStudentForm"
              disabled={loading}
            >
              {loading ? "Saving..." : "Add"}
            </button>
          </>
        }
      >
        <form id="addStudentForm" onSubmit={handleAddSubmit}>
          <div className="mb-3">
            <label className="form-label">Name *</label>
            <input name="name" value={formData.name} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Roll No (1-30) *</label>
            <input name="rollNo" value={formData.rollNo} onChange={handleChange} className="form-control" required type="number" min="1" max="30" />
          </div>
          <div className="mb-3">
            <label className="form-label">Class (6-10) *</label>
            <input name="Class" value={formData.Class} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address *</label>
            <input name="Address" value={formData.Address} onChange={handleChange} className="form-control" required />
          </div>
        </form>
      </Modal>

      {/* Update Modal */}
      <Modal
        show={activeModal === "update"}
        onClose={() => setActiveModal(null)}
        title="Update Student"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setActiveModal(null)}>
              Close
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              form="updateStudentForm"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </>
        }
      >
        <form id="updateStudentForm" onSubmit={handleUpdateSubmit}>
          <div className="mb-3">
            <label className="form-label">Name *</label>
            <input name="name" value={formData.name} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Roll No (1-30) *</label>
            <input name="rollNo" value={formData.rollNo} onChange={handleChange} className="form-control" required type="number" min="1" max="30" />
          </div>
          <div className="mb-3">
            <label className="form-label">Class (6-10) *</label>
            <input name="Class" value={formData.Class} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address *</label>
            <input name="Address" value={formData.Address} onChange={handleChange} className="form-control" required />
          </div>
        </form>
      </Modal>

      {/* Delete Modal */}
      <Modal
        show={activeModal === "delete"}
        onClose={() => setActiveModal(null)}
        title="Delete Student"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setActiveModal(null)}>
              Close
            </button>
            <button
              className="btn btn-danger"
              onClick={handleDelete}
              disabled={loading || !deleteRollNo}
            >
              {loading ? "Deleting..." : "Delete"}
            </button>
          </>
        }
      >
        <div className="mb-3">
          <label className="form-label">Roll No to delete</label>
          <input
            className="form-control"
            value={deleteRollNo}
            onChange={(e) => setDeleteRollNo(e.target.value)}
            placeholder="e.g. 14"
          />
        </div>
      </Modal>

      <h2 className="main-title mt-5">Students List</h2>

      {loading ? (
        <p className="text-center">Loading students...</p>
      ) : (
        <StudentDataTable
          data={students}
          onEdit={openUpdateModal}
          // Optional: Add row delete button in table
          // onDelete={(student) => {
          //   setDeleteRollNo(String(student.rollNo));
          //   setActiveModal("delete");
          // }}
        />
      )}
    </div>
  );
}

export default Student;