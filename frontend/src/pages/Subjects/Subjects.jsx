import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { ArrowLeft } from "react-bootstrap-icons";

const Subjects = () => {
  const { classId } = useParams();
  const navigate = useNavigate();

  // Sample subjects for each class (you can later fetch from backend)
  const subjects = [
    { id: 1, name: "Mathematics", teacher: "Mr. Ahmed Khan", color: "#2E8B57" },
    { id: 2, name: "Science", teacher: "Ms. Sara Ali", color: "#DAA520" },
    { id: 3, name: "English", teacher: "Ms. Fatima Shah", color: "#20B2AA" },
    { id: 4, name: "Urdu", teacher: "Mr. Bilal Hussain", color: "#9ACD32" },
    { id: 5, name: "Islamic Studies", teacher: "Mr. Usman Ghani", color: "#3CB371" },
    { id: 6, name: "Computer", teacher: "Ms. Ayesha Noor", color: "#228B22" },
    { id: 7, name: "Pakistan Studies", teacher: "Mr. Kamran Malik", color: "#32CD32" },
    { id: 8, name: "Drawing", teacher: "Ms. Hina Tariq", color: "#66CDAA" },
  ];

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f8fff9", minHeight: "100vh" }}>
      {/* Back Button + Title */}
      <div className="d-flex align-items-center mb-4">
        <button
          onClick={() => navigate("/Classes")}
          className="btn btn-outline-success me-3 d-flex align-items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        <h2 className="text-success fw-bold mb-0">
          Class {classId} - Subjects
        </h2>
      </div>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {subjects.map((subject) => (
          <Col key={subject.id}>
            <Card
              className="border-0 shadow-sm h-100"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() => navigate(`/subject-detail/${classId}/${subject.id}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
              }}
            >
              {/* Subject Color Header */}
              <div
                style={{
                  backgroundColor: subject.color,
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3090/3090139.png"
                  alt="book"
                  style={{ width: "60px", filter: "brightness(0) invert(1)" }}
                />
              </div>

              <Card.Body className="text-center py-4">
                <Card.Title className="fw-bold fs-5 text-dark">
                  {subject.name}
                </Card.Title>
                <p className="text-muted small mb-2">{subject.teacher}</p>
                <small className="text-success fw-semibold">
                  View Details
                </small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Subjects;