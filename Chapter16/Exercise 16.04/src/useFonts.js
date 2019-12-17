import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '12345';

const useFonts = sort => {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const getFonts = async () => {
      // 1. Fetch data with axios
      const res = await axios.get(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=${sort}`
      );

      // 2. Update state
      setFonts(res.data.items.slice(0, 10));
    };

    getFonts();
  }, [sort]);

  return fonts;
};

export default useFonts;
