import React from 'react';
import './Meeting.css';

const meetingData = [
  { id: 1, title: 'Call with Woods', time: '21 Jul | 08:20-10:30', category: 'Business', img: 'https://i.pravatar.cc/150?u=woods' },
  { id: 2, title: 'Call with hilda', time: '21 Jul | 08:20-10:30', category: 'Meditation', img: 'https://i.pravatar.cc/150?u=hilda' },
  { id: 3, title: 'Conference call', time: '21 Jul | 08:20-10:30', category: 'Dinner', img: 'https://i.pravatar.cc/150?u=conf' },
  { id: 4, title: 'Meeting with Mark', time: '21 Jul | 08:20-10:30', category: 'Meetup', img: 'https://i.pravatar.cc/150?u=mark' },
  { id: 5, title: 'Meeting in Oakland', time: '21 Jul | 08:20-10:30', category: 'Dinner', img: 'https://i.pravatar.cc/150?u=oakland' },
  { id: 6, title: 'Meeting with Carl', time: '21 Jul | 08:20-10:30', category: 'Business', img: 'https://i.pravatar.cc/150?u=carl' },
];

const Meeting = () => {
  return (
    <div className="meeting-card">
      <div className="meeting-header">
        <h2>Meeting Schedule</h2>
        <div className="more-options">⋮</div>
      </div>

      <div className="meeting-list">
        {meetingData.map((item) => (
          <div key={item.id} className="meeting-item">
            <div className="meeting-left">
              <img src={item.img} alt={item.title} className="meeting-avatar" />
              <div className="meeting-details">
                <span className="meeting-title">{item.title}</span>
                <div className="meeting-time">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {item.time}
                </div>
              </div>
            </div>
            <span className={`badge badge-${item.category.toLowerCase()}`}>
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meeting;