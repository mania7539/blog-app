import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostsShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        // the above code is a destructing format of below code:
        // ```this.props.match.params.id;```
        //
        // the property of 'props' right here is directly provided by react-router.
        //
        // now with the react-router the 'match' right here is the top level property,
        // the 'params' property inside of it is an object that lists all the different wildcard tokens 
        //  that exists inside the URL. (which means ':id' here, defined in Route path of ./src/index.js)
        //
        this.props.fetchPost(id);
    }

    render() {
        return (
            <div>
                Posts Show!
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return ({
        post: posts[ownProps.match.params.id]
    });
}
// to mapStateToProps: this.props === ownProps
// 
// try to refactor the below code to be a more reusable one as the above 
// with the 2nd argument.
// ```
// function mapStateToProps({ posts }) {
//     return ({
//         posts
//     });
// }
// ```

export default connect(mapStateToProps, { fetchPost })(PostsShow);