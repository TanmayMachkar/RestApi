const Pool = require('pg').pool;

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'student',
	password: 'tanmay143459!',
	port: '5432'
});

module.exports = pool;