const mongoose = require("mongoose");


const recipeSchema = mongoose.Schema({
	name: String,
	//ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "ingredients" }],
	
});

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;
