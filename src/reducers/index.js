import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// recommend to import this 'reducer' property as something we called 
// 'formReducer' as an alias since 'reducer' is kind of too casual/generic a keyword.

import PostsReducer from "./reducer_posts";

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});

export default rootReducer;