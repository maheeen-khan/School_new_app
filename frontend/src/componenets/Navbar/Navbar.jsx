import React from 'react'
import Logo2 from '../../assets/Logo.png'
import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import '../../index.css'
function Navbar({head}) {

  const navigate = useNavigate();

    const logout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout',
    }).then((result) => {
      if (result.isConfirmed) {
        
        Swal.fire('Logged out!', 'You have been successfully logged out.', 'success').then(() => {
          navigate('/login'); // Redirect to the login page
          localStorage.removeItem('token');
        });
      }
    });
  };
  return (
    <nav className="navbar navbar-expand-lg  " style={{ backgroundColor: "#38abb869" }}>
      <div className="container-fluid">
        
        <button
        className="btn btn-light w-10 m-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
        style={{boxShadow: "0 1px 3px rgba(61, 59, 95, 0.72)"}}
      >
        <i className="bi bi-list"></i>
      </button>

      <h3 className="me-auto mt-2">
        <img src={Logo2} alt="Logo" style={{ height: '40px', marginLeft: '10px' }} /> 
       
       <span className='ms-2 fs-4' style={{color:'darkblue', fontFamily:'monospace'}}>EduSphere</span> 
      </h3>

          <form className="d-flex mx-auto mx-md-0" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn submit" type="submit">Search</button>
          </form>
           {/* <Button type="primary" icon={<LogoutOutlined />} onClick={logout}> Logout</Button> */}
           <button className="btn btn-danger ms-2" onClick={logout}><LogoutOutlined /> Logout</button>
        </div>
      
    </nav>
  )
}

export default Navbar