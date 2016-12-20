CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
item_id INTEGER (3) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(75) NOT NULL,
department_name VARCHAR(50),
price DECIMAL(11,2),
stock_quantity INTEGER(7),
PRIMARY KEY (item_id)
);

SELECT * from products;