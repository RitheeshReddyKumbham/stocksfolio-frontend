import React, { useState } from 'react';
import axios from 'axios';
import './Journel.css';
import { useNavigate } from 'react-router-dom';
function Journel() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [entries, setEntries] = useState([]);
  const navigate=useNavigate()
  const fetchEntries = async () => {
    try {
      // Fixed the API endpoint (case-sensitive)
      const res = await axios.get('https://stocksfolio-backend.onrender.com/journal/data', {
        params: { month, year }
      });
      setEntries(res.data);
    } catch (err) {
      alert('Error fetching journal data.');
    }
  };

  const deleteEntry = async (id) => {
    try {
      await axios.delete(`https://stocksfolio-backend.onrender.com/journal/${id}`);
      setEntries(entries.filter(entry => entry.id !== id)); 
    } catch (err) {
      alert('Error deleting entry.');
    } 
  };
  const handleAdd=()=>{
   navigate('/addJournel')
  }

  return (
    <div className="journal-container">
      <h2 className="journal-title">View Journal Entries</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Month (MM)"
          value={month}
          onChange={e => setMonth(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Year (YYYY)"
          value={year}
          onChange={e => setYear(e.target.value)}
          className="input-field"
        />
        <button onClick={fetchEntries} className="fetch-button">Fetch Entries</button>
        <button onClick={handleAdd} className='fetch-button'>Add Journal</button>
      </div>

      <table className="journal-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Pair</th>
            <th>Position</th>
            <th>Outcome Amount</th>
            <th>Outcome</th>
            <th>Risk/Reward</th>
            <th>Chart Link</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.pair}</td>
              <td>{entry.position}</td>
              <td>{entry.outcomeAmt}</td>
              <td>{entry.outcome}</td>
              <td>{entry.riskReward}</td>
              <td>
                <a
                  href={entry.chartlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chart-link"
                >
                  View
                </a>
              </td>
              <td>{entry.balance}</td>
              <td>
                <button onClick={() => deleteEntry(entry.id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Journel;
