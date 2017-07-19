const initialState = {
  fetching: false,
  fetched: false,
  recipes:[],
  error:null,
  recipe: 123
}

const recipe = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_RECIPE_NAME':
      return [...state,{name: action.payload.name}]
    case 'CHANGE_RECIPE_CAlORIE_COUNT':
      return [...state,{calorieCount: action.payload}]
    case 'FETCH_USER_START':
      return Object.assign({}, state, {fetching: true})
      break
    case 'RECIEVE_RECIPES':
      return Object.assign({}, state, {fetching: false, fetched: true, recipes: action.payload})
      break
    default:
      return state
  }
}

export default recipe