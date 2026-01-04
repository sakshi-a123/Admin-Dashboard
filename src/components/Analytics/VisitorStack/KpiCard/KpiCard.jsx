import React from 'react';
import './KpiCard.css';

const KpiCard = ({ title, value, trend, subtitle, color, icon }) => {
  return (
    <div className="kpi-card-root">
      <div className="kpi-header">
        {/* Circle Icon */}
        <div className={`kpi-icon-circle ${color}`}>
          {icon}
        </div>
        {/* Menu Dots in top-right */}
        <span className="kpi-dots">⋮</span>
      </div>
      
      <div className="kpi-content">
        <p className="kpi-label">{title}</p>
        <div className="kpi-stat-line">
          <h2 className="kpi-val">{value}</h2>
          <span className={`kpi-trend ${trend.includes('+') ? 'up' : 'down'}`}>
            {trend}
          </span>
        </div>
        <p className="kpi-sub">{subtitle}</p>
      </div>
    </div>
  );
};

export default KpiCard;