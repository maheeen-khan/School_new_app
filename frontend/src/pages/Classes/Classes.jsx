import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Classes = () => {
  const navigate = useNavigate();

  const classList = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Class ${i + 1}`,
    students: 45 + i * 2,
  }));

  const colors = [
    "#2E8B57", "#DAA520", "#20B2AA", "#9ACD32",
    "#3CB371", "#8FBC8F", "#228B22", "#32CD32",
    "#66CDAA", "#228B22"
  ];

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f8fff9", minHeight: "100vh" }}>
      <h2 className="mb-4 text-success fw-bold">
        Classes
      </h2>

      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {classList.map((cls, index) => (
          <Col key={cls.id}>
            <Card
              className="border-0 shadow-sm"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() => navigate(`/subjects/${cls.id}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
              }}
            >
              {/* Colored Header with Icon */}
              <div
                style={{
                  backgroundColor: colors[index],
                  height: "110px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3426/3426653.png"
                  alt="class"
                  style={{ width: "65px", filter: "brightness(0) invert(1)" }}
                />
              </div>

              {/* Card Body */}
              <Card.Body className="text-center py-4">
                <Card.Title className="fw-bold fs-4 mb-2">{cls.name}</Card.Title>
                <p className="text-muted mb-2">{cls.students} Students</p>
                <small className="text-success fw-semibold">
                  View Subjects →
                </small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Classes;