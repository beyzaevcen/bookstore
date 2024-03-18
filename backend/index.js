const express = require('express')
const cors = require('cors')

const app = express()
const { auth } = require('express-openid-connect');
require('dotenv').config()

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID:process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER
  };
  


app.use(express.json())
app.use(cors())
app.use(auth(config))

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });


const filmsRoutes = require('./routes/film_routes');
app.use(filmsRoutes);



app.listen(3306, () => {
    console.log('connected with backend');
});
