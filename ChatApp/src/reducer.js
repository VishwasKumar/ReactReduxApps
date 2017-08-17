import { List, Map } from 'immutable';

const init = List([]);

export function reducer(state=init, action) {
    switch (action.type){
        case 'ADD_COMMENT': return state.push(Map(action.payload));
        default:
            return state;
    }
}