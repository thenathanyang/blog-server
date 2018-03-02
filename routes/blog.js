var express = require('express');
var router = express.Router();
var commonmark = require('commonmark');
var db = require('../utils/db');

/* GET Post */
router.get('/:username/:postid', (req, res) => {
  const username = req.params.username;
  const postid = req.params.postid;

  const Posts = db.get().collection('Posts');
  Posts.findOne({ 'username': username, 'postid': parseInt(postid) }).then(post => {
		// TODO: convert Markdown body to HTML

		const reader = new commonmark.Parser();
		const writer = new commonmark.HtmlRenderer();

		const parsedTitle = reader.parse(post.title);
		const convertedTitle = writer.render(parsedTitle);

		const parsedBody = reader.parse(post.body);
		const convertedBody = writer.render(parsedBody);

		res.render('post', {
			htmlTitle: post.title,
			title: convertedTitle,
			username: post.username,
			body: convertedBody
		});
	}).catch(err => {
		console.log("Error: " + err.message);
	});
});

/* GET Posts List */
router.get('/:username', (req, res) => {
	const Posts = db.get().collection('Posts');
	const username = req.params.username;
	let postsList = [];

	// req.query.start is the start postid query string
	const postidToRender = req.query.start ? parseInt(req.query.start) : 1;

	Posts.find({ 'username': username, 'postid': {$gte:postidToRender} })
				.sort({ 'postid': 1 }).limit(5).toArray().then(posts => {

		const reader = new commonmark.Parser();
		const writer = new commonmark.HtmlRenderer();

		posts.forEach(post => {
			const parsedTitle = reader.parse(post.title);
			const convertedTitle = writer.render(parsedTitle);

			const parsedBody = reader.parse(post.body);
			const convertedBody = writer.render(parsedBody);

			const postObj = {
				title: convertedTitle,
				username: post.username,
				body: convertedBody
			};

			postsList.push(postObj);
		});

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
	}).catch(err => {
		console.log("Error: " + err.message);
	});
});

module.exports = router;
