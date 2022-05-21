const express = require("express");
const ExpressError = require("./expressError");
const middleware = require("./middleware")
// morgan logger. must npm install first.
const morgan = require('morgan');

const userRoutes = require('./userRoutes');

const app = express();

app.use(express.json());
// app.use(middleware.logger);
// morgan logger. must npm install first.
app.use(morgan('dev'));

// placement of this middleware is important 
function logger(req, res, next) {
  console.log(`RECEIVED a ${req.method} request to ${req.path}`);
  return next();
}
// if we put it at the top, it will run first. before any other route is hit
// app.use(logger);

// here we are telling express that we want to handle /users route
// when someone reaches that, open the router called userRoutes
app.use("/users", userRoutes);
app.get('/favicon.ico', (req, res) => res.sendStatus(204))

app.get('/secret', middleware.checkForPassword, (req, res, next) => {
  return res.send("I LOVE NODE JS. NOT REALLY. FLASK IS BETTER.")
})

app.get('/private', middleware.checkForPassword, (req, res, next) => {
  return res.send("YOU HAVE REACHED PRIVATE PAGE.")
})

// 404 handler
app.use(function (req, res) {
  return new ExpressError("Not Found", 404);
});

// generic error handler
app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;

  // set the status and alert the user
  return res.status(status).json({
    error: {
      message: err.message,
      status: status
    }
  });
});
// end generic handler
app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
// end app.listen