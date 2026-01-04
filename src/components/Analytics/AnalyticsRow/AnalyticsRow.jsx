import React from 'react';
import TransactionCard from '../TransactionCard/TransactionCard';
import VisitorStack from '../VisitorStack/VisitorStack';
import TrafficAnalysis from '../TrafficAnalysis/TrafficAnalysis';
import './AnalyticsRow.css';

const AnalyticsRow = () => {
  return (
    <div className="analytics-row-container">
      <div className="analytics-column col-left">
        <TransactionCard />
      </div>
      <div className="analytics-column col-middle">
        <VisitorStack />
      </div>
      <div className="analytics-column col-right">
        <TrafficAnalysis />
      </div>
    </div>
  );
};

export default AnalyticsRow;