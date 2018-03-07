var express = require("express");
var router = express.Router();
//Creates a new router object
//You can add middleware and HTTP method routes (such as get, put, post, and so on) to router just like an application.

var db = require("../models");

router.get("/", function(req, res){
  db.burger.findAll({}).then(function(data){
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject)
  });
});

// router.post("/api/burgers", function(req,res){
//   db.burger.
// })
router.put("/api/burgers/:id", function(req, res){
  db.burger.update({
    devoured: true
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(data){
    res.redirect("/");
  });
});

router.post("/api/burgers/", function(req, res){
  db.burger.create({
    burger_name: req.body.burger_name
  }).then(function(data){
    res.redirect("/")
  })
})

module.exports = router;
