const initialState = {
  id: '', // ranch user id
  firstName: '', 
  lastName: '', 
  ranch: '', 
  email: ''
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'

export function updateUser(user) {
  // console.log(' user reducer console:', user)
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER
  }
}

function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_USER:
      const { id, firstName, lastName, ranch, email} = action.payload
      return {id, firstName, lastName, ranch, email}
    case CLEAR_USER:
      return {...initialState}
    default: 
      return state
  }
}

export default reducer