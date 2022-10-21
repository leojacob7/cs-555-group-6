const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use(session({
  name: 'AuthCookies',
  secret: 'some secret string!!',
  resave: false,
  saveUninitialized: true
}))



  app.use(async (req, res, next) => { 
    console.log("req.session.user : "+req.session.user)
    if(req.session.user){ 
console.log("["+new Date().toUTCString()+"]: "+req.method+" "+req.originalUrl+ ' (Authenticated User)');
    }
    else{
      console.log("["+new Date().toUTCString()+"]: "+req.method+" "+req.originalUrl+ ' (Non-Authenticated User)');
    }
next();
  });

  configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});