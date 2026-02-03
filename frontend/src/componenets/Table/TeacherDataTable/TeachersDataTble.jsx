import React from "react";
import './TeacherDataTable.css'
function TeacherDataTable({ data }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover border border-2">
        <thead>
          <tr>

            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Phone</th>
            <th scope="col">Salary</th>
            <th scope="col">Joining Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.phone}</td>
              <td>{teacher.salary}</td>
              <td>{new Date(teacher.joiningDate).toLocaleDateString()}</td>
              <td>{teacher.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherDataTable;
