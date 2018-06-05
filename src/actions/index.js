let recipeActions = require('./recipe');
let authActions = require('./auth');

exports.getToken = authActions.getToken;
exports.fetchRecipe = recipeActions.fetchRecipe;
exports.fetchRecipes = recipeActions.fetchRecipes;
exports.deleteRecipe = recipeActions.deleteRecipe;

module.exports = {
  deleteRecipe: recipeActions.deleteRecipe,
  fetchRecipe: recipeActions.fetchRecipe,
  fetchRecipes: recipeActions.fetchRecipes,
  getToken: authActions.getToken
}