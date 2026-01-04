import React from "react";
import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StatCard from "./components/StatCard/StatCard"; 
import MiniChart from "./components/MiniChart/MiniChart"; 
import AnalyticsRow from "./components/Analytics/AnalyticsRow/AnalyticsRow";
import TransactionList from "./components/TransactionList/TransactionList";
import Meeting from "./components/Meeting/Meeting";

function App() {
  return (
    <div className="app">
      <div className="layout">
        {/* Left Side Navigation */}
        <Sidebar />

        <div className="main-wrapper">
          {/* Top Sticky Header */}
          <Header />

          <main className="main-content">
           
            <StatCard />
            <MiniChart />
            <AnalyticsRow />
            <div className="content-grid">
              <div className="transaction-section">
                <TransactionList />
              </div>
              <div className="meeting-section">
                <Meeting />
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;