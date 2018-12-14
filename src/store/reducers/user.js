
const initialState = {
  name: 'Bert'
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_NAME':
      return state

    case 'SET_USER_NAME':
      return Object.assign({}, state, {
        name: action.name
      })
    
    default:
      return state
  }
}

export default user