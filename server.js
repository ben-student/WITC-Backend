
//variables
let varSubject;
let varText;
let mailOptions;
//password security
require('dotenv').config();


//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");



// create a new Express application instance 
const app = express();

user='';

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors());
app.use(bodyParser.json());

// var corsOptions = {
//   origin: '*',
//   optionsSuccesStatus: 200
// }

//CORS Middleware
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
  });

//start application server on port 3000
app.listen(3000, () => {
    console.log("The server started on port http://localhost:3000");
  });


  const sendMail = (user, callback) => {

    mailOptions = {
      from: `"Ben Dupont", "ben.dupont@student.ap.be"`,
      to: `benooz1998@gmail.com`,
      subject: varSubject,
      text : varText
    };

    
    const transporter = nodemailer.createTransport({
      host: "eas.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: /*process.env.EMAIL*/'s108652@ap.be',
        pass: /*process.env.PASSWORD*/'Wakeboard1'
      }
    }); 

    transporter.sendMail(mailOptions, callback);
  }

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail" ,(req, res) => {
    console.log("request came");
    let user = req.body.email;
    varSubject = req.body.subject;
    varText = req.body.text;

    

    console.log("send email to " + user);
    sendMail(user, (err, info) => {
      if (err) {
        console.log(err);
        res.status(400);
        res.send({ error: "Failed to send email" });
      } else {
        console.log("Email has been sent");
        res.send(info);
        console.log(varSubject);
        res.send(varText);
        
      }
    });
  });


  

   
  
 