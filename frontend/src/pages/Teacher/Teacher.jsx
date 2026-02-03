
// import React, { useState } from "react";
// import Cards from '../../componenets/Cards/Cards'
// import UpdateTeacher from '../../assets/UpdateTeacher.png'
// import TeacherDataTable from '../../componenets/Table/TeacherDataTable/TeachersDataTble';
// import Modal from "../../componenets/Modal(Popup_Window)/Modal";

// const teachers = [
//   { id: 1, name: "Mrs. Khan", classAssigned: "10-A", attendance: "Present" },
//   { id: 2, name: "Mr. Ali", classAssigned: "10-B", attendance: "Absent" },
//   { id: 3, name: "Ms. Sara", classAssigned: "9-C", attendance: "Present" },
// ];

// function Teacher() {
//   const [activeModal, setActiveModal] = useState(null);
//   return (
//     <div>
//       <h1 className='main-title mt-4'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-person-circle me-3" viewBox="0 0 16 16" >
//         <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
//         <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
//         </svg>Teacher Data</h1>
//       <div className='cards d-flex 
//                 justify-content-center justify-content-md-start 
//                 flex-wrap text-center'>
//          <Cards heading="Add Teacher" value="" photo={UpdateTeacher} colour="#38abb869" onClick={() => setActiveModal("add")} />
//             <Modal
//        show={activeModal === "add"}
//        onClose={() => setActiveModal(null)}
//         title="Add Teacher"
//         footer={
//           <>
//             <button
//               className="btn btn-secondary"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button>
//             <button className="btn btn-primary">
//               Submit
//             </button>
//           </>
//         }
//       >
//         {/* Body content injected here */}
//         <form>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input className="form-control" />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Number</label>
//             <input className="form-control" />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Email ID</label>
//             <input className="form-control" />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">CNIC No</label>
//             <input className="form-control" />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">ID</label>
//             <input className="form-control" />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Class Assigned</label>
//             <input className="form-control" />
//           </div>

//         </form>
//       </Modal>
//          <Cards heading="Delete Teacher " value="" photo={UpdateTeacher} colour="#38abb869" onClick={() => setActiveModal("delete")}/>
//           <Modal
//         show={activeModal === "delete"}
//         onClose={() => setActiveModal(null)}
//         title="Delete Teacher Data"
//         footer={
//           <>
//             <button
//               className="btn btn-secondary"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button>
//             <button className="btn btn-primary">
//               Delete
//             </button>
//           </>
//         }
//       >
//         {/* Body content injected here */}
//         <form>
//           <div className="mb-3">
//             <label className="form-label">ID</label>
//             <input className="form-control" />
//           </div>
//         </form>
//       </Modal>
//          <Cards heading="Update Teacher Data" value ="" photo={UpdateTeacher} colour="#38abb869" onClick={() => setActiveModal("update")}/>
//               <Modal
//        show={activeModal === "update"}
//        onClose={() => setActiveModal(null)}
//         title="Update Teacher Data"
//         footer={
//           <>
//             <button
//               className="btn btn-secondary"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button>
//             <button className="btn btn-primary">
//               Submit
//             </button>
//           </>
//         }
//       >
//         {/* Body content injected here */}
//         <form>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input className="form-control" />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Number</label>
//             <input className="form-control" />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Email ID</label>
//             <input className="form-control" />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">CNIC No</label>
//             <input className="form-control" />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">ID</label>
//             <input className="form-control" />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Class Assigned</label>
//             <input className="form-control" />
//           </div>

//         </form>
//       </Modal>
//       </div>
//       <h1 className='main-title' style={{paddingTop:"50px"}}>Teachers Data</h1>
//       <TeacherDataTable data={teachers} />
//     </div>
//   )
// }

// export default Teacher


















// src/pages/Teacher.jsx

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Cards from '../../componenets/Cards/Cards';
import UpdateTeacher from '../../assets/UpdateTeacher.png';
import TeacherDataTable from '../../componenets/Table/TeacherDataTable/TeachersDataTble';
import Modal from "../../componenets/Modal(Popup_Window)/Modal";

import {
  addTeacherAPI,
  getAllTeachersAPI,
  updateTeacherAPI,
  deleteTeacherAPI,
} from "../../API call/TeacherAPI";

