import { combineReducers} from 'redux'
import dataReducer from './dataReduce'


const rootReducer = combineReducers({
  nav: dataReducer
})

export default rootReducer