import React, { useState } from 'react';

const RandomFact = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState('');

  const fetchFact = async () => {
    setLoading(true);
    setFact('');
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
      setTime(new Date().toLocaleTimeString());
    } catch (error) {
      setFact('Unable to fetch a fact. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🐱 Random Cat Fact Generator 🐈</h2>
      <button onClick={fetchFact} style={styles.button} disabled={loading}>
        {loading ? 'Fetching...' : 'Get a Cat Fact'}
      </button>

      {fact && (
        <div style={styles.card}>
          <p style={styles.fact}>{fact}</p>
          <p style={styles.timestamp}>Fetched at: {time}</p>
        </div>
      )}
    </div>
  );
};

//styles
const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    
  },
  heading: {
    marginBottom: '1rem',
    fontSize: '40px',
    
  },
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '25px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderColor: 'black',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  card: {
    marginTop: '2rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '2rem auto',
    backgroundColor: '#f9f9f9',
  },
  fact: {
    fontSize: '18px',
    marginBottom: '0.5rem',
    textAlign: 'justify',
  },
  timestamp: {
    fontSize: '14px',
    color: '#555',
    textAlign: 'right',
    marginTop: '20px',
    marginBottom: '0px',
  },
};

export default RandomFact;
