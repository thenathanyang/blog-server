var jwt = require("jsonwebtoken");

const JWT_EXPIRATION = 2 * 60 * 60;  // 2 hours in seconds
const JWT_SECRET = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';
const JWT_HEADER = {
	alg: "HS256",
	typ: "JWT"
};

const encode = (username, callback) => {
	const payload = {
		exp: JWT_EXPIRATION,
		usr: username
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
		res.cookie('jwt', token);
		resolve();
	});
});

const wipe = res => {
	res.clearCookie('jwt');
};

const decode = req => new Promise((resolve, reject) => {
	jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] }, (payload, err) => {
		if (err) {
			return reject (err);
		}
		resolve(payload);
	});
});

const getUsername = req => new Promise((resolve, reject) => {
	jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] }, (payload, err) => {
		if (err) {
			return reject(err)
		}
		resolve(payload.username)
	});
});

module.exports = {
	encode: encode,
	setCookie: setCookie,
	wipe: wipe,
	decode: decode,
	getUsername: getUsername
};
