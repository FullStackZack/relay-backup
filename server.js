const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session")
const passport = require("./passport");
const routes = require("./routes")
const app = express();
const webpush= require("web-push")
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser")

const cors = require("cors")

const users = require("./routes/api/users");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//const db = require("./config/keys").mongoURI;

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// app.use(bodyParser.json());
// app.get("/", (req, res) => {
// res.status(200).json({ message: "Hello express" });
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  cors({
      origin: "http://localhost:3000/",
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
      credentials: true
  })
);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://lhrlslacktest.ngrok.io");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

//Add routes, both API and view 
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/relay-2020',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

require("./config/passport")(passport);

app.use("/api/users", users);

    //*****************Push notification Route *******************//
const publicVapidKey ="BJxZEJV0NApSurj1ULkPZ6SoJmHwrUSR3-JyaZPhgillhEWA8OYPv_87MRSsHSHp7kxHYd3K4iwfkkQUo5YuFOg";
const privateVapidKey = "czgh1Jk372D7wsX7H4JhUORT3blHNFOmPbx7-EMcHy0";

webpush.setVapidDetails("mailto:test@test.com",

publicVapidKey,privateVapidKey);
app.post("/subscribe", (req, res) => {

  const { subscription, title, message } = req.body;
const payload = JSON.stringify({ title, message });

webpush.sendNotification(subscription, payload)
.catch((err) => console.error("err", err));
res.status(200).json({ success: true });
});

 
  // Send every request to the React app
  // Define any API routes before this runs
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });