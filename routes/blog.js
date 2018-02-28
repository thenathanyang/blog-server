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
  Posts.findOne({ 'postid': parseInt(postid) }).then(post => {
		res.render('post', { post: post });
	}).catch((err) => {
		console.log("Error: " + err.message);
	});
});

/* GET Posts List */
router.get('/:username', (req, res) => {
	const username = req.params.username;

	var Posts = db.get().collection('Posts');
	Posts.find({ 'username': username }).toArray().then(postsList => {
		// TODO: only render 5 posts at a time
		res.render('postsList', { postsList: postsList });
	}).catch((err) => {
		console.log("Error: " + err.message);
	});
});

module.exports = router;
