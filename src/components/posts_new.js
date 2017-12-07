import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
    renderTitleField(field) {
        return (
            <div>
                <input
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }
    // the argument 'field' is an object contains some event handlers that we need to wire up
    // to the JSX that we're returning. 
    //
    // the purpose of the argument 'field' is like a callback of Field component.
    // (or we call the 'field' argument object as bunch of event handlers such as
    //  onChange, onBlur, onFocus, or etc...)
    // ```
    //  <input
    //     onChange={field.input.onChange}
    //     onFocus={field.input.onFocus}
    //     onBlur={field.input.onBlur}
    //     {...field.input}
    // />
    // ```
    //
    // it's up to us to make sure that this Field component recognizes that when it calls renderTitleField,
    // which returns the input component, the Field component needs to be responsible for 
    // handling any changes of this input.
    //
    // NOTE: this function is for the 'component' props in Field component.

    render() {
        return (
            <div>
                <form>
                    <Field
                        name="title"
                        component={this.renderTitleField}
                    />
                </form>
            </div>
        );
        // ```<form><Field /></form>```
        // the 1st property (name) of the field is meant to reflect the "title" of a post
        // the 2nd property (component) of the field takes in a function, so a function or 
        //  another component that will be used to display this field component.
        //
        // we do nothing to set the input data type such as: text, checkbox, or etc in Field.
        //
        // ```component={this.renderTitleField}```
        // we're not putting any parentheses here, we are just providing a reference to a 
        // function because the field will call that function at some point in the future
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