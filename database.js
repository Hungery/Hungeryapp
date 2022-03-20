const { Pool } = require('pg');
const connection = new Pool({
connectionString: process.env.DATABASE_URL,
ssl: {
rejectUnauthorized: false
}
});
module.exports = connection;