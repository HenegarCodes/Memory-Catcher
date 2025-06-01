const express = require("express");
const app = express();
const cors = require("cors")
const { auth } = require('express-openid-connect');
require('dotenv').config()

const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));




const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.Oauth,
  baseURL: 'http://localhost:8080',
  clientID: 'cNg6s83dzpdxp7PzutcvQarrkIMbPvQM',
  issuerBaseURL: 'https://dev-cncn3t25gmksm5nr.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.get("/api", (req, res) =>{
    res.json({"fruits": ["apple", "orange", "Banana"]})
})

app.listen(8080, () =>{
    console.log("server started on port 8080")
})
