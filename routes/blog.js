var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/', (req, res) => {
	res.send("Test!");
});

/* GET Post */
router.get('/:username/:postid', function(req, res, next) {
  const username = req.params.username;
  const postid = req.params.postid;

  var Posts = db.get().collection('Posts');
  Posts.findOne({ "postid": 1 }).then(post => {
		console.log(post);
		res.send("Hi");
	}).catch((err) => {
		console.log("Error!");
	});
});

module.exports = router;
