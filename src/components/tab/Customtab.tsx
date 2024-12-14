"use client";
import React, { ReactElement, useState } from "react";

interface TabPanelProps {
  title: string;
  children: React.ReactNode;
}
interface TabProps {
  children: ReactElement<TabPanelProps>[];
}

export const TabPanel: React.FC<TabPanelProps> = ({ children }) => (
  <div>{children}</div>
);

export const Tab: React.FC<TabProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tab">
      <div className="tab-actions">
        {children.map((child, i) => (
          <div
            className={`tab-actions-btn ${activeTab === i ? "active" : ""}`}
            key={i}
            onClick={() => setActiveTab(i)}
          >
            {child.props.title}
          </div>
        ))}
        <div
          style={{
            width: `${40 / children.length}%`,
            left: `${(56.5 / children.length) * activeTab + 23.5}%`,
          }}
          className="tab-actions-line"
        ></div>
      </div>

      <div className="tab-content">{children[activeTab]}</div>
    </div>
  );
};
