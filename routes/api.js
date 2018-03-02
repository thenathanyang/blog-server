var express = require('express');
var router = express.Router();
var db = require('../utils/db');
var resp = require('../utils/resp');

const apiController = require("../controllers/api.js");

/* GET /api/:username
 * The server should return all blog posts by username.
 * The returned posts should be included in the body of the response as an
 * array in JSON even if the user has zero or one post. Each post in the array
 * must have at least five fields, postid, title, body, created, and modified
 * (case sensitive). The response status code should be "200 (OK)".
 */
router.get('/:username', (req, res) => {
	const username = req.params.username;

	apiController.getPosts(username, (err, data) => {
		if (err)
			return resp.badRequest(req, res, err);	// 400

		resp.ok(req, res, data);	// 200
	});
});

/* GET /api/:username/:postid
 * The server should return the blog post with postid by username.
 * If such a post exists, the response status code should be "200 (OK)", and the
 * post should be included in the body of the response in JSON with at least
 * four fields, title, body, created, and modified (case sensitive).
 * If not, the response status code should be "404 (Not found)".
 */
router.get('/:username/:postid', (req, res) => {
	const username = req.params.username;
	const postid = req.params.postid;

	apiController.getPost(username, postid, (err, data) => {
		if (err)
			return resp.notFound(req, res, err);	// 400

		resp.ok(req, res, data);	// 200
	});
});

/* POST /api/:username/:postid
 * When the server gets this request, it must insert a new blog post with
 * username, postid, title, and body from the request. The request must include
 * title and body in its body in JSON. The created and modified fields of the
 * inserted post should be set to the current time. If the insertion is
 * successful, the server should reply with "201 (Created)" status code. If a
 * blog post with the same postid by username already exists in the server, the
 * server should not insert a new post and reply with "400 (Bad request)" status
 * code.
 */
router.post('/:username/:postid', (req, res) => {
	const username = req.params.username;
	const postid = req.params.postid;
	const jsonRequest = req.body;

	apiController.insertPost(username, postid, jsonRequest, (err, data) => {
		if (err)
			return resp.badRequest(req, res, err);	// 400

		resp.created(req, res);	// 201
	});
});

module.exports = router;
