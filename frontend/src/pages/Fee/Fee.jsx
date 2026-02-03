import StudentDataTable from '../../componenets/Table/StudentDataTable/StudentDataTable'
import VerticalBarChart from '../../componenets/Charts/VerticalBarChart'
const students = [
  { rollNo: 1, className: "10-A", name: "Ali", feesStatus: "Paid" },
  { rollNo: 2, className: "10-B", name: "Sara", feesStatus: "Pending" },
  { rollNo: 3, className: "9-C", name: "Ahmed", feesStatus: "Paid" },
];
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Fee = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Sample fee data
  const feeRecords = [
    { id: 1, rollNo: "001", name: "Ahmed Ali",       class: "Class 10", monthlyFee: 5000, paid: 5000, status: "Paid",     dueDate: "2025-12-05" },
    { id: 2, rollNo: "002", name: "Ayesha Khan",     class: "Class 9",  monthlyFee: 5000,   paid: 4500, status: "Pending",  dueDate: "2025-12-10" },
    { id: 3, rollNo: "003", name: "Bilal Ahmed",     class: "Class 10", monthlyFee: 5000, paid: 3000, status: "Partial",  dueDate: "2025-12-03" },
    { id: 4, rollNo: "004", name: "Fatima Zahra",    class: "Class 8",  monthlyFee: 4500, paid: 4500, status: "Paid",     dueDate: "2025-12-01" },
    { id: 5, rollNo: "005", name: "Hassan Raza",     class: "Class 7",  monthlyFee: 4500, paid: 0,    status: "Pending",  dueDate: "2025-12-08" },
  ];

  const filtered = feeRecords.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.rollNo.includes(search) ||
      item.class.includes(search)
  );

  const totalCollected = feeRecords.reduce((sum, r) => sum + r.paid, 0);
  const totalDue = feeRecords.reduce((sum, r) => sum + (r.monthlyFee - r.paid), 0);

  return (
    <div>
      <h1 className='main-title mt-4'><i className="bi bi-receipt me-2"></i>Fees Overview</h1>
      <VerticalBarChart/>
    
      <h1 className='main-title'>Student Fees Status </h1>
      <StudentDataTable data={students}/>
    <div style={{ padding: "2rem", backgroundColor: "#f8fff9", minHeight: "100vh" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-success fw-bold"
          style={{ borderRadius: "12px" }}
        >
          Back
        </button>
        <h2 className="text-success fw-bold mb-0">Fee Management</h2>
      </div>

      {/* Summary Cards */}
      <Row className="g-4 mb-4">
        <Col md={4} lg={3}>
          <Card className="text-white shadow border-0" style={{ background: "linear-gradient(135deg, #2E8B57, #3CB371)", borderRadius: "16px" }}>
            <Card.Body className="text-center">
              <h5>Total Collected</h5>
              <h3 className="fw-bold">Rs. {totalCollected.toLocaleString()}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={3}>
          <Card className="shadow border-0" style={{ borderRadius: "16px" }}>
            <Card.Body className="text-center">
              <h5 className="text-muted">Total Students</h5>
              <h3 className="fw-bold text-success">{feeRecords.length}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={3}>
          <Card className="text-white shadow border-0" style={{ background: "linear-gradient(135deg, #DAA520, #FFB84D)", borderRadius: "16px" }}>
            <Card.Body className="text-center">
              <h5>Total Due</h5>
              <h3 className="fw-bold">Rs. {totalDue.toLocaleString()}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Search & Table */}
      <Card className="shadow border-0" style={{ borderRadius: "16px" }}>
        <Card.Body className="p-4">
          <Row className="mb-4">
            <Col lg={5}>
              <Form.Control
                type="text"
                placeholder="Search by name, roll no or class..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ borderRadius: "12px" }}
              />
            </Col>
            <Col className="text-end">
              <Button variant="success" style={{ borderRadius: "12px" }}>
                + Add Fee Payment
              </Button>
            </Col>
          </Row>

          <div className="table-responsive">
            <Table hover className="align-middle">
              <thead className="table-success">
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Monthly Fee</th>
                  <th>Paid</th>
                  <th>Status</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((student) => (
                  <tr key={student.id}>
                    <td className="fw-semibold">{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td>{student.class}</td>
                    <td>Rs. {student.monthlyFee.toLocaleString()}</td>
                    <td className="text-success fw-bold">Rs. {student.paid.toLocaleString()}</td>
                    <td>
                      <span
                        className={`badge ${
                          student.status === "Paid"
                            ? "bg-success"
                            : student.status === "Partial"
                            ? "bg-warning"
                            : "bg-danger"
                        } px-3 py-2`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td>{student.dueDate}</td>
                  </tr>
                 

                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>   {/* closes styled div */}

  </div>     

);
}
export default Fee;