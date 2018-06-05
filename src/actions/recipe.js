let domainName = process.env.NODE_ENV === 'production' ? 'https://ancient-eyrie-66439.herokuapp.com' : 'http://localhost:3000';

//Breaking fetch logic into seperate function to allow both fetchRecipes and deleteRecipes to use it with their dispatch
function retrieveRecipes(dispatch) {
    fetch(domainName + '/recipes', {
        method: 'get'
      })
      .then(response => response.json())
      .then(data => { 
            dispatch({type: "RECIEVE_RECIPES", payload: data});
      });
}

function fetchRecipes() {
    return (dispatch) => {
        retrieveRecipes(dispatch);
    }
}

function fetchRecipe(recipeId) {
    return dispatch => {
      fetch(domainName + '/recipe/'+ recipeId, {
        method: 'get'
      })
      .then(response => response.json())
      .then(data => {
        dispatch({type: "RECIEVE_RECIPE", payload: data});
      });
    }
}

function deleteRecipe(recipeId) {
    return dispatch => {
      fetch(domainName + '/recipe/' + recipeId, {
        method: 'delete'
      })
      .then(response => response.json())
      .then(deleteData => {
        retrieveRecipes(dispatch);
      });
    }
}

function saveRecipe(recipe, operation) {
  return dispatch => {
    let myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    
    let request = {
      method: operation,
      headers: myHeaders,
      mode: 'cors',
      body: JSON.stringify(formPayload)
    };

    fetch(endpoint, request)
      .then(response => response.json())
      .then(data => {
        window.location = '#/recipe-list';
      });
  }
}

module.exports = {
    fetchRecipe,
    fetchRecipes,
    deleteRecipe
}