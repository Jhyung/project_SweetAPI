import { LOAD_BOARD_CLEAR, CALL_WRITE } from '../actions/actionTypes';
import initState from './initState';

export default function boardReducer(state = initState.contents, action) {
    switch(action.type) {

        case CALL_WRITE :
            return [
                ...state,
                Object.assign({}, action.content)
            ];

        case LOAD_BOARD_CLEAR : 
            return action.contents;

        default : 
            return state;
    }
}