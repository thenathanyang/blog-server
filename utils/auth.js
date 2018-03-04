var jwt = require("jsonwebtoken");
var resp = require('./resp');

const JWT_EXPIRATION = 2 * 60 * 60;  // 2 hours in seconds
const JWT_SECRET = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';
const JWT_HEADER = {
	"alg": "HS256",
	"typ": "JWT"
};

const encode = (username, callback) => {
	const payload = {
		"exp": (Date.now()/1000) + JWT_EXPIRATION,
		"usr": username
	};

	jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', header: JWT_HEADER, }, (err, token) => {
		if (err) {
			callback(err, null);
		}
		callback(null, token);
	});
};

const setCookie = (res, username) => new Promise((resolve, reject) => {
	encode(username, (err, token) => {
		if (err) {
			reject(err);
		}
		res.cookie('jwt', token, { httpOnly: false });
		resolve();
	});
});

const clear = res => {
	res.clearCookie('jwt');
};

// Synchronous
const decodeCookie = token => {
	return jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] });
};

// Asynchronous
const decodeCookieCallback = (token, callback) => {
	jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] }, (err, payload) => {
		if (err) {
			callback(err, null);
		}
		callback(null, payload);
	});
};

// Synchronous
const decode = req => {
	console.log("inside decode: " + req.cookies);

	if (req.cookies === null || typeof req.cookies === "undefined")
		throw new Error("req does not have a cookies object");
	if (req.cookies.jwt === null || typeof req.cookies.jwt === "undefined")
		throw new Error("request does not have authentication");

	return decodeCookie(req.cookies.jwt);
};

// Asynchronous
const decodePromise = req => new Promise((resolve, reject) => {
	if (req.cookies === null || typeof req.cookies === "undefined")
		return reject(Error("req does not have a cookies object"));
	if (req.cookies.jwt === null || typeof req.cookies.jwt === "undefined")
		return reject(Error("request does not have authentication"));

	decodeCookieCallback(req.cookies.jwt, (err, payload) => {
		if (err) {
			reject(err);
		}
		resolve(payload);
	});
});

// Synchronous
const getUsername = req => {
	const payload = decode(req);
	return payload.usr;
};

// Asynchronous
const getUsernamePromise = req => new Promise((resolve, reject) => {
	decode(req).then(payload => {
		resolve(payload.usr);
	}).catch(err => {
		reject(err);
	});
});

module.exports = {
	encode: encode,
	setCookie: setCookie,
	clear: clear,
	decode: decode,
	decodePromise: decodePromise,
	getUsername: getUsername,
	getUsernamePromise: getUsernamePromise
};
