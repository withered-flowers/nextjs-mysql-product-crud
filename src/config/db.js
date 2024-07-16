// import mysql from "serverless-mysql";

// export const pool = mysql({
// 	config: {
// 		host: "localhost",
// 		user: "root",
// 		password: "S3cret",
// 		port: 3307,
// 		database: "productDB",
// 	},
// });

import mysql from "mysql2/promise";

export const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "S3cret",
	port: 3307,
	database: "productDB",
});
