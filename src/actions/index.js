let recipeName = '';
console.log('HERE IS OUR ENVIRONMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-------------------------', process.env.NODE_ENV);
let domainName = process.env.NODE_ENV === 'production' ? 'https://ancient-eyrie-66439.herokuapp.com' : 'http://localhost:3000';

export function getToken(recipeId) {
  return function(dispatch) {
    dispatch({type: "GET_TOKEN", payload: window.sessionStorage.getItem('recipleaseToken')});
  }
}

export function fetchRecipes() {
  return function(dispatch) {
  	fetch(domainName + '/recipes', {
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
    fetch(domainName + '/recipe/'+ recipeId, {
      method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
      dispatch({type: "RECIEVE_RECIPE", payload: data});
    });
  }
}

export function deleteRecipe(recipeId) {
  return function(dispatch) {
    fetch(domainName + '/recipe/' + recipeId, {
      method: 'delete'
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(deleteData) {
      fetch(domainName + '/recipes', {
        method: 'get'
      })
        .then(function(response) {
        return response.json();
        })
        .then(function(data) { 
          dispatch({type: "RECIEVE_RECIPES", payload: data});
        });
    });
  }
}