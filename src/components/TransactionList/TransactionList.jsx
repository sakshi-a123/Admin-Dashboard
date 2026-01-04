import React from 'react';
import './TransactionList.css';

const transactions = [
  { id: '#4910', name: 'Jordan Stevenson', email: 'Layne_Kuvalis@gmail.com', total: '$3428', balance: 'Paid', status: 'completed', img: 'https://i.pravatar.cc/150?u=4910' },
  { id: '#4909', name: 'Richard Payne', email: 'Layne_Kuvalis@gmail.com', total: '$2872', balance: '$883', status: 'completed', img: 'https://i.pravatar.cc/150?u=4909' },
  { id: '#4908', name: 'Jennifer Summers', email: 'Layne_Kuvalis@gmail.com', total: '$4077', balance: 'Paid', status: 'download', img: 'https://i.pravatar.cc/150?u=4908' },
  { id: '#4907', name: 'Mr. Justin Richardson', email: 'Layne_Kuvalis@gmail.com', total: '$2060', balance: '$361', status: 'sent', img: 'https://i.pravatar.cc/150?u=4907' },
  { id: '#4906', name: 'Nicholas Tanner', email: 'Layne_Kuvalis@gmail.com', total: '$3128', balance: 'Paid', status: 'pending', img: 'https://i.pravatar.cc/150?u=4906' },
  { id: '#4905', name: 'Crystal Mays', email: 'Layne_Kuvalis@gmail.com', total: '$2032', balance: 'Paid', status: 'sent', img: 'https://i.pravatar.cc/150?u=4905' },
  { id: '#4904', name: 'Mary Garcia', email: 'Layne_Kuvalis@gmail.com', total: '$2230', balance: '-$253', status: 'completed', img: 'https://i.pravatar.cc/150?u=4904' },
];

const StatusIcon = ({ type }) => {
  const icons = {
    completed: { char: '✓', class: 'bg-completed' },
    download: { char: '↓', class: 'bg-download' },
    sent: { char: '✉', class: 'bg-sent' },
    pending: { char: '◒', class: 'bg-pending' }
  };
  const icon = icons[type] || icons.completed;
  return <div className={`status-circle ${icon.class}`}>{icon.char}</div>;
};

const TransactionList = () => {
  return (
    <div className="transaction-card">
      <table className="transaction-table">
        <thead>
          <tr>
            <th style={{ width: '60px' }}># ID</th>
            <th style={{ width: '50px', textAlign: 'center' }}>↑</th>
            <th className="header-client">Client</th>
            <th style={{ width: '80px' }}>Total</th>
            <th style={{ width: '90px' }}>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, index) => (
            <tr key={index}>
              <td className="id-cell">{t.id}</td>
              <td>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <StatusIcon type={t.status} />
                </div>
              </td>
              <td>
                <div className="client-info">
                  <img src={t.img} alt={t.name} className="avatar-img" />
                  <div className="client-details">
                    <span className="name">{t.name}</span>
                    <span className="email">{t.email}</span>
                  </div>
                </div>
              </td>
              <td style={{ color: '#4b4b4b', fontSize: '13px' }}>{t.total}</td>
              <td>
                {t.balance === 'Paid' ? (
                  <span className="paid-badge">Paid</span>
                ) : (
                  <span style={{ fontSize: '13px', color: t.balance.startsWith('-') ? '#ea5455' : '#4b4b4b' }}>
                    {t.balance}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;