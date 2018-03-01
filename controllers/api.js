var db = require('../utils/db');

const getPosts = (username, callback) => {
	const Posts = db.get().collection('Posts');
	Posts.find({ 'username': username }).sort({ 'postid': 1 }).toArray().then(posts => {
		callback(null, posts);
	}).catch((err) => {
		console.log("Error: " + err.message);
		callback(err, null);
	});
};

module.exports = {
	getPosts: getPosts
};
