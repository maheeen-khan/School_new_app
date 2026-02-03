import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo2 from '../../assets/Logo.png';
import '../../index.css';
function Sidebar() {
  return (
    <>
      {/* Toggle button - visible only on small screens */}
      

      {/* Offcanvas sidebar */}
      <div
        className="offcanvas offcanvas-start d-md-flex d-lg-flex flex-column flex-shrink-0 p-3 "
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
        style={{ width: '250px' ,color:'black' }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="d-flex align-items-center align-content-center justify-content-center mb-md-0 me-md-auto text-decoration-none"
        >
          <img src={Logo2} alt="Logo" width={50} className="me-2" />
          <span className="fs-4 mt-3 me-3 main-title">EduSphere</span>

            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </Link>
        <hr />

        {/* Menu items */}
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-dark">
              <i className="bi bi-house me-2"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Students" className="nav-link text-dark">
              <i className="bi bi-person-arms-up me-2"></i> Students
            </Link>
          </li>
          <li>
            <Link to="/Teachers" className="nav-link text-dark">
              <i className="bi bi-person-circle me-2"></i> Teachers
            </Link>
          </li>
          <li>
            <a
              className="nav-link text-dark"
              data-bs-toggle="collapse"
              href="#attendanceSubmenu"
              role="button"
              aria-expanded="false"
              aria-controls="attendanceSubmenu"
            >
              <i className="bi bi-calendar-check me-2"></i> Attendance
            </a>
            <div className="collapse ps-3" id="attendanceSubmenu">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/Students_Attendance" className="nav-link text-dark">
                    Students
                  </Link>
                </li>
                <li>
                  <Link to="/Teachers_Attendance" className="nav-link text-dark">
                    Teachers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/Fee" className="nav-link text-dark">
              <i className="bi bi-receipt me-2"></i> Fee
            </Link>
          </li>
          <li>
            <Link to="/Certificate" className="nav-link text-dark">
              <i className="bi bi-list-stars me-2"></i> Certificate
            </Link>
          </li>
           <li>
            <Link to="/Classes" className="nav-link text-dark">
              <i className="bi bi-list-stars me-2"></i> Classes
            </Link>
          </li>
        </ul>

        <hr />
      </div>
    </>
  );
}

export default Sidebar;