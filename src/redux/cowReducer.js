const initialState = {
  rfid: '',
  breed: '',
  gender: '',
  purchasePrice: '',
  location: ''
}

const UPDATE_COW = 'UPDATE_COW'

export function updateNewCow(cow) {
  return{
    type: UPDATE_COW,
    payload: cow
  }
}

function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_COW:
      const {rfid, breed, gender, purchasePrice, location} = action.payload
      return {rfid, breed, gender, purchasePrice, location}
    default: 
      return state
  }
}

export default reducer

