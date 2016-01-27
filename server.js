var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/notes", function(req, res) {
	var notes = [
		{text: "First Note"},
		{text: "Second Note"},
		{text: "Third Note"}
	]
	res.send(notes);
});

app.listen(3000);