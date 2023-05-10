const express = require("express");
const cors = require("cors");
const app = express();
const  fs = require('fs');

// ================= swaggerUi code============================ 
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
// let express to use this



// ================= files upload code============================= 
global.__basedir = __dirname;

var corsOptions = {
  origin: "*"
};

const initRoutes = require("./routes");

// -----------------------------------------


var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

const db = require("./model");
const errorHandler = require("./middleware/errorHandler");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// parse requests of content-type - application/json
app.use(express.json());

// app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs11', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

initRoutes(app);



require("./routes/regression.routes")(app);
require("./routes/auth.routes")(app);

// errorHandler mate 
app.use(errorHandler); 

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});