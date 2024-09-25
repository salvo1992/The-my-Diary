import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'; // Importa la barra di navigazione
import BudgetPage from './pages/BudgetPage';
import SavingsPage from './pages/SavingsPage';
import LongTermEventsPage from './pages/LongTermEventsPage';
import AgendaPage from './pages/AgendaPage';

const App = () => {
  return (
    <Router>
      <div>
        <Nav /> {/* Richiama la barra di navigazione */}
        <Routes>
          <Route path="/" element={<AgendaPage />} />
          <Route path="/budget" element={<BudgetPage />} />
          <Route path="/savings" element={<SavingsPage />} />
          <Route path="/long-term-events" element={<LongTermEventsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

