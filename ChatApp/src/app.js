import React from 'react';
import { render } from 'react-dom';
import {CommentsList} from "./container";
import {reducer} from "./reducer";
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const store = createStore(reducer);


render (
    <Provider store={ store }>
        <CommentsList/>
    </Provider>,
    document.getElementById('app')
);