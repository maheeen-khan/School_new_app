import React from 'react';

function Cards({ heading, value, photo, colour , onClick}) {
  return (
    <div 
      className="card"
      onClick={onClick}
      style={{
        width: "100%",
        maxWidth: "270px",
        backgroundColor: colour,
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "between",
        textAlign: "left",
        color: 'white',
      }}
    >
      
      {/* Image controlled size */}
      <img
        src={photo}
        alt={heading}
        className='ms-2'
        style={{
          width: "65px",
          height: "90px",
          objectFit: "contain",
          marginBottom: "10px"
        }}
      />

      <div className="card-body" style={{ padding: 0 }}>
        <h6 className="card-title mb-3" style={{ marginBottom: "5px" }}>
          {heading}
        </h6>

        <p className="card-text d-flex align-items-center justify-content-between" style={{ fontSize: "20px", fontWeight: "bold" }}>
          {value} 
          <a href="#" style={{textDecoration:'none', color:'white'}}>
           <span className='fw-normal' style={{fontSize:'13px'}}>View All ▼</span></a>
        </p>

      </div>

    </div>
  );
}

export default Cards;
