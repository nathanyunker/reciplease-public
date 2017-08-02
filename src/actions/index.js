let recipeName = '';

export function fetchRecipes() {
  return function(dispatch) {
  	fetch('http://localhost:3000/recipe', {
      method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) { 
    	dispatch({type: "RECIEVE_RECIPES", payload: data});
    });
  }
}

export function fetchRecipe(recipeId) {
  return function(dispatch) {
    fetch('http://localhost:3000/recipes/'+ recipeId, {
      method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
      console.log('Hooray it works?', data);
      dispatch({type: "RECIEVE_RECIPE", payload: data});
    });
  }
}

export function changeRecipeName(name) {
  return {
    type: 'CHANGE_RECIPE_NAME',
    payload: {
    	name: "Nathan",
    	age: 27
    }
  }
}