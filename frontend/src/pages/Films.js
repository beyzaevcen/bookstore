import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { useAuth0 } from '@auth0/auth0-react';

function Films() {
  const [films, setFilms] = useState([]);
  const { logout } = useAuth0();

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

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:3306/films/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  console.log("Films:", films); // Add this line to check the value of films

  return (
    <div className='allpage'>
      <h1>My Film Archive</h1>
      <div className='content'>
        <div className='sidebar'>
          {/* Sidebar content */}
        </div>
        <div className='filmpart'>
          {/* Films content */}
          {Array.isArray(films) ? (
            films.map((film) => (
              <div key={film.id} className="films">
                <img src={film.poster} alt={film.name} className="poster"/>
                <div className='filminfo'>
                  <h2>{film.name}</h2>
                  <p>{film.desc}</p>
                  <p>rate: {film.imdb}</p>
                  <div className='buttons'>
                    <button className='delete' onClick={() => handleDelete(film.id)}>delete</button>
                    <button className='update'><Link to={`/update/${film.id}`} style={{ color: "inherit", textDecoration: "none" }}>update</Link></button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No films available</div>
          )}
        </div>
      </div>
      <div className='addPage'>
        <button className='button'><Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>Add new film</Link></button>
        <button className='button' onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Films;
