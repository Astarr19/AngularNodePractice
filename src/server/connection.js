const { Pool } =
require("pg");
const credentials = new
Pool({
 user: "postgres",
 password: "766119As!",
 host: "localhost",
 port: 5432,
 database: "PracticeSite",
 ssl: false
});
module.exports =
credentials;