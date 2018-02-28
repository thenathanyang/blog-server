var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/', (req, res) => {
	res.send("Test!");
});

/* GET Post */
router.get('/:username/:postid', (req, res) => {
  const username = req.params.username;
  const postid = req.params.postid;

  var Posts = db.get().collection('Posts');
  Posts.findOne({ "postid": parseInt(postid) }).then(post => {

		res.render('post', {
			title : post.title,
			username: post.username,
			body: post.body
		});

	}).catch((err) => {
		console.log(err.message);
	});
});

/* GET Posts List */
router.get('/:username', (req, res) => {
	const username = req.params.username;

	var Posts = db.get().collection('Posts');
	Posts.find({ "username": username }).toArray().then(postsList => {
		console.log(postsList);
		res.send("Posts List");
	}).catch((err) => {
		console.log("Error!");
	});
});

module.exports = router;
