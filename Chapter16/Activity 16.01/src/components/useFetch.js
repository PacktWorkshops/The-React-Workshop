import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '$2a$10$XmjRJwEYAozGztHOgNVwTOz6.s2cxGRbmQtCSsiGRyielQhXB8nUu';

const useFetch = request => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://www.potterapi.com/v1/${request}?key=${API_KEY}`
      );

      setResponse(res.data);
    };

    getData();
  }, [request]);

  return response;
};

export default useFetch;
