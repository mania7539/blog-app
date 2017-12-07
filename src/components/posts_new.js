import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ""}
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
    // ```{field.meta.error}``` show validation errors to the user 
    //
    // ```field.meta.touched``` is a state property of Field which means 
    // that a user has "selected" or "focused" an input and "then focused out" of the input.
    //
    // NOTE: this function is for the 'component' props in Field component.
    //

    onSubmit(values) {
        // 'this' === component
        console.log(values);

    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title for Post"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Post Content"
                        name="content"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
        // ```<form><Field /></form>```
        // the 1st property (name) of the field is meant to reflect the "title" of a post
        // the 2nd property (component) of the field takes in a function, so a function or 
        //  another component that will be used to display this field component.
        //
        // we do nothing to set the input data type such as: text, checkbox, or etc in Field.
        // however, we set the input data type in the passed function of "component" property of "Field" .
        //
        // ```component={this.renderTitleField}```
        // we're not putting any parentheses here, we are just providing a reference to a 
        // function because the field will call that function at some point in the future
        //
        // we can pass props to the function assigned to 'component' property 
        // and get the props from the argument (field) of the function
        //
        // 'handleSubmit' takes a function that we defined and runs the redux-form.
        // 'handleSubmit' says Ok, we need to validate the form, then redux-form says
        // if everthing looks good and valid, it's ready to be submitted, then
        // it calls the callback ```this.onSubmit.bind(this)``` and passes us the values
        // out of the form to work.
        //
        // we are calling ```.bind(this)``` because we are passing this on submit as a callback function
        // that will be executed in some different context outsie of our component, so to make sure
        // that we still have access to the correct 'this' being essentially our component inside of this thing,
        // we add on the ```.bind(this)```

    }
}

function validate(values) {
    // console.log(values) -> {title:'asdf', categories: 'asdf', content: 'asdf'}
    const errors = {};
    // return an empty object if there's no error
    //
    // redux form assumes that there's absolutely nothing wrong
    //  with our form.

    // TODO: validate the inputs from "values"
    // if (!values.title.length < 3) {
    //     errors.title = "Title must be at least 3 characters!";
    // }
    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content please";
    }

    return errors;
    // if 'errors' is an empty object {}, the form is fine to submit.
    //
    // however if 'errors' has *any* property, redux form will assume that in fact there's
    //  an issue with the form, and it fails validation, 
    //  and it should not submit the form at all.
}
//
// this function 'validate' will be passed to reduxForm in 
// 'validate' property.
//
// the 'values' argument is an object that contains 
// all the different values that the user has entered
// into the form.


export default reduxForm({
    validate,
    form: "PostsNewForm"
})(PostsNew);
//
// the code below is as the same as the above one:
// ```
// export default reduxForm({
//     validate: validate,
//     form: "PostsNewForm"
// })(PostsNew);
// ```
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