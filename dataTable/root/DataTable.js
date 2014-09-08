//DataTable.js

var app = angular.module('gemStore', []);

app.controller('TableController', function(){
	this.columns = [];
	this.addColumns = function(columnsArray){
		for (var i = 0; i < columnsArray.length; i++) {
			var tempCol = column;
			tempCol.field = columnsArray[i];
			this.columns.push(tempCol);
			delete tempCol;
		};
	};
});

var dataTable = {
	rows: [],
	columns: []
};

var column = {
	field: "",
	name: "",
	value: ""
};