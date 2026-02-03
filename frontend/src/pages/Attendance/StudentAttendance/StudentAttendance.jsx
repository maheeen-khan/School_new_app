import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

const StudentAttendance = () => {
  const navigate = useNavigate();

  // Mock student data
  const [students, setStudents] = useState([
    { id: 1, rollNo: "001", name: "Ahmed Ali", present: true },
    { id: 2, rollNo: "002", name: "Ayesha Khan", present: true },
    { id: 3, rollNo: "003", name: "Bilal Ahmed", present: true },
    { id: 4, rollNo: "004", name: "Fatima Zahra", present: false },
    { id: 5, rollNo: "005", name: "Hassan Raza", present: true },
    { id: 6, rollNo: "006", name: "Maryam Bibi", present: true },
    { id: 7, rollNo: "007", name: "Omar Farooq", present: false },
    { id: 8, rollNo: "008", name: "Zainab Malik", present: true },
  ]);

  const [search, setSearch] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [date] = useState(new Date().toISOString().split("T")[0]);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.rollNo.includes(search)
  );

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, present: !s.present } : s))
    );
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setStudents((prev) =>
      prev.map((s) => ({ ...s, present: !selectAll }))
    );
  };

  const presentCount = students.filter((s) => s.present).length;
  const totalCount = students.length;

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f8fff9", minHeight: "100vh" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-success me-3 fw-bold"
          style={{ borderRadius: "12px" }}
        >
          Back
        </button>
        <h2 className="text-success fw-bold mb-0">Mark Student Attendance</h2>
      </div>

      <Card className="shadow border-0" style={{ borderRadius: "16px" }}>
        <Card.Body className="p-4">
          {/* Top Controls */}
          <Row className="mb-4">
            <Col md={4}>
              <Form.Control
                type="date"
                value={date}
                disabled
                style={{ borderRadius: "12px" }}
                className="mb-3"
              />
            </Col>
            <Col md={5}>
              <InputGroup>
                <InputGroup.Text style={{ borderRadius: "12px 0 0 12px" }}>
                  Search
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search by name or roll no..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ borderRadius: "0 12px 12px 0" }}
                  
                />
              </InputGroup>
            </Col>
            <Col md={3} className="text-end">
              <span className="text-success fs-5 fw-bold">
                {presentCount} / {totalCount} Present
              </span>
            </Col>
          </Row>

          {/* Table */}
          <div className="table-responsive">
            <Table hover className="align-middle">
              <thead className="table-success">
                <tr>
                  <th>
                    <Form.Check
                      type="checkbox"
                      checked={selectAll}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <Form.Check
                        type="checkbox"
                        checked={student.present}
                        onChange={() => toggleAttendance(student.id)}
                      />
                    </td>
                    <td className="fw-semibold">{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td className="text-center">
                      <span
                        className={`badge ${
                          student.present ? "bg-success" : "bg-danger"
                        } px-3 py-2`}
                      >
                        {student.present ? "Present" : "Absent"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* Save Button */}
          <div className="text-center mt-4">
            <Button
              variant="success"
              size="lg"
              className="px-5"
              style={{ borderRadius: "12px" }}
            >
              Save Attendance
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentAttendance;
