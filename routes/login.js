var bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();
var db = require('../utils/db');
var auth = require('../utils/auth');

router.get('/', (req, res) => {
	console.log("Got a new login request");
	const Users = db.get().collection('Users');

	const username = req.query.username;
	const inputPwd = req.query.password;
	const redirect = req.query.redirect;
	console.log("username: " + username);
	console.log("inputPwd: " + inputPwd);

	Users.findOne({ 'username': username }).then(user => {
		if (user === null)
			throw new Error("username/password does not match1");

		return bcrypt.compare(inputPwd, user.password);
	}).then(result => {
		if (result === false)
			throw new Error("username/password does not match2");
		// auth.clear(res);
		return auth.setCookie(res, username);
	}).then(() => {
		console.log("Successful login by: " + username);
		if (redirect && typeof redirect !== "undefined" && redirect !== null) {
			res.redirect(redirect);
		} else {
			res.send("Login successful but no redirect URL specified");
		}
	}).catch(err => {
		res.render('login', { redirect: redirect });
		console.log("Error: " + err.message);
	});
});

module.exports = router;
