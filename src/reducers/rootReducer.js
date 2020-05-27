import { combineReducers } from 'redux'
import CategoryReducer from './categoryreducer'
import manageCountries from './manageCountries'
import manageSymptoms from './manageSymptoms'
import manageMedicines from './manageMedicines'


const RootReducer = combineReducers({ 
    countries: manageCountries, 
    symptoms: manageSymptoms,
    medicines: manageMedicines, 
    category: CategoryReducer 
})
									
console.log(RootReducer)

export default RootReducer