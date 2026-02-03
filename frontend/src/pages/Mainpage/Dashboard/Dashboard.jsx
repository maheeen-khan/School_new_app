

import React from 'react';
import Cards from '../../../componenets/Cards/Cards';

import student from '../../../assets/students.png';
import teacher from '../../../assets/teacher.png';
import attenOverview from '../../../assets/atten.png';

import VerticalBarChart from '../../../componenets/Charts/VerticalBarChart';
import HorizontalBarChart from '../../../componenets/Charts/HorizontalBarChart';
import PieChart from '../../../componenets/Charts/PieChart';

import './Dashboard.css';
import AttendancePieChart from '../../../componenets/Charts/PieChart';

function Dashboard() {
  return (
    <div className="dash-container">
      
      <h1 className="main-title mt-4">
        <i className="fs-2 bi-house dash-icon pe-3"></i>
        Dashboard
      </h1>
      
        
          <div className="dash-cards d-flex 
                justify-content-center justify-content-md-start 
                flex-wrap text-center">
            <Cards heading="Attendance Overview" value="540" photo={attenOverview} colour="#38abb869" />
            <Cards heading="Total Students" value="500" photo={student} colour="rgba(219, 223, 98, 0.85)" />
            <Cards heading="Total Teachers" value="100" photo={teacher} colour="#38abb869" />
            <Cards heading="Earnings" value="$6000" photo={student} colour="rgba(219, 223, 98, 0.85)" />
          </div>

          <HorizontalBarChart/>
          <VerticalBarChart/>
          <AttendancePieChart/>
          

        </div>

     
    
  );
}

export default Dashboard;
