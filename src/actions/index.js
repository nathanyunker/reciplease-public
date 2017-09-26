let recipeName = '';
console.log('LETS PRINT OUT OUR ENVIRONMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
console.log('HERE IT IS!!!!-------------------------', process.env.NODE_ENV)
let domainName = process.env.NODE_ENV === 'production' ? 'https://ancient-eyrie-66439.herokuapp.com' : 'http://localhost:3000';

export function fetchRecipes() {
  return function(dispatch) {
  	fetch(domainName + '/recipes', {
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
    fetch(domainName + '/recipe/'+ recipeId, {
      method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
      dispatch({type: "RECIEVE_RECIPE", payload: data});
    });
  }
}