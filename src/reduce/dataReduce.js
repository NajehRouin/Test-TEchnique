

const initialState ={
  data:[],
  isLoading: false,
  error: false
}

const dataReducer = (state=initialState, action)=>{
  switch(action.type){
      case 'FETCH_DATA':
      return{
        ...state,
        isLoading:true,
        data:[]
      }
      case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
      case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        isLoading:false,
        error:true
      }
    default:
    return state 

  }
}

export default dataReducer

