const initialState = {
    token: ''
  };
  
  const user = (state = initialState, action) => {
    switch (action.type) {
    case 'GET_TOKEN':
        return Object.assign({}, state, {token: action.payload.token});
        break;
      default:
        return state
    }
  };
  
  export default user