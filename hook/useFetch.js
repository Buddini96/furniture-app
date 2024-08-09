import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    // console.log("Fetching data...");
  
    try {
      const response = await axios.get('http://10.0.2.2:3000/api/products/');
    //   console.log("Data fetched successfully:", response.data);
      setData(response.data);
    } catch (err) {
      console.log("Error fetching data:", err);
      setError(err.response ? err.response.data : err.message);
    } finally {
      setIsLoading(false);
      // console.log("Fetching data complete.");
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
