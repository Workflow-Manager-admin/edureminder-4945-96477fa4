import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  // For highlighting which section is "active"
  const [activeSection, setActiveSection] = useState('all');

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <span className="site-title">EduReminder</span>
      </header>
      <div className="layout">
        {/* Sidebar Navigation */}
        <nav className="sidebar" aria-label="Main Navigation">
          <button
            className={`nav-link${activeSection === 'all' ? ' active' : ''}`}
            onClick={() => setActiveSection('all')}
            tabIndex={0}
          >
            All Reminders
          </button>
          <button
            className={`nav-link${activeSection === 'create' ? ' active' : ''}`}
            onClick={() => setActiveSection('create')}
            tabIndex={0}
          >
            Create Reminder
          </button>
        </nav>
        {/* Main content area */}
        <main className="main-content">
          <h1 style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: 0 }}>
            {activeSection === 'all' ? 'Your Reminders' : 'Create New Reminder'}
          </h1>
          {/* Placeholder for reminders list or creation form */}
          <div className="reminders-placeholder">
            {activeSection === 'all'
              ? 'Reminders will appear here. (List or Calendar View soon!)'
              : 'Reminder creation form coming soon.'}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
