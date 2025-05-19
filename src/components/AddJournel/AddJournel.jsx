import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddJournel.css';

function AddJournel() {
  const [date, setDate] = useState('');
  const [pair, setPair] = useState('');
  const [position, setPosition] = useState('');
  const [outcome, setOutcome] = useState('');
  const [outcomeAmt, setOutcomeAmt] = useState(0);
  const [riskReward, setRiskReward] = useState('');
  const [chartlink, setChartlink] = useState('');
  const [balance, setBalance] = useState(0);
  const navigate=useNavigate()

  const handleJournelSubmit = async () => {
    const journelData = {
      date,
      pair,
      position,
      outcome,
      outcomeAmt,
      riskReward,
      chartlink,
      balance,
    };

    try {
      const res = await fetch('https://stocksfolio-backend.onrender.com/journal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(journelData),
      });
      const data = await res.json();
      alert(data.message || data.error);
      
      setDate('');
      setPair('');
      setPosition('');
      setOutcome('');
      setOutcomeAmt(0);
      setRiskReward('');
      setChartlink('');
      setBalance(0);
    } catch (err) {
      alert('Failed to submit journal entry.');
    }
  };
  const handleWatchJournal=()=>{
    navigate('/watchJournel')
  }

  return (
    <div className="journal-form-container">
      <h2 className="journal-form-title">Journal Entry</h2>

      <div className="journal-form-inputs">
        <div className="input-column">
          <label>Date:</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />

          <label>Pair:</label>
          <input type="text" value={pair} onChange={e => setPair(e.target.value.toUpperCase())} />

          <label>Position:</label>
          <select value={position} onChange={e => setPosition(e.target.value)}>
            <option>select</option>
            <option value="Long">Long</option>
            <option value="Short">Short</option>
          </select>

          <label>Outcome:</label>
          <select value={outcome} onChange={e => setOutcome(e.target.value)}>
            <option>select</option>
            <option value="Profit">Profit</option>
            <option value="Loss">Loss</option>
          </select>
        </div>

        <div className="input-column">
          <label>P/L Amt</label>
          <input type="number" value={outcomeAmt} onChange={e => setOutcomeAmt(e.target.value)} />

          <label>Risk/Reward:</label>
          <input type="text" value={riskReward} onChange={e => setRiskReward(e.target.value)} />

          <label>Chart Link:</label>
          <input type="url" value={chartlink} onChange={e => setChartlink(e.target.value)} />

          <label>Balance:</label>
          <input
            type="number"
            value={balance}
            onChange={e => setBalance(e.target.value)}
          />
        </div>
      </div>
      <div className='bttns'>
      <button className="journal-submit-button" onClick={handleJournelSubmit}>
        Submit Journal
      </button>
      <button className='journal-submit-button' onClick={handleWatchJournal}>Watch Journal</button>
      </div>
    </div>
  );
}

export default AddJournel;
