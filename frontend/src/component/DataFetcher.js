// src/DataFetcher.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataFetcher.css'; // Import the CSS file

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:3001/api/data')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="container">
      <h1 className="heading">Data from API:</h1>
      <pre className="data">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
