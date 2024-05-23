import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useLocation, useNavigate } from 'react-router-dom';

function Update() {
  const [film, setFilm] = useState({
    name: "",
    desc: "",
    imdb: "",
    poster: ""
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const filmId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const res = await axios.get(`http://localhost:3306/films/${filmId}`);
        setFilm(res.data);
      } catch (err) {
        console.error("Error fetching film:", err);
        setError(true);
      }
    };

    fetchFilm();
  }, [filmId]);

  const handleChange = (e) => {
    setFilm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3306/films/${filmId}`, film);
      navigate("/films");
    } catch (err) {
      console.log(err);
    }
  }

  if (error) {
    return <div>Error fetching film</div>;
  }

  return (
    <div className='form'>
      <h1>Update Film</h1>
      <label>
        <input type="text" placeholder="Enter a name" value={film.name} onChange={handleChange} name='name' />
      </label>
      <label>
        <input type="text" placeholder="Enter a description" value={film.desc} onChange={handleChange} name='desc' />
      </label>
      <label>
        <input type="number" placeholder="Enter a score" value={film.imdb} onChange={handleChange} name='imdb' />
      </label>
      <label>
        <input type="text" placeholder="Enter an image url" value={film.poster} onChange={handleChange} name='poster' />
      </label>
      <button onClick={handleClick} className="addButton">Update</button>
    </div>
  );
}

export default Update;
