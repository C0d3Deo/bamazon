'use strict'

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "bamazon"
});

connection.connect(function(error) {
	if (error) throw error;

	connection.query("SELECT item_id, product_name, price FROM products", function(error, result) {

		for (var i = 0; i < result.length; i++) {
			console.log("|", result[i].item_id, "|", result[i].product_name, "|", "$"+result[i].price, "|");
		};
			
		inquirer.prompt({
			name: "itemSelect",
			type: "list",
			message: "Please select the item_id of what you'd like to purchase. NO REFUNDS!",
			choices: function() {
				var itemsArray = [];
				for (var j = 0; j < result.length; j++) {
					itemsArray.push(result[j].item_id);
				}
				return itemsArray;
			}
		});
	})
	console.log('')
});
	console.log("Welcome Strangah! Whaddya buyin\'\?");
