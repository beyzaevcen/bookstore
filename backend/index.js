const express = require('express')
const cors = require('cors')

const app = express()


app.use(express.json())
app.use(cors())


const filmsRoutes = require('./routes/film_routes');
app.use(filmsRoutes);



app.listen(3306, () => {
    console.log('connected with backend');
});
