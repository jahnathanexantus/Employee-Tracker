



const connection = mysql2.createConnection(
	{
		host: "localhost",
		// MySQL username,
		user: "root",
		// MySQL password
		password: "rootroot",
		database: "employee_db",
	},
	
);

module.exports = connection