import _ from "lodash";
import { FETCH_POSTS } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload.data);
            return _.mapKeys(action.payload.data, "id");
            // our source: [post1, post2]
            // our goal: {4: post1, 36: post2}

        default:
            return state;
    }
    
}