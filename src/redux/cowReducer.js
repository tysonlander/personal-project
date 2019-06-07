const initialState = {
  rfid: '',
  breed: '',
  gender: '',
  purchasePrice: '',
  location: ''
}

const UPDATE_COW = 'UPDATE_COW'
const CLEAR_NEW_COW = 'CLEAR_NEW_COW'

export function updateNewCow(cow) {
  return{
    type: UPDATE_COW,
    payload: cow
  }
}

export function clearNewCow(){
  return{
    type: CLEAR_NEW_COW
  }
}

function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_COW:
      const {rfid, breed, gender, purchase_price, location} = action.payload
      return {
        rfid, 
        breed, 
        gender, 
        purchasePrice: purchase_price, 
        location
      }
    case CLEAR_NEW_COW:
      return {...initialState}
    default: 
      return state
  }
}

export default reducer

