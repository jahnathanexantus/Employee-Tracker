DROP DATABASE IF EXISTS employee_db;
-- Creates the "department_db" database --
CREATE DATABASE employee_db;

-- Makes it so all of the following code will affect employee_db --
USE employee_db;

-- Creates the table "department" within inventory_db --
CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL;

);

CREATE TABLE role (
    id INT NSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) UNIQUENOT NULL,
    salary DECIMAL UNSIGNED,
    department_db INT UNSIGNED NOT NULL,
    FOREIGN KEY (department_id),
    REFERENCES department_(id);

);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) UNIQUE NOT NULL,
    last_name VARCHAR(255) UNIQUE NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(role_id),
    REFERENCES role_(id);

);

