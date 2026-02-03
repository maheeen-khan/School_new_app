import React, { useState, useEffect, useRef } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Girls", value: 250 },
  { name: "Boys", value: 300 }
];

const COLORS = ["#ff6b81", "#1e90ff"];

function AttendancePieChart() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 const outerRadius = containerWidth < 576
  ? containerWidth * 0.25      // mobile: scale with width
  : Math.min(containerWidth * 0.15, 80); // desktop: smaller radius

const chartHeight = containerWidth < 576
  ? 220                        // mobile height
  : Math.min(containerWidth * 0.35, 180); // desktop height


  const fontSize = containerWidth < 576 ? 10 : 12;
  const selectWidth = containerWidth < 576 ? "120px" : "150px";

  return (
    <section className="py-3">
      <div className="card widget-card border-light shadow-sm">
        <div className="card-body" style={{ padding: containerWidth < 576 ? "10px" : "16px" }} ref={containerRef}>

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
            <h5 className="card-title mb-2 mb-sm-0" style={{ fontSize: fontSize + 2 }}>
              Attendance Overview
            </h5>

            {/* Select instead of button */}
            <select
              className="form-select text-secondary border-light-subtle mb-2 mb-sm-0"
              style={{ width: selectWidth, fontSize }}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>

          {/* Chart */}
          <div style={{ width: "100%", height: chartHeight }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={outerRadius}
                  label={{ fontSize }}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ flexWrap: "wrap", fontSize }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AttendancePieChart;
