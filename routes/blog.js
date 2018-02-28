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
  Posts.findOne({ 'username': username, 'postid': parseInt(postid) }).then(post => {
		res.render('post', { post: post });
	}).catch((err) => {
		console.log("Error: " + err.message);
	});
});

/* GET Posts List */
router.get('/:username', (req, res) => {
	var Posts = db.get().collection('Posts');
	const username = req.params.username;
	let postsList = [];

	// req.query.start is the start postid query string
	const postidToRender = req.query.start ? parseInt(req.query.start) : 1;

	Posts.find({ 'username': username, 'postid': {$gte:postidToRender} })
				.sort({ 'postid': 1 }).limit(5).toArray().then(posts => {
		postsList = posts;
		return Posts.find({ 'username': username, 'postid': {$gt:postsList[postsList.length - 1].postid} })
								.sort({ 'postid': 1 }).limit(1).toArray();
	}).then(nextLargestPost => {
		const isMoreToRender = (nextLargestPost[0]) ? true : false;
		let nextURL = "";
		if (isMoreToRender) {
			const nextStart = nextLargestPost[0].postid;
			nextURL = "/blog/" + username + "?start=" + nextStart.toString();
		}

		res.render('postsList', {
			postsList: postsList,
			isMoreToRender: isMoreToRender,
			nextURL: nextURL
		});
	}).catch((err) => {
		console.log("Error: " + err.message);
	});
});

module.exports = router;
