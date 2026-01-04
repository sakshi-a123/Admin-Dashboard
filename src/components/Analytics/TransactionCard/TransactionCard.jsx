import React from 'react';
import './TransactionCard.css';

const TransactionCard = () => {
  const transactions = [
    { id: 1, name: 'Paypal', desc: 'Received Money', amount: '+$24,820', trend: 'up', icon: 'P', color: 'paypal' },
    { id: 2, name: 'Credit Card', desc: 'Digital Ocean', amount: '-$1,250', trend: 'down', icon: '💳', color: 'credit' },
    { id: 3, name: 'Mastercard', desc: 'Netflix', amount: '-$99', trend: 'down', icon: 'M', color: 'master' },
    { id: 4, name: 'Wallet', desc: 'Mac\'D', amount: '-$82', trend: 'down', icon: 'W', color: 'wallet' }
  ];

  return (
    <div className="card-root transaction-card">
      <div className="card-header">
        <h3 className="card-title">Transactions</h3>
        {/* Corrected position for three dots */}
        <button className="menu-dots-btn">⋮</button>
      </div>
      
      <div className="transaction-list">
        {transactions.map(item => (
          <div key={item.id} className="transaction-item">
            {/* Dynamic icon box with specific background color */}
            <div className={`item-icon-box ${item.color}`}>
              {item.icon}
            </div>
            
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-desc">{item.desc}</span>
            </div>
            
            <div className={`item-amount-wrapper`}>
              <span className={`item-amount ${item.trend}`}>{item.amount}</span>
              <span className={`trend-icon ${item.trend}`}>
                {item.trend === 'up' ? '▲' : '▼'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionCard;