import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentDataTable'
function StudentDataTable({ data }) {
  return (
    <div className="table-responsive"> {/* Important for responsiveness */}
      <table className="table table-striped table-hover border border-2">
        <thead style={{fontWeight:'bold'}}>
          <tr>
            <th scope="col">Roll No</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Fees Status</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.rollNo}>
              <th scope="row">{student.rollNo}</th>
              <td>{student.name}</td>
              <td>{student.Class}</td>
              <td>{student.status}</td>
              <td>{student.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDataTable;
