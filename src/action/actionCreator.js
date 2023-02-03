import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from './Type'


export const fetchData = ()=>{
  return{
      type:FETCH_DATA
  }
}


export const fetchDataSuccess = data =>{
  return{
    type: FETCH_DATA_SUCCESS,
    payload:data
  }
}

export const fetchDataFailure =()=>{
  return{
    type: FETCH_DATA_FAILURE
  }
}


export  const fetchDataApi =()=>{
  return(dispatch)=>{
    dispatch(fetchData())
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key=c559996ac8559f62e571ce505deda61f").then(response=>response.json())
    .then(responseJson =>{
      dispatch(fetchDataSuccess(responseJson.results))
    })
    .catch(error => dispatch(fetchDataFailure(error)))
  }
}







