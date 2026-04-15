/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/screens/Dashboard';
import Matters from './components/screens/Matters';
import Finance from './components/screens/Finance';
import ClientDetails from './components/screens/ClientDetails';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderScreen = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'matters':
        return <Matters />;
      case 'finance':
        return <Finance />;
      case 'clients':
        return <ClientDetails />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

