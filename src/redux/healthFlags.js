const initialState = {
  sleep: '',
  steps: '',
  stress: '',
  temp: '',
  milk: ''
}

const UPDATE_FLAGS = 'UPDATE_FLAGS'

export function updateFlags(healthFlags){
  return{
    type: UPDATE_FLAGS,
    payload: healthFlags
  }
}

function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_FLAGS:
      const {sleep, steps, stress, temp, milk} = action.payload
      return {
        sleep,
        steps,
        stress,
        temp,
        milk
      }
    default: 
      return state
  }
}

export default reducer