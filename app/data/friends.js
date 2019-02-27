const path  = require('path');

var friends = [
	{
		name: "Mat",
		photo: path.join("./img/mat.jpg"),
		scores: [2, 1, 2, 1, 1, 2, 2, 1, 1, 1]
	},
	{
		name: "Chad",
		photo: path.join("./img/chad.png"),
		scores: [2, 5, 4, 1, 2, 3, 3, 2, 3, 3]
	},
	{
		name: "Art",
		photo: path.join("./img/art.jpg"),
		scores: [3, 1, 3, 5, 2, 3, 2, 2, 5, 5]
	},
	{
		name: "Jazz",
		photo: path.join("./img/jazz.jpg"),
		scores: [1, 1, 5, 3, 3, 5, 1, 2, 3, 4]
	},
	{
		name: "Derrick",
		photo: path.join("./img/derrick.jpg"),
		scores: [3, 1, 4, 4, 2, 4, 2, 5, 1, 3]
	},
	{
		name:"Sue",
		photo: path.join("./img/sue.jpg"),
		scores: [2,3,1,1,4,5,5,3,2,1]
	}
];

module.exports = friends;