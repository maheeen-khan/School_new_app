import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentDataTable'
function StudentDataTable({ data }) {
  return (
    <div className="table-responsive"> {/* Important for responsiveness */}
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Roll No</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Fees Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.rollNo}>
              <th scope="row">{student.rollNo}</th>
              <td>{student.name}</td>
              <td>{student.className}</td>
              <td>{student.feesStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDataTable;
