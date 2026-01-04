import React from 'react';
import './TrafficAnalysis.css';

const TrafficAnalysis = () => {
  const trafficData = [
    { label: 'Direct', value: '86,471', percent: '15%', trend: 'down', color: '#28c76f' },
    { label: 'Organic Search', value: '57,484', percent: '85%', trend: 'up', color: '#7367f0' },
    { label: 'Referral', value: '2,534', percent: '48%', trend: 'up', color: '#ff9f43' },
    { label: 'Mail', value: '977', percent: '36%', trend: 'down', color: '#ea5455' },
  ];

  return (
    <div className="traffic-analysis-card">
      {/* Header */}
      <div className="traffic-header">
        <h3 className="traffic-title">Transactions</h3>
        <span className="menu-dots">⋮</span>
      </div>

      {/* Hero Section with Chart */}
      <div className="traffic-hero-section">
        <div className="hero-text">
          <h1 className="total-number">4,590</h1>
          <p className="total-label">Total Traffic</p>
        </div>
        <div className="hero-chart-container">
          <div className="chart-bar" style={{ height: '45%' }}></div>
          <div className="chart-bar" style={{ height: '30%' }}></div>
          <div className="chart-bar" style={{ height: '100%' }}></div>
          <div className="chart-bar" style={{ height: '70%' }}></div>
          <div className="chart-bar" style={{ height: '55%' }}></div>
          <div className="chart-bar" style={{ height: '85%' }}></div>
          <div className="chart-bar" style={{ height: '60%' }}></div>
        </div>
      </div>

      {/* List with separator lines */}
      <div className="traffic-list">
        {trafficData.map((item, index) => (
          <div key={index} className="traffic-item-row">
            <div className="item-left">
              <span className="status-dot" style={{ backgroundColor: item.color }}></span>
              <span className="item-label">{item.label}</span>
            </div>
            <div className="item-right">
              <span className="item-value">{item.value}</span>
              <span className="item-percent">{item.percent}</span>
              <span className={`item-arrow ${item.trend}`}>
                {item.trend === 'up' ? '▲' : '▼'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficAnalysis;