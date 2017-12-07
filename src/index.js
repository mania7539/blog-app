// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/app";

// // Take this component's generated HTML and put it on the page (in the DOM)
// ReactDOM.render(<App />, document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from './reducers';
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
/**
 * ```<Route path="/posts/:id" component={PostsShow} />```
 * The ':id' here is a wildcard of sorts, so react-router's going to
 * take whatever is in that little position URL and pass it as a property or a prop
 * to our PostsShow component.
 * 
 * And we want ```<Route path="/posts/:id" component={PostsShow} />```
 * to be the 2nd route, so '/posts/new' won't be recognized as '/posts/:id'
 */