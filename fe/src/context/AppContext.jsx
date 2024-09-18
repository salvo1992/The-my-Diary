import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [savings, setSavings] = useState(0);

  // Effetto per caricare i dati da localStorage
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const savedSavings = JSON.parse(localStorage.getItem('savings')) || 0;

    setEvents(savedEvents);
    setTransactions(savedTransactions);
    setSavings(savedSavings);
  }, []);

  // Effetto per salvare i dati su localStorage quando lo stato cambia
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('savings', savings);
  }, [events, transactions, savings]);

  return (
    <AppContext.Provider value={{ events, setEvents, transactions, setTransactions, savings, setSavings }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

