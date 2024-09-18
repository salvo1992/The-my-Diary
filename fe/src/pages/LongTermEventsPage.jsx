import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import styles from './LongTermEventsPage.module.css'; // Usa CSS module per la grafica

const LongTermEventsPage = () => {
  const { events, setEvents } = useContext(AppContext);
  const [longTermEvent, setLongTermEvent] = useState({ title: '', date: '' });

  const addLongTermEvent = () => {
    setEvents([...events, { ...longTermEvent, date: new Date(longTermEvent.date) }]);
    setLongTermEvent({ title: '', date: '' });
  };

  return (
    <div className={styles.container}>
      <h1>Eventi a Lungo Termine</h1>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Titolo Evento"
          className={styles.inputField}
          value={longTermEvent.title}
          onChange={(e) => setLongTermEvent({ ...longTermEvent, title: e.target.value })}
        />
        <input
          type="date"
          className={styles.inputField}
          value={longTermEvent.date}
          onChange={(e) => setLongTermEvent({ ...longTermEvent, date: e.target.value })}
        />
        <button className={styles.button} onClick={addLongTermEvent}>Aggiungi Evento</button>
      </div>
      <ul>
    {events.map((event, index) => (
      <li key={index}>
        {event.title} - {event.date ? new Date(event.date).toLocaleDateString() : 'Data non disponibile'}
      </li>
    ))}
  </ul>
    </div>
  );
};

export default LongTermEventsPage;
