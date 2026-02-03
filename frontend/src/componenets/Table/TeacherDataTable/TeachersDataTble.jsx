import React from "react";
import './TeacherDataTable.css'
function TeacherDataTable({ data }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((teacher) => (
            <tr key={teacher.id}>
              <th scope="row">{teacher.id}</th>
              <td>{teacher.name}</td>
              <td>{teacher.classAssigned}</td>
              <td>{teacher.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherDataTable;
