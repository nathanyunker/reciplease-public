const initialState = {
  fetching: false,
  fetched: false,
  recipes:[],
  error:null,
  recipe: {}
};

const recipe = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_RECIPE_NAME':
      return [...state,{name: action.payload.name}];
    case 'RECIEVE_RECIPES':
      return Object.assign({}, state, {fetching: false, fetched: true, recipes: action.payload});
      break;
    case 'RECIEVE_RECIPE':
      return Object.assign({}, state, {fetching: false, fetched: true, recipe: action.payload});
      break;
    default:
      return state
  }
};

export default recipe