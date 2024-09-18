import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import styles from './SavingsPage.module.css';

const SavingsPage = () => {
  const { savings, setSavings } = useContext(AppContext);
  const [amount, setAmount] = useState('');

  const handleAddSavings = (e) => {
    e.preventDefault();
    if (amount) {
      setSavings(savings + parseFloat(amount));
      setAmount('');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Salvadanaio</h1>
      <div className={styles.savingsContainer}>
        <h2>Risparmi Totali</h2>
        <p>{savings.toFixed(2)} €</p>
      </div>
      <form onSubmit={handleAddSavings} className={styles.form}>
        <input
          type="number"
          placeholder="Aggiungi Risparmio (€)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Aggiungi Risparmio</button>
      </form>
    </div>
  );
};

export default SavingsPage;





