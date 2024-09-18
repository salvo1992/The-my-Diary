import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import styles from './BudgetPage.module.css';

const BudgetPage = () => {
  const { transactions, setTransactions } = useContext(AppContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (description && amount && date) {
      const newTransaction = {
        description,
        amount: parseFloat(amount),
        date
      };
      setTransactions([...transactions, newTransaction]);
      setDescription('');
      setAmount('');
      setDate('');
    }
  };

  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className={styles.container}>
      <h1>Entrate e Spese</h1>
      <form onSubmit={handleAddTransaction} className={styles.form}>
        <input
          type="text"
          placeholder="Descrizione"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Importo (€)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Aggiungi Transazione</button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Descrizione</th>
            <th>Importo (€)</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions
            .sort((a, b) => new Date(a.date) - new Date(b.date)) // Ordina per data dalla più vecchia alla più recente
            .map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.description}</td>
                <td>{transaction.amount.toFixed(2)}</td>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
              </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Totale</td>
            <td>{total.toFixed(2)} €</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default BudgetPage;
