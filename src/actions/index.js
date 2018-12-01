console.log('Current Environment-------------------------', process.env.NODE_ENV);
let domainName = process.env.NODE_ENV === 'production' ? 'https://ancient-eyrie-66439.herokuapp.com' : 'http://localhost:3000';
let redditDomain = process.env.NODE_ENV === 'production' ? 'not set yet' : 'http://localhost:3001';

export function getToken(recipeId) {
  return function(dispatch) {
    console.log('sENT THE DISPATCH');
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

export function fetchRedditFavorites(secret) {
  return function(dispatch) {
  	fetch(redditDomain + `/reddit-profiler/posts/saved?secret=${secret}`, {
      method: 'get'
    })
    .then(function(response) {
      console.log('HERE IS THE RESPONSE JSON', response.json);
        return response.json();
    })
    .then(function(data) { 
    	  dispatch({type: "RECIEVE_REDDIT_FAVORITES", payload: data});
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