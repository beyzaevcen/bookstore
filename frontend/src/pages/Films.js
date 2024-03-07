import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchAllFilms = async () => {
      try {
        const res = await axios.get("http://localhost:8800/films");
        console.log(res);

      } catch (err) {
        console.error("Error fetching films:", err);
      }
    };

    fetchAllFilms(); // Call the fetchAllFilms function
  }, []); // Add an empty dependency array to ensure the effect runs only once

  return (
    <div>Films</div>
  );
}

export default Films;
