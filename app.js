var express = require("express");
var app = express();

//Add this to serve the public folder
app.use(express.static("public"));


//Add this to make .ejs files the default (can leave off the .ejs)
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("home");
});

app.get("/dislike/:thing", function(req, res) {
	var thing = req.params.thing;
	
	res.render("dislike", {thingVar: thing});
});

app.get("/posts", function(req, res) {
	var posts = [
		{title: "Post 1", author: "Bob"},
		{title: "Post 2", author: "Tim"},
		{title: "Post 3", author: "Rob"},
	]
	
	res.render("posts", {posts: posts});
});









app.get("*", function(req,res) {
	res.send("<h1>Sorry, this page was not found.</h1>")
});


app.listen(3000, function() {
	console.log("Server is now listening on port 3000");
});