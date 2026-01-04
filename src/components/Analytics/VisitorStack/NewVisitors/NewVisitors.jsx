import React from 'react';
import './NewVisitors.css';

const NewVisitors = () => {
  return (
    <div className="new-visitors-card-root">
      {/* Left Side: Content */}
      <div className="visitor-info">
        <h3 className="visitor-title">New Visitors</h3>
        <p className="visitor-sub">New <strong>48%</strong> more visitors this week.</p>
        
        <div className="visitor-stats">
          <span className="visitor-number">12,480</span>
          <span className="visitor-trend">▲ 28</span>
        </div>
      </div>

      {/* Right Side: Bar Chart */}
      <div className="bar-chart">
        <div className="bar" style={{ height: '30%' }}></div>
        <div className="bar" style={{ height: '50%' }}></div>
        <div className="bar" style={{ height: '80%' }}></div>
        <div className="bar" style={{ height: '60%' }}></div>
        <div className="bar active" style={{ height: '100%' }}></div>
        <div className="bar" style={{ height: '70%' }}></div>
        <div className="bar" style={{ height: '40%' }}></div>
      </div>
    </div>
  );
};

export default NewVisitors;