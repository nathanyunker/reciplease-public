function getToken(recipeId) {
    return (dispatch) => {
      dispatch({type: "GET_TOKEN", payload: window.sessionStorage.getItem('recipleaseToken')});
    }
}

module.exports = {
    getToken
}