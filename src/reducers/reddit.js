const initialState = {
    fetching: false,
    fetched: false,
    favorites:[],
    error:null
  };
  
  const reddit = (state = initialState, action) => {
    switch (action.type) {
      case 'RECIEVE_REDDIT_FAVORITES':
        console.log('GOING TO RECVIEVE THE REDDIT FAVORITES');
        return Object.assign({}, state, {fetching: false, fetched: true, redditFavorites: action.payload.redditFavorites});
        break;
      default:
        return state
    }
  };
  
  export default reddit