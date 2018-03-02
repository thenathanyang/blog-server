var db = require('../utils/db');

const getPosts = (username, callback) => {
	const Posts = db.get().collection('Posts');
	Posts.find({ 'username': username }).sort({ 'postid': 1 }).toArray().then(posts => {
		if (posts === null)
			throw new Error("failed to get posts by specified username");

		const postsArr = [];
		posts.forEach(post => {
			const jsonPost = {
				postid: post.postid,
				title: post.title,
				body: post.body,
				created: post.created,
				modified: post.modified
			};
			postsArr.push(jsonPost);
		});

		callback(null, postsArr);
	}).catch(err => {
		console.log("Error: " + err.message);
		callback(err, null);
	});
};

const getPost = (username, postid, callback) => {
	const Posts = db.get().collection('Posts');
	Posts.findOne({ 'username': username, 'postid': parseInt(postid) }).then(post => {
		if (post === null)
			throw new Error("failed to get post by specified username and postid");

		const postResponse = {
			title: post.title,
			body: post.body,
			created: post.created,
			modified: post.modified
		}

		callback(null, postResponse);
	}).catch(err => {
		console.log("Error: " + err.message);
		callback(err, null);
	})
}

module.exports = {
	getPosts: getPosts,
	getPost: getPost
};