function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    salary: "",
  });

  const [deleteId, setDeleteId] = useState("");
  const [editingTeacherId, setEditingTeacherId] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const data = await getAllTeachersAPI();
      setTeachers(data || []);
    } catch (err) {
      // toast already shown by interceptor
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

    if (!formData.name || !formData.phone || !formData.subject || !formData.salary) {
      toast.warn("Please fill all required fields");
      return;
    }

    if (isNaN(formData.salary) || Number(formData.salary) <= 0) {
      toast.warn("Salary must be a positive number");
      return;
    }

    try {
      setLoading(true);
      await addTeacherAPI(formData);
      resetForm();
      setActiveModal(null);
      fetchTeachers();
    } catch (err) {
      // toast handled by interceptor
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!editingTeacherId) return;

    try {
      setLoading(true);
      await updateTeacherAPI(editingTeacherId, formData);
      resetForm();
      setActiveModal(null);
      fetchTeachers();
    } catch (err) {
      // toast handled by interceptor
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return toast.warn("Please enter Teacher ID");

    const teacher = teachers.find(t => t._id === deleteId || String(t._id) === deleteId);
    if (!teacher) return toast.error("Teacher not found");

    if (!window.confirm(`Delete ${teacher.name}?`)) return;

    try {
      setLoading(true);
      await deleteTeacherAPI(teacher._id);
      setDeleteId("");
      setActiveModal(null);
      fetchTeachers();
    } catch (err) {
      // toast handled by interceptor
    } finally {
      setLoading(false);
    }
  };

  const openUpdateModal = (teacher) => {
    setFormData({
      name: teacher.name || "",
      phone: teacher.phone || "",
      subject: teacher.subject || "",
      salary: String(teacher.salary || ""),
    });
    setEditingTeacherId(teacher._id);
    setActiveModal("update");
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", subject: "", salary: "" });
    setEditingTeacherId(null);
  };

  return (
    <div>
      <h1 className='main-title mt-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-person-circle me-3" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
        Teacher Management
      </h1>

      <div className='cards d-flex justify-content-center justify-content-md-start flex-wrap text-center'>
        <Cards
          heading="Add Teacher"
          photo={UpdateTeacher}
          colour="#38abb869"
          onClick={() => {
            resetForm();
            setActiveModal("add");
          }}
        />

        <Cards
          heading="Delete Teacher"
          photo={UpdateTeacher}
          colour="#38abb869"
          onClick={() => setActiveModal("delete")}
        />

        <Cards
          heading="Update Teacher"
          photo={UpdateTeacher}
          colour="#38abb869"
          onClick={() => toast.info("Use Edit button in table row")}
        />
      </div>

      {/* Add Modal */}
      <Modal
        show={activeModal === "add"}
        onClose={() => setActiveModal(null)}
        title="Add New Teacher"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setActiveModal(null)}>
              Close
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              form="addTeacherForm"
              disabled={loading}
            >
              {loading ? "Saving..." : "Add"}
            </button>
          </>
        }
      >
        <form id="addTeacherForm" onSubmit={handleAddSubmit}>
          <div className="mb-3">
            <label className="form-label">Name *</label>
            <input name="name" value={formData.name} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone *</label>
            <input name="phone" value={formData.phone} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Subject *</label>
            <input name="subject" value={formData.subject} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Salary *</label>
            <input name="salary" value={formData.salary} onChange={handleChange} className="form-control" required type="number" min="0" />
          </div>
        </form>
      </Modal>

      {/* Update Modal */}
      <Modal
        show={activeModal === "update"}
        onClose={() => setActiveModal(null)}
        title="Update Teacher"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setActiveModal(null)}>
              Close
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              form="updateTeacherForm"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </>
        }
      >
        <form id="updateTeacherForm" onSubmit={handleUpdateSubmit}>
          <div className="mb-3">
            <label className="form-label">Name *</label>
            <input name="name" value={formData.name} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone *</label>
            <input name="phone" value={formData.phone} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Subject *</label>
            <input name="subject" value={formData.subject} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Salary *</label>
            <input name="salary" value={formData.salary} onChange={handleChange} className="form-control" required type="number" min="0" />
          </div>
        </form>
      </Modal>

      {/* Delete Modal */}
      <Modal
        show={activeModal === "delete"}
        onClose={() => setActiveModal(null)}
        title="Delete Teacher"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setActiveModal(null)}>
              Close
            </button>
            <button
              className="btn btn-danger"
              onClick={handleDelete}
              disabled={loading || !deleteId}
            >
              {loading ? "Deleting..." : "Delete"}
            </button>
          </>
        }
      >
        <div className="mb-3">
          <label className="form-label">Enter Teacher ID (_id)</label>
          <input
            className="form-control"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            placeholder="Paste teacher _id here"
          />
        </div>
        <small className="text-muted">
          You can find ID in the table or browser console (recommended)
        </small>
      </Modal>

      <h2 className='main-title' style={{ paddingTop: "50px" }}>
        Teachers Data
      </h2>

      {loading ? (
        <p className="text-center">Loading teachers...</p>
      ) : (
        <TeacherDataTable
          data={teachers}
          onEdit={openUpdateModal}
          // onDelete={(teacher) => {
          //   setDeleteId(teacher._id);
          //   setActiveModal("delete");
          // }}
        />
      )}
    </div>
  );
}

export default Teacher;
