// src/pages/SubjectDetail/SubjectDetail.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SubjectDetail = () => {
    const { classId, subjectId } = useParams();
    const navigate = useNavigate();

    // Mock data – replace with API later
    const subjectInfo = {
        1: { name: "Mathematics", teacher: "Mr. Ahmed Khan", totalClasses: 120, attended: 108 },
        2: { name: "Science", teacher: "Ms. Sara Ali", totalClasses: 115, attended: 110 },
        3: { name: "English", teacher: "Ms. Fatima Shah", totalClasses: 118, attended: 115 },
        4: { name: "Urdu", teacher: "Mr. Bilal Hussain", totalClasses: 110, attended: 105 },
        5: { name: "Islamic Studies", teacher: "Mr. Usman Ghani", totalClasses: 100, attended: 98 },
        6: { name: "Computer", teacher: "Ms. Ayesha Noor", totalClasses: 95, attended: 92 },
        7: { name: "Pakistan Studies", teacher: "Mr. Kamran Malik", totalClasses: 105, attended: 102 },
        8: { name: "Drawing", teacher: "Ms. Hina Tariq", totalClasses: 90, attended: 88 },
    };

    const subject = subjectInfo[subjectId] || { name: "Subject", teacher: "Teacher", totalClasses: 0, attended: 0 };
    const attendancePercent = ((subject.attended / subject.totalClasses) * 100).toFixed(1);

    return (
        <div style={{ padding: "2rem", backgroundColor: "#f8fff9", minHeight: "100vh" }}>
            {/* Back Button + Header */}
            <div className="d-flex align-items-center mb-4">
                <button
                    onClick={() => navigate(-1)} // Goes back to Subjects page
                    className="btn btn-outline-success me-3 fw-semibold"
                    style={{ borderRadius: "12px" }}
                >
                    ← Back
                </button>
                <h2 className="text-success fw-bold mb-0">
                    {subject.name} - Class {classId}
                </h2>
            </div>

            {/* Teacher Card */}
            <Row className="mb-4">
                <Col md={6} lg={4}>
                    <Card className="border-0 shadow-sm" style={{ borderRadius: "16px" }}>
                        <Card.Body className="text-center py-5">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3090/3090139.png"
                                alt="subject"
                                style={{ width: "80px", marginBottom: "1rem", filter: "hue-rotate(90deg)" }}
                            />
                            <h4 className="fw-bold">{subject.name}</h4>
                            <p className="text-success fs-5">{subject.teacher}</p>
                            <span className="badge bg-success fs-6 px-3 py-2">Subject Teacher</span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Stats Cards */}
            <Row className="g-4">
                {/* Attendance Card */}
                <Col md={6} lg={3}>
                    <Card
                        className="border-0 text-white shadow-sm h-100"
                        style={{
                            background: "linear-gradient(135deg, #2E8B57, #3CB371)",
                            borderRadius: "16px",
                        }}
                    >
                        <Card.Body className="text-center py-4">
                            <h5 className="fw-bold">Attendance</h5>
                            <h2 className="display-5 fw-bold mb-0">{attendancePercent}%</h2>
                            <small>{subject.attended} / {subject.totalClasses} Classes</small>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Total Classes */}
                <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm h-100" style={{ borderRadius: "16px" }}>
                        <Card.Body className="text-center py-4">
                            <h5 className="text-muted">Total Classes</h5>
                            <h2 className="fw-bold text-success">{subject.totalClasses}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Syllabus Progress */}
                <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm h-100" style={{ borderRadius: "16px" }}>
                        <Card.Body className="text-center py-4">
                            <h5 className="text-muted">Syllabus Completed</h5>
                            <h2 className="fw-bold text-warning">78%</h2>
                            <div className="mt-3">
                                <div className="progress" style={{ height: "10px" }}>
                                    <div
                                        className="progress-bar bg-warning"
                                        style={{ width: "78%" }}
                                    ></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Assignments */}
                <Col md={6} lg={3}>
                    <Card
                        className="border-0 text-white shadow-sm h-100"
                        style={{
                            background: "linear-gradient(135deg, #DAA520, #FFB84D)",
                            borderRadius: "16px",
                        }}
                    >
                        <Card.Body className="text-center py-4">
                            <h5 className="fw-bold">Assignments</h5>
                            <h2 className="display-6 fw-bold">12</h2>
                            <small>6 Submitted | 6 Pending</small>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Quick Actions */}
            <div className="mt-5 text-center">
                <button className="btn btn-success btn-lg me-3 px-4" style={{ borderRadius: "12px" }}>
                    View Syllabus
                </button>
                <button
                    onClick={() => navigate("/attendance")}
                    className="btn btn-outline-success btn-lg px-5 fw-bold"
                    style={{ borderRadius: "12px" }}
                >
                    Mark Attendance
                </button>
            </div>
        </div>
    );
};

export default SubjectDetail;