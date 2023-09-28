CREATE DATABASE IF NOT EXIST companydb;

USE companydb;

CREATE TABLE employees(
    id INT(11)NOT NULL AUTO_INCREMENT,
    name VARCHAR(45)DEFAULT NULL,
    salary INT(5)DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE employees;

INSERT INTO employees values
(1, 'John', 1000),
(2, 'Mike', 2000),
(3, 'Sara', 3000),
(4, 'Peter', 4000);