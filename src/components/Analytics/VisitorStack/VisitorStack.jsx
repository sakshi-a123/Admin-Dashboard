import React from 'react';
import './VisitorStack.css';
import KpiCard from './KpiCard/KpiCard';
import NewVisitors from './NewVisitors/NewVisitors';

const VisitorStack = () => {
  return (
    <div className="visitor-stack-container">
      {/* Row 1: Two separate side-by-side cards */}
      <div className="kpi-top-row">
        <KpiCard 
          title="Logistics" 
          value="44.10k" 
          trend="+42%" 
          subtitle="Revenue Increase" 
          color="red"
          icon="★"
        />
        <KpiCard 
          title="Reports" 
          value="268" 
          trend="-28%" 
          subtitle="System Bugs" 
          color="orange"
          icon="✔"
        />
      </div>

      {/* Row 2: The larger New Visitors card */}
      <div className="visitor-bottom-row">
        <NewVisitors />
      </div>
    </div>
  );
};

export default VisitorStack;