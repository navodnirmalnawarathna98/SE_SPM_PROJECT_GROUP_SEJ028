const express = require("express"); // Express web server framework
const mongoose = require("mongoose"); // MongoDB
const bodyParser = require("body-parser"); // Parses the request body to be a readable json format
const cors = require("cors"); // Cross Origin Resource Sharing
const dotenv = require("dotenv"); // Loads environment variables from a .env file into process.env
const app = express(); // Initialize the Express application

require("dotenv").config(); // Loads environment variables from a .env file into process.env

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; // MongoDB URL

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection; // MongoDB Connection
connection.once("open", () => {
  console.log("MongoDB Database Connection Successfull"); // Display in console if connection is successful
});

// //store
// const storeRouter = require('./routes/StoreRouter');
// app.use('/Store',storeRouter);
// //pickup store items
// // const pickupRouter= require('./routes/PickUpRouter');
// // app.use('/Pickup', pickupRouter);

// //package
// const packageRouter = require('./routes/packageRouter.js');
// app.use('/package', packageRouter );

// /*Admin*/
// const sellerRouter = require("./routes/sellerRouter.js"); //import sellerRouter.js
// const wmanagerRouter = require("./routes/wmanagerRouter.js"); //import wmanagerRouter.js

// app.use("/seller",sellerRouter); //to load sellerRouter.js we have to pass two parameteres (1.route 2. sellerRouter variable)
// app.use("/wmanager",wmanagerRouter); //to load wmanagerRouter.js

// //employee route
// const employeeRouter = require(`./routes/empRouter`);
// app.use("/employee",employeeRouter);

// add blood sample route
const addBloodSamplesRouter = require("./routes/addBloodSamplesRouter");
app.use("/addbloodsamples", addBloodSamplesRouter);

// Institution
const institutionRouter = require(`./routes/institutionRouter`);
app.use("/addRequest", institutionRouter);

//seeker routes
const addSeekerRoute = require("./routes/seekerRoutes");
app.use("/Seeker", addSeekerRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port number : ${PORT}`); // Dipaly in console if server is running
});
