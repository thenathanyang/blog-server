var express = require('express');
var router = express.Router();
var resp = require('../utils/resp');
var auth = require('../utils/auth');

const apiController = require("../controllers/api.js");

/**
 * GET /api/:username
 * The server should return all blog posts by username.
 * The returned posts should be included in the body of the response as an
 * array in JSON even if the user has zero or one post. Each post in the array
 * must have at least five fields, postid, title, body, created, and modified
 * (case sensitive). The response status code should be "200 (OK)".
 */
router.get('/:username', (req, res) => {
	const username = req.params.username;

	try {
		const authUsername = auth.getUsername(req);
		if (username !== authUsername)
			throw new Error("username does not match authorized username");
	} catch (err) {
		return resp.unauthorized(req, res, err.message);	// 401
		// return res.redirect("/login?redirect=/edit/");
	}

	apiController.getPosts(username, (err, data) => {
		if (err) {
			return resp.badRequest(req, res, err);	// 400
		}
		resp.ok(req, res, data);	// 200
	});
});

/**
 * GET /api/:username/:postid
 * The server should return the blog post with postid by username.
 * If such a post exists, the response status code should be "200 (OK)", and the
 * post should be included in the body of the response in JSON with at least
 * four fields, title, body, created, and modified (case sensitive).
 * If not, the response status code should be "404 (Not found)".
 */
router.get('/:username/:postid', (req, res) => {
	const username = req.params.username;
	const postid = req.params.postid;

	try {
		const authUsername = auth.getUsername(req);
		if (username !== authUsername)
			throw new Error("username does not match authorized username");
	} catch (err) {
		return resp.unauthorized(req, res, err.message);	// 401
		// return res.redirect("/login?redirect=/edit/");
	}

	apiController.getPost(username, postid, (err, data) => {
		if (err) {
			return resp.notFound(req, res, err);	// 400
		}
		resp.ok(req, res, data);	// 200
	});
});

/**
 * POST /api/:username/:postid
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

	try {
		const authUsername = auth.getUsername(req);
		if (username !== authUsername)
			throw new Error("username does not match authorized username");
	} catch (err) {
		return resp.unauthorized(req, res, err.message);	// 401
		// return res.redirect("/login?redirect=/edit/");
	}

	apiController.insertPost(username, postid, jsonRequest, (err, data) => {
		if (err) {
			return resp.badRequest(req, res, err);	// 400
		}
		resp.created(req, res);	// 201
	});
});

/**
 * PUT /api/:username/:postid
 * The request must include title and body in its body in JSON. When the server
 * gets this request, it must update the existing blog post with postid by
 * username with the title and body values from the request. The modified field
 * should be updated to the current time as well. If the update is successful,
 * the server should reply with "200 (OK)" status code. If there is no blog post
 * with postid by username, the server should reply with "400 (Bad request)"
 * status code.
 */
router.put('/:username/:postid', (req, res) => {
	const username = req.params.username;
	const postid = req.params.postid;
	const jsonRequest = req.body;

	try {
		const authUsername = auth.getUsername(req);
		if (username !== authUsername)
			throw new Error("username does not match authorized username");
	} catch (err) {
		return resp.unauthorized(req, res, err.message);	// 401
		// return res.redirect("/login?redirect=/edit/");
	}

	apiController.updatePost(username, postid, jsonRequest, (err, data) => {
		if (err) {
			return resp.badRequest(req, res, err);	// 400
		}
		resp.ok(req, res);	// 200
	});
});

/**
 * DELETE /api/:username/:postid
 * When the server gets this request, the server must delete the existing blog
 * post with postid by username from the database. If the deletion is
 * successful, the server should reply with "204 (No content)" status code. If
 * there is no such post, the server should reply with "400 (Bad request)"
 * status code.
 */
router.delete('/:username/:postid', (req, res) => {
	const username = req.params.username;
	const postid = req.params.postid;

	try {
		const authUsername = auth.getUsername(req);
		if (username !== authUsername)
			throw new Error("username does not match authorized username");
	} catch (err) {
		return resp.unauthorized(req, res, err.message);	// 401
		// return res.redirect("/login?redirect=/edit/");
	}

	apiController.deletePost(username, postid, (err, data) => {
		if (err) {
			return resp.badRequest(req, res, err);	// 400
		}
		resp.noContent(req, res);	// 204
	});
});

module.exports = router;
