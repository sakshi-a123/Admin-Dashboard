// src/components/Sidebar/Sidebar.jsx
import React, { useState } from "react";
import "./Sidebar.css";

import {
  FaTachometerAlt,
  FaUser,
  FaChartBar,
  FaShoppingCart,
  FaEnvelope,
  FaComments,
  FaCalendarAlt,
  FaFileInvoice,
  FaUsers,
  FaLock,
  FaFile,
  FaRegWindowMaximize,
  FaFont,
  FaIcons,
  FaLayerGroup,
  FaClipboardList,
  FaChartPie,
  FaEllipsisH,
  FaChevronRight,
} from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState("Analytics");

  const menuSections = [
    {
      title: "MAIN",
      items: [
        { name: "Dashboard", icon: <FaTachometerAlt /> },
        { name: "CRM", icon: <FaUser /> },
        { name: "Analytics", icon: <FaChartBar /> },
        { name: "eCommerce", icon: <FaShoppingCart /> },
      ],
    },
    {
      title: "APPS & PAGES",
      items: [
        { name: "Email", icon: <FaEnvelope /> },
        { name: "Chat", icon: <FaComments /> },
        { name: "Calendar", icon: <FaCalendarAlt /> },
        { name: "Invoice", icon: <FaFileInvoice />, hasSubmenu: true },
        { name: "User", icon: <FaUsers />, hasSubmenu: true },
        {
          name: "Roles & Permissions",
          icon: <FaLock />,
          hasSubmenu: true,
        },
        { name: "Pages", icon: <FaFile />, hasSubmenu: true },
        { name: "Dialog Examples", icon: <FaRegWindowMaximize /> },
      ],
    },
    {
      title: "USER INTERFACE",
      items: [
        { name: "Typography", icon: <FaFont /> },
        { name: "Icons", icon: <FaIcons /> },
        { name: "Cards", icon: <FaRegWindowMaximize />, hasSubmenu: true },
        { name: "Components", icon: <FaLayerGroup />, hasSubmenu: true },
      ],
    },
    {
      title: "FORMS & TABLES",
      items: [
        {
          name: "Form Elements",
          icon: <FaClipboardList />,
          hasSubmenu: true,
        },
        { name: "Form Layout", icon: <FaClipboardList /> },
        { name: "Form Validation", icon: <FaClipboardList /> },
        { name: "Form Wizard", icon: <FaClipboardList /> },
        { name: "Table", icon: <FaRegWindowMaximize /> },
        { name: "Mui DataGrid", icon: <FaRegWindowMaximize /> },
      ],
    },
    {
      title: "CHARTS & MISC",
      items: [
        { name: "Charts", icon: <FaChartPie />, hasSubmenu: true },
        { name: "Others", icon: <FaEllipsisH />, hasSubmenu: true },
      ],
    },
  ];

  return (
    <aside className="sidebar">
      <h1 className="sidebar-logo">MATERIO</h1>

      {menuSections.map((section) => (
        <div key={section.title} className="menu-section">
          <div className="section-title">{section.title}</div>

          <ul className="sidebar-menu">
            {section.items.map((item) => (
              <li
                key={item.name}
                className={`menu-item ${
                  active === item.name ? "active" : ""
                }`}
                onClick={() => setActive(item.name)}
              >
                <span className="icon">{item.icon}</span>
                <span className="text">{item.name}</span>

                {item.hasSubmenu && (
                  <span className="arrow">
                    <FaChevronRight />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
