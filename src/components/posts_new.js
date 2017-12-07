import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
    render() {
        return (
            <div>
                <form>
                    <Field
                        name="title"
                        component={}
                    />
                </form>
            </div>
        );
        // ```<form><Field /></form>```
        // the 1st property (name) of the field is meant to reflect the "title" of a post
        // the 2nd property (component) of the field takes in a function, so a function or 
        //  another component that will be used to display this field component.
    }
}

export default reduxForm({
    form: "PostsNewForm"
})(PostsNew);
//
// Definition: Redux Form
//
// you can essentially think of 'redux-form' right here
// as being identical or at least very similar to the connect helper
// that we've been using from 'react-redux'
//
// we might want to show user multiple forms on a single page,
// for example maybe whenever a user wants to sign into our application,
// we want to show them both a sign-in and a sign-up form at the same time
// to handle the case 1)when they already signed up to an application
// or in the case 2)they need to sign up.
//
// by providing an "unique string", which is no requirement for formatting in the string.
// , we ensure that if we're showing multiple different forms on the screen
// at a different time or at a same time, 
// redux form will handle all those different forms correctly.
// so we won't try to merge state from multiple different forms
// into a single piece of state essentially.
// 
// if we have another file and use the "form: PostsNewForm"
// it would cause all the form state that exists inside of this other component
// to be merged into "PostsNewForm" in the PostsNew here.
//```
// PostsEdit - posts_edit.js
// export default reduxForm({
//     form: "PostsNewForm"
// })(PostsNew);
//```