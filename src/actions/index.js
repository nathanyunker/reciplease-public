let recipeName = '';

export function fetchUsers() {
  return function(dispatch) {
  	fetch('http://rest.learncode.academy/api/wstern/users', {
      method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) { 
    	dispatch({type: "RECIEVE_USERS", payload: data});
      console.log('DATA', data)
    });
  }
}

export function fetchRecipes() {
  return function(dispatch) {
  	fetch('http://localhost:3000/recipe', {
      method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) { 
    	dispatch({type: "RECIEVE_RECIPES", payload: data});
      console.log('DATA', data)
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