import React,{ useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { showTeacherAttendanceAPI, markTeacherAttendanceAPI } from "../../../API call/TeacherAPI";
import { toast } from "react-toastify";

const TeacherAttendance = () => {
  const navigate = useNavigate();
  const [teachers, setteachers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [date] = useState(new Date().toISOString().split("T")[0]);

const filteredteachers = teachers.filter(
  (s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
);

const toggleAttendance = async (teacherId) => {
  const teacher = teachers.find((s) => s._id === teacherId);
  const newStatus = teacher.present ? "Absent" : "Present";

  try {
    // Update backend
    await markTeacherAttendanceAPI(teacherId, newStatus);

    // Update UI
    setteachers((prev) =>
      prev.map((s) =>
        s._id === teacherId ? { ...s, present: !s.present } : s
      )
    );
  } catch (error) {
    console.log(error);
  }
};

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setteachers((prev) =>
      prev.map((s) => ({ ...s, present: !selectAll }))
    );
  };

  const presentCount = teachers.filter((s) => s.present).length;
  const totalCount = teachers.length;

  useEffect(() => {
  fetchteachers();
}, []);

const fetchteachers = async () => {
  try {

    const response = await showTeacherAttendanceAPI();

    // Convert attendanceStatus → checkbox boolean
    const formattedteachers = response.map((teacher) => ({
      ...teacher,
      present: teacher.status === "Present"
    }));

    setteachers(formattedteachers);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f8fff9", minHeight: "100vh" }}>
      {/* Header */}
      <div className="d-flex align-items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-success me-3 fw-bold"
          style={{ borderRadius: "12px" }}
        >
          Back
        </button>
        <h2 className="text-success fw-bold mb-0">Teacher Attendance</h2>
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
                  placeholder="Search by name"
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
                 
                  <th>Name</th>
                  <th>Subject</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredteachers.map((teacher) => (
                  <tr key={teacher._id}>
                    <td>
                      <Form.Check
                        type="checkbox"
                        checked={teacher.present}
                        onChange={() => toggleAttendance(teacher._id)} 
                      />
                    </td>
                    
                    <td>{teacher.name}</td>
                    <td>{teacher.subject}</td>
                    <td className="text-center">
                      <span
                        className={`badge ${teacher.present ? "bg-success" : "bg-danger"
                          } px-3 py-2`}
                      >
                        {teacher.present ? "Present" : "Absent"}
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
              onClick={()=> toast.success("Attendance has been saved!")}
            >
              Save Attendance
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeacherAttendance;
