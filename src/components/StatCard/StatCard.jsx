import React from 'react';
import { FaChartLine, FaDollarSign } from 'react-icons/fa';
import './StatCard.css';

const StatCard = () => {
  return (
    <div className="stat-card-wrapper">
      {/* 1. Rectangle: The Banner (Wider and shorter) */}
      <div className="card-base congrats-rectangle">
        <h2>Congratulations John! 🎉</h2>
        <p style={{color: '#6c757d', fontSize: '13px', margin: '5px 0'}}>
          You have done 72% more sales today.
        </p>
        <span className="congrats-price">$489k</span>
        <button className="btn-purple">VIEW SALES</button>
      </div>

      {/* 2. Square 1: Transactions */}
      <div className="card-base stat-square">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className="icon-box bg-cyan"><FaChartLine /></div>
          <span style={{color: '#a8aaae', fontSize: '14px'}}>⋮</span>
        </div>
        <div>
          <span style={{fontSize: '13px', color: '#6c757d'}}>Transactions</span>
          <div style={{display: 'flex', alignItems: 'baseline', gap: '5px'}}>
            <span className="main-val">1.2k</span>
            <span className="trend-percent">+38%</span>
          </div>
          <small style={{color: '#b9b9c3', fontSize: '10px'}}>Daily Transactions</small>
        </div>
      </div>

      {/* 3. Square 2: Revenue */}
      <div className="card-base stat-square">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className="icon-box bg-green"><FaDollarSign /></div>
          <span style={{color: '#a8aaae', fontSize: '14px'}}>⋮</span>
        </div>
        <div>
          <span style={{fontSize: '13px', color: '#6c757d'}}>Revenue</span>
          <div style={{display: 'flex', alignItems: 'baseline', gap: '5px'}}>
            <span className="main-val">$95.2k</span>
            <span className="trend-percent">+12%</span>
          </div>
          <small style={{color: '#b9b9c3', fontSize: '10px'}}>Revenue Increase</small>
        </div>
      </div>
    </div>
  );
};

export default StatCard;