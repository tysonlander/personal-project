const initialState = {
  cowId: 0
}

const UPDATE_COW_ID = 'UPDATE_COW_ID'

export function updateCowId(cowId){
  return{
    type: UPDATE_COW_ID,
    payload: cowId
  }
}

function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_COW_ID:
      const {cowId} = action.payload
      return{
        cowId,
      }
    default: 
      return state
  }
}

export default reducer