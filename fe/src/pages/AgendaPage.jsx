import React, { useContext, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AppContext from '../context/AppContext';
import styles from './AgendaPage.module.css';
import { FaTrash } from 'react-icons/fa'; // Importa l'icona del cestino

const localizer = momentLocalizer(moment);

const AgendaPage = () => {
  const { events, setEvents } = useContext(AppContext);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

  const addEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      setEvents([...events, { ...newEvent, start: new Date(newEvent.start), end: new Date(newEvent.end) }]);
      setNewEvent({ title: '', start: '', end: '' });
    }
  };

  const deleteEvent = (eventToDelete) => {
    setEvents(events.filter(event => event !== eventToDelete));
  };

  const Event = ({ event }) => (
    <div className={styles.event}>
      <span>{event.title}</span>
      <FaTrash className={styles.deleteIcon} onClick={() => deleteEvent(event)} />
    </div>
  );

  return (
    <div className={styles.container}>
      <h1>Agenda</h1>
      <div className={styles.formContainer}>
        <input
          type="text"
          placeholder="Titolo"
          className={styles.inputField}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="datetime-local"
          className={styles.inputField}
          value={newEvent.start}
          onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
        />
        <input
          type="datetime-local"
          className={styles.inputField}
          value={newEvent.end}
          onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
        />
        <button className={styles.button} onClick={addEvent}>Aggiungi Evento</button>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, marginTop: '20px' }}
        components={{ event: Event }} // Usa il componente personalizzato per l'evento
      />
    </div>
  );
};

export default AgendaPage;
