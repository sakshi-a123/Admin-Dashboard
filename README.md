# Admin Dashboard UI (Figma → React)

## Overview

This project is a pixel-perfect React implementation of selected components from a provided Figma dashboard design.



- Convert Figma designs into clean, reusable React components  
- Maintain layout accuracy, spacing, typography, and visual hierarchy  
- Structure components professionally  
- Write readable, maintainable frontend code  

---

## 🎯 Assignment Scope (As Required)

### Mandatory Components
- ✅ Header (Top Navigation)
- ✅ Footer

### Additional Components (Selected from Figma)
- ✅ Sidebar  
- ✅ Stat Cards (Top Metrics Row)  
- ✅ Analytics Section  
- ✅ Transactions Table  
- ✅ Meeting Schedule  

> More than 3 additional components were implemented to better reflect the original design.

---

## 🧩 Component Mapping from Figma

| Figma Section                  | React Component     |
|--------------------------------|---------------------|
| Top Metrics Row                | StatCard            |
| Revenue / Orders Chart         | MiniChart           |
| Analytics Section (3rd Row)    | Analytics           |
| Transactions Table             | TransactionList     |
| Meeting Schedule               | MeetingSchedule     |
| Sidebar Navigation             | Sidebar             |
| Header Navigation              | Header              |
| Footer                         | Footer              |

---

## 📁 Project Structure

src/
│
├── components/
│ ├── Header/
│ ├── Footer/
│ ├── Sidebar/
│ ├── StatCard/
│ ├── MiniChart/
│ ├── TransactionList/
│ ├── MeetingSchedule/
│ └── Analytics/
│ ├── AnalyticsRow/
│ │ ├── AnalyticsRow.jsx
│ │ └── AnalyticsRow.css
│ │
│ ├── TransactionCard/
│ │ ├── TransactionCard.jsx
│ │ └── TransactionCard.css
│ │
│ ├── VisitorStack/
│ │ ├── VisitorStack.jsx
│ │ ├── VisitorStack.css
│ │ │
│ │ ├── KpiCard/
│ │ │ ├── KpiCard.jsx
│ │ │ └── KpiCard.css
│ │ │
│ │ └── NewVisitors/
│ │ ├── NewVisitors.jsx
│ │ └── NewVisitors.css
│ │
│ └── TrafficAnalysis/
│ ├── TrafficAnalysis.jsx
│ └── TrafficAnalysis.css
│
├── App.jsx
├── index.css
└── main.jsx


---

## 🧠 Design & Implementation Decisions

### Figma as Single Source of Truth
- All spacing, typography, colors, and layout were taken directly from Figma
- No UI libraries or dashboard templates were used

### Component Reusability
- Each UI section is broken into logical, reusable components
- Analytics section is further modularized to maintain clarity

### Row-based Components
- Transaction table rows are treated as a single row unit, ensuring:
  - Correct hover behavior
  - Accurate spacing
  - Pixel-perfect alignment

### Styling
- Plain CSS used for clarity and control
- Consistent spacing and color tokens across components

---

## 🛠 Tech Stack
- React (Vite)
- JavaScript (ES6+)
- CSS
- react-icons (icons only, no UI framework)

> No ready-made dashboard templates were used.

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/sakshi-a123/admin-dashboard-ui.git
cd admin-dashboard-ui
Install dependencies
npm install

3️⃣ Run the development server
npm run dev

The application will be available at:
http://localhost:5173
