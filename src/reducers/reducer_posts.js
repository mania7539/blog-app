import _ from "lodash";
import { FETCH_POSTS, FETCH_POST } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            console.log(`fetched post id=${action.payload.data.id}`);
            return { ...state, [action.payload.data.id]: action.payload.data};
            // ```[action.payload.data.id]:``` is doing a key interpretation, 
            //  not creating an array
            //
            // the below ES5 code is as the same as the above ES6 code:
            // ```
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;
            // ```
        case FETCH_POSTS:
            console.log(action.payload.data);
            return _.mapKeys(action.payload.data, "id");
            // our source: [post1, post2]
            // our goal: {4: post1, 36: post2}

        default:
            return state;
    }
    
}