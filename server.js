const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "rootroot",
	database: "employee_db",
});

// set up error handling in case the connection fails/breaks
connection.connect(function (err) {
	if (err) throw err;
});

function mainMenu() {
	return inquirer
		.prompt([
			{
				type: "list",
				name: "choice",
				message: "what would you like to do?",
				choices: [
					{
						name: "View all employees",
						value: "VIEW_EMPLOYEE",
					},
					{
						name: "View all departments",
						value: "VIEW_DEPARTMENTS",
					},
					{
						name: "View all roles",
						value: "VIEW_ROLES",
					},
					{
						name: "Add an employee",
						value: "ADD_EMPLOYEE",
					},
					{
						name: "Add a department",
						value: "ADD_DEPARTMENT",
					},
					{
						name: "Updating an employee role",
						value: "UPDATING_EMPLOYEE ROLE",
					},
					{
						name: "Quit",
						value: "Quit",
					},
				],
			},
		])
		.then(function (answer) {
			switch (answer.choice) {
				case "View all employees":
					viewEmployees();
					break;
				case "View all departments":
					viewDepartments();
					break;
				case "View all roles":
					viewRole();
					break;
				case "Add an employee":
					addEmployee();
					break;
				case "Add a department":
					addDepartment();
					break;
				case "Updata an employee role":
					updatingRole();
					break;
				case "EXIT":
					exitCycle();
					break;
				default:
					break;
			}
		});
}
mainMenu();
