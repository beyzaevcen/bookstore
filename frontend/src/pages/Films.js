import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Films() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllFilms = async () => {
      try {
        const res = await axios.get("http://localhost:3002/films");
        if (!Array.isArray(res.data)) {
          throw new Error("Film data is not an array.");
        }
        setFilms(res.data);
      } catch (err) {
        console.error("Error fetching films:", err);
        setError(err.message);
      }
    };

    fetchAllFilms();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(films)) {
    return <div>No films available.</div>;
  }

  return (
    <div>
      <h1>Beyza Film Store</h1>
      <div className='films'>
        {films.map(film => (
          <div key={film.id} className='film'>
            <div>
              <h2>{film.title}</h2>
              <p>{film.description}</p>
              {/* <img src={film.poster} alt={film.title} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Films;

