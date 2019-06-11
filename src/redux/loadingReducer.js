const initialState = {
  loadStatus: false
}

const UPDATE_LOADING = 'UPDATE_LOADING'

export function updateLoading(loadStatus){
  return{
    type: UPDATE_LOADING,
    payload: loadStatus
  }
}

function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_LOADING:
      const {loadStatus} = action.payload
      return{
        loadStatus,
      }
    default: 
      return state
  }
}

export default reducer