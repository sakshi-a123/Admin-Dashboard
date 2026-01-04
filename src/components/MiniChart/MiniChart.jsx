import React from "react";
import { BsThreeDotsVertical, BsArrowUpShort } from "react-icons/bs";
import "./MiniChart.css";

const MiniChart = () => {
  const chartData = [
    { year: 2015, segments: [{ h: 65, b: 0, c: 'purple' }] },
    { year: 2016, segments: [{ h: 45, b: 0, c: 'purple' }, { h: 35, b: 55, c: 'green' }] },
    { year: 2017, segments: [{ h: 55, b: 0, c: 'purple' }, { h: 25, b: 65, c: 'green' }] },
    { year: 2018, segments: [{ h: 40, b: 0, c: 'purple' }, { h: 35, b: 50, c: 'green' }, { h: 35, b: 95, c: 'grey' }] },
    { year: 2019, segments: [{ h: 68, b: 0, c: 'purple' }] },
    { year: 2020, segments: [{ h: 42, b: 0, c: 'purple' }, { h: 28, b: 52, c: 'green' }, { h: 25, b: 90, c: 'grey' }] },
    { year: 2021, segments: [{ h: 80, b: 0, c: 'purple' }, { h: 22, b: 90, c: 'green' }, { h: 30, b: 122, c: 'grey' }] },
  ];

  return (
    <div className="dashboard-row-container">
      {/* SECTION 1: TOTAL PROFIT CARD */}
      <div className="total-profit-card">
        <div className="graph-container">
          <h3 className="chart-title">Total Profit</h3>
          <div className="canvas-area">
            {/* Background Grid */}
            <div className="grid-layer">
              {[60, 50, 40, 30, 20, 10, 0].map((label) => (
                <div key={label} className="grid-row">
                  <span className="y-axis-label">{label}k</span>
                  <div className="dashed-line"></div>
                </div>
              ))}
            </div>

            {/* Bars and Years */}
            <div className="bars-and-labels">
              {chartData.map((group, i) => (
                <div key={i} className="bar-column">
                  <div className="bar-track">
                    {group.segments.map((seg, j) => (
                      <div 
                        key={j} 
                        className={`pill-segment ${seg.c}`} 
                        style={{ height: `${seg.h}px`, bottom: `${seg.b}px` }} 
                      />
                    ))}
                  </div>
                  <span className="x-axis-year">{group.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profit Report Sidebar */}
        <div className="report-container">
          <div className="report-header">
            <div className="header-text">
              <h2 className="total-val">$482.85k</h2>
              <p className="sub-val">Last month balance $234.40k</p>
            </div>
            <BsThreeDotsVertical className="top-right-dots" />
          </div>
          <div className="stats-list">
            <div className="stat-item">
              <div className="icon-box green-tint">📈</div>
              <div className="stat-info"><b>$48,568.20</b><p>Total Profit</p></div>
            </div>
            <div className="stat-item">
              <div className="icon-box purple-tint">👤</div>
              <div className="stat-info"><b>$38,453.25</b><p>Total Income</p></div>
            </div>
            <div className="stat-item">
              <div className="icon-box grey-tint">💻</div>
              <div className="stat-info"><b>$2,453.45</b><p>Total Expense</p></div>
            </div>
          </div>
          <button className="report-btn">VIEW REPORT</button>
        </div>
      </div>

      {/* SECTION 2: SALES GRID */}
      <div className="sales-grid-container">
        {/* Total Sales Donut Card */}
        <div className="sales-donut-card card-style">
          <div className="card-header relative-header">
            <h3 className="chart-title">Total Sales</h3>
            <BsThreeDotsVertical className="top-right-dots-sales" />
          </div>
          <div className="sales-content-body">
            <div className="sales-metrics">
              <p className="small-label">Calculated in last 7 days</p>
              <h2 className="sales-amount">$25,980</h2>
              <span className="trend-up"><BsArrowUpShort /> 15.6%</span>
            </div>
            <div className="donut-box">
              <svg viewBox="0 0 36 36" className="donut-svg">
                <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#f0f2f4" strokeWidth="3" />
                <circle className="seg-p" cx="18" cy="18" r="15.9" fill="transparent" stroke="#7367f0" strokeWidth="3" strokeDasharray="30 70" strokeDashoffset="25" />
                <circle className="seg-y" cx="18" cy="18" r="15.9" fill="transparent" stroke="#ff9f43" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-5" />
                <circle className="seg-b" cx="18" cy="18" r="15.9" fill="transparent" stroke="#00cfe8" strokeWidth="3" strokeDasharray="15 85" strokeDashoffset="-25" />
              </svg>
              <div className="donut-center-text">
                <strong>28%</strong>
                <span>1 Quater</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Stats Cards */}
        <div className="mini-cards-row">
          <div className="mini-card card-style">
            <h3 className="mini-val">$35.4k</h3>
            <div className="mini-graph">
              <svg viewBox="0 0 100 40">
                <path d="M0,30 Q25,5 50,25 T100,15" fill="none" stroke="#7367f0" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <p className="mini-title">Total Revenue</p>
          </div>
          <div className="mini-card card-style">
            <h3 className="mini-val">135k</h3>
            <div className="gauge-box">
              <svg viewBox="0 0 100 60">
                <path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="#f0f2f4" strokeWidth="8" strokeLinecap="round" />
                <path d="M10,50 A40,40 0 0,1 75,18" fill="none" stroke="#00cfe8" strokeWidth="8" strokeLinecap="round" />
              </svg>
              <span className="gauge-perc">78%</span>
            </div>
            <p className="mini-title">Total Sales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniChart;