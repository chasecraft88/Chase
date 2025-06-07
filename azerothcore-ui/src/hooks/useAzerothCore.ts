import { useState, useEffect } from 'react';
import { fetchData } from '../services/api';
import { useSocket } from './useModelLoader';

const useAzerothCore = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const socket = useSocket();

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData('/api/game-data');
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    socket.on('dataUpdate', (newData) => {
      setData(newData);
    });

    return () => {
      socket.off('dataUpdate');
    };
  }, [socket]);

  return { data, loading, error };
};

export default useAzerothCore;