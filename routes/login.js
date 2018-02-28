var bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();
var db = require('../utils/db');
var auth = require('../utils/auth');

router.get('/', (req, res) => {
	var Users = db.get().collection('Users');

	const username = req.query.username;
	const inputPwd = req.query.password;
	const redirect = req.query.redirect;

	Users.findOne({ 'username': username }).then(user => {
		if (user === null)
			throw new Error("username/password does not match");

		return bcrypt.compare(inputPwd, user.password);
	}).then(result => {
		if (result === null)
			throw new Error("username/password does not match");

		return auth.set(res, username);
	}).then(() => {
		res.redirect(redirect);
	}).catch(err => {
		res.render('login');
		console.log("Error: " + err.message);
	});
});

module.exports = router;
