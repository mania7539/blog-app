import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    /**
     * 'componentDidMount' function will be automatically called by react immediately after this component
     * has shown up inside the DOM. That makes it a perfect location to go and fetch some data
     * or initiate some one time loading procedure.
     * 
     * why would we want to go and fetch data after the component has shown up on the screen?
     * in fact, it doesn't really make a difference whether or not we call that action-creator
     * before or after the component renders on the screen. and the reason for that is fetching
     * our data is an asynchronous operation. whenver we reach out to that blog post API to fetch
     * some data, it takes some amount of time to fetch some amount of data and had it returned to 
     * our browser. and react doesn't have any concept of figuring out how to say not render the 
     * component until after we do some pre-loading operation. react is always going to eagerly load
     * itself or render the component we should say as soon as it can.
     */

    render() {
        return (
            <div>
                Posts Index
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(PostsIndex);
// the code below is as the same as the above ES6 code.
// ```export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);```
//
// in the past, we've made us of the connect helper by
// defining the map dispatched to props function whenever we want
// an action-creator directly into a component o we can call it off the props object. 
//
// there's another way in which we can wire up in action-creator
// in this way is a little bit more of a shortcut.
//
// so rather than defining a separate function for defining exactly how the action is
// going to be hooked up, we're going to first define our mapStateToProps argument
// of null, because we are not passing mapStateToProps.
//
// and then as the 2nd argument, rather than passing in that extra function,
// we're just going to pass in the acion-creator itself inside of an object.
// and they are identical in nature.
//
// the reason that we first use mapDispatchToProps in that separate function format
// was because there definitely are times where you want to use a separate function like
// for example: if you want to do some computation on exactly how you want to call the 
// action-creator ahead of time.
// in addition, it gives you a little bit more insight to what's going on behind the scenes.
// Passing in the action-creator like this, '{ fetchPosts }', right here is just asking connect to do that 
// extra step for us.
//
// moving forward we're probably going to generally be "using this abbreviated syntax", 
// unless it looks like there's a good reason to bind the dispatch function ahead of time
// and it really just so happens that there might be inside this application and so 
// we will get some good experience of where still might want to do that separate breakout function.
// 