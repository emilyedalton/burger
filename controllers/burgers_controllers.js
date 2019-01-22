var express = require("express");
// now we're using the express router
// We are creating actions that are going to fire off as a route
// you have routes delinated and each of them will be correlated into a controller file which will be required into your server file 
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
// We're going ot have a rouute of slash 
router.get("/", function(req, res) {
  // when it runs we want it to get and run this command in cat
  // we've created an ORM, it has a function called all
  // that function will return some data
  // we are depending on mySQL to return a query to us
  //once we have the data we are making a handlebars object
  burger.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
// });
// //inserting
// router.post("/api/cats", function(req, res) {
//   burger.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });
// // updating
// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update(
//     {
//       sleepy: req.body.sleepy
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
});

// Export routes for server.js to use.
module.exports = router;