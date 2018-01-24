let recipeName = '';

export function getToken(recipeId) {
  return function(dispatch) {
    console.log('sENT THE DISPATCH');
    dispatch({type: "GET_TOKEN", payload: window.sessionStorage.getItem('recipleaseToken')});
  }
}

export function fetchRecipes() {
  return function(dispatch) {
  	fetch('http://localhost:3000/recipes', {
      method: 'get'
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) { 
    	  dispatch({type: "RECIEVE_RECIPES", payload: data});
    });
  }
}

export function fetchRecipe(recipeId) {
  return function(dispatch) {
    fetch('http://localhost:3000/recipe/'+ recipeId, {
      method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
      dispatch({type: "RECIEVE_RECIPE", payload: data});
    });
  }
}