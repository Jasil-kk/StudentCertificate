import { combineReducers }from "redux"
import loginReducer from "./Login/reducer"
import logoutReducer from "./Login/reducer"
import studentsReducer from "./Students/reducer"
import courseReducer from "./Courses/reducer"
import categoryReducer from "./CourseCategory/reducer"


const rootReducer = combineReducers({
    loginReducer,logoutReducer,studentsReducer,courseReducer,categoryReducer
})


export default rootReducer