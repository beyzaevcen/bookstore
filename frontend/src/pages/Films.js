import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchAllFilms = async () => {
      try {
        const res = await axios.get("http://localhost:3306/films");
        setFilms(res.data);
      } catch (err) {
        console.error("Error fetching films:", err);
        // Handle fetch error here
      }
    };

    fetchAllFilms();
  }, []);

  console.log("Films:", films); // Add this line to check the value of films

  return (
    <div>
      <h1>Film Store</h1>
      {/* Check if films is an array before calling map */}
      {Array.isArray(films) ? (
        films.map((film) => (
          <div key={film.id}>
            <h2>{film.name}</h2> {/* Assuming each film is a string */}
          </div>
        ))
      ) : (
        <div>No films available</div>
      )}
    </div>
  );
}

export default Films;
