import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

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
    <div className='allpage'>
      <h1>Film Diary</h1>
      <div className='filmpart'>
 
      {Array.isArray(films) ? (
        films.map((film) => (
          <div key={film.id} className="films">
             <img src={film.poster} alt={film.name} className="poster"/>
          <div className='filminfo'>
          <h2>{film.name}</h2>
            <p>{film.desc}</p>
            <p>{film.imdb}</p>
          </div>
           
          </div>
        ))
      ) : (
        <div>No films available</div>
      )}
      </div>
  
      <button className='addPage'><Link to="/add">Add new film</Link></button>
    </div>
  );
  
}

export default Films;
