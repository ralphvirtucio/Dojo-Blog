import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('ERROR FETCH!');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(error => {
        setIsPending(false);
        setError(error.message);
      });
  }, [url]);

  return [data, isPending, error];
};

export default useFetch;
