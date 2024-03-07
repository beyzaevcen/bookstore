import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchAllFilms = async () => {
      try {
        const res = await axios.get("http://localhost:8800/films");
        setFilms(res.data);
      } catch (err) {
        console.error("Error fetching films:", err);
        // Handle fetch error here
      }
    };

    fetchAllFilms();
  }, []);

  // Check if films is not an array
  if (!Array.isArray(films)) {
    return <div>Error: Films data is not an array.</div>;
  }

  // Render films if data fetching is successful
  return (
    <div>
      <h1>Lama Book Shop</h1>
      <div className="films">
        {films.map((film) => (
          <div key={film.id} className="book">
            <img src={film.cover} alt="" />
            <h2>{film.title}</h2>
            <p>{film.desc}</p>     
          </div>
        ))}
      </div>
    </div>
  );
}

export default Films;